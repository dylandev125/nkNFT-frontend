import { createSlice } from '@reduxjs/toolkit';
// import Web3EthContract from "web3-eth-contract";
// import Web3 from "web3";
import { ethers } from 'ethers';
// utils
import axios from '../../utils/axios';
import { dispatch } from '../store';

// ----------------------------------------------------------------------
const initialState = {
    loading: true,
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
            // state.loading = true;
        },
        connectionSuccess(state, action) {
            state.loading = false;
            state.account = action.payload.account;
            state.smartContract = action.payload.smartContract;
            state.web3 = action.payload.web3;
        },
        connectionFailed(state, action) {
            state.loading = true;
            state.errorMsg = action.payload.error;
        },
        updateAccount(state, action) {
            if (action.payload?.value) {
                state.account = action.payload.value
                state.errorMsg = "New Account Detected"
            }
        },
        updateNetwork(state, action) {
            state.network = action.payload.value;
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
            // Web3EthContract.setProvider(ethereum);
            const web3 = new ethers.providers.Web3Provider(ethereum);
            const signer = web3.getSigner();

            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                const networkId = await ethereum.request({
                    method: "net_version",
                });
                if (networkId === CONFIG.NETWORK.ID) {
                    console.log('condition satisfied', CONFIG.NETWORK.ID, accounts, networkId)
                    const passContract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, abi, signer)
                    // const SmartContractObj = new Web3EthContract(
                    //     abi,
                    //     CONFIG.CONTRACT_ADDRESS
                    // );
                    dispatch(
                        slice.actions.connectionSuccess({
                            account: accounts[0],
                            smartContract: passContract,
                            web3,
                        })
                    );
                    // Add listeners start
                    ethereum.on("accountsChanged", (accounts) => {
                        console.log(accounts[0])
                        dispatch(slice.actions.updateAccount({value : accounts[0]}));
                    });
                    ethereum.on("chainChanged", (chainId) => {
                        dispatch(slice.actions.updateNetwork({value : chainId}));
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

