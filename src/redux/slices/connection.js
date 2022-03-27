import { createSlice } from '@reduxjs/toolkit';
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
    loading: false,
    account: null,
    smartContract: null,
    web3: null,
    errorMsg: "",
};

const slice = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        connectionRequest(state) {
            state.loading = true;
        },
        connectionSuccess(state, action) {
            state.loading = false;
            state.account = action.payload.account;
            state.smartContract = action.payload.smartContract;
            state.web3 = action.payload.web3;
        },
        connectionFailed(state, action) {
            state.loading = false;
            state.errorMsg = action.payload.error;
        },
        updateAccount(state, action) {
            if (action.payload?.account) {
                state.account = action.payload.account
            } else {
                state.errorMsg = "Account not connected"
                state.account = null
            }
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    connectionRequest,
    connectionSuccess,
    connectionFailed,
    updateAccount
} = slice.actions;

// ----------------------------------------------------------------------

export function connect() {
    return async () => {
        dispatch(slice.actions.connectionRequest());
        let abi = await axios.get('/config/abi.json');
        abi = abi.data
        let CONFIG = await axios.get('/config/config.json');
        CONFIG = CONFIG.data
        const { ethereum } = window;
        const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
        if (metamaskIsInstalled) {
            Web3EthContract.setProvider(ethereum);
            const web3 = new Web3(ethereum);
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                const networkId = await ethereum.request({
                    method: "net_version",
                });
                if (networkId === CONFIG.NETWORK.ID) {
                    console.log('condition satisfied', CONFIG.NETWORK.ID, accounts, networkId)
                    const SmartContractObj = new Web3EthContract(
                        abi,
                        CONFIG.CONTRACT_ADDRESS
                    );
                    dispatch(
                        slice.actions.connectionSuccess({
                            account: accounts[0],
                            smartContract: SmartContractObj,
                            web3,
                        })
                    );
                    // Add listeners start
                    ethereum.on("accountsChanged", (accounts) => {
                        dispatch(slice.actions.updateAccount(accounts[0]));
                    });
                    ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                    // Add listeners end
                } else {
                    console.log(`Change network to ${CONFIG.NETWORK.NAME}.`)
                    dispatch(slice.actions.connectionFailed({ error: `Change network to ${CONFIG.NETWORK.NAME}.` }));
                }
            } catch (err) {
                console.log(err)
                dispatch(slice.actions.connectionFailed({ error: "Something went wrong." }));
            }
        } else {
            console.log('Install Metamask.')
            dispatch(slice.actions.connectionFailed({ error: "Install Metamask." }));
        }
    };
};

