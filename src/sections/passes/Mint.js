import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// components
// import { MotionContainer } from '../../components/animate';
import Card from './Card';
import CheckoutSummary from './CheckoutSummary';
import { useSelector, useDispatch } from '../../redux/store';
import Button from '../../components/Button'
import {
    connect
} from '../../redux/slices/connection';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    padding: '100px',
}));

// ----------------------------------------------------------------------

export default function Mint() {
    const { realmPasses } = useSelector((state) => state.passes);
    const { loading, account, smartContract, web3, errorMsg } = useSelector((state) => state.connection);
    const dispatch = useDispatch();

    const handleApplyDiscount = () => {

    }

    return (
        <>
            <RootStyle>
                <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                            {realmPasses.map((item) =>
                                <Grid item key={item}>
                                    <Card {...item} />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CheckoutSummary
                            total={90}
                            enableDiscount
                            discount={0}
                            subtotal={20}
                            onApplyDiscount={handleApplyDiscount}
                        />
                        <Button fullWidth size="large" type="submit" variant="contained" handleClick={() => {
                            dispatch(connect()); console.log(loading, account, smartContract, web3, errorMsg)
                        }}>
                            {account ? `${account.substring(0, 19)}...` : 'Mint'}
                        </Button>
                    </Grid>
                </Grid>
            </RootStyle>
        </>
    );
}
