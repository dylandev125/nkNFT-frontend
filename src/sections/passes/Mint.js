import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
// components
// import { MotionContainer } from '../../components/animate';
import Card from './Card';
import CheckoutSummary from './CheckoutSummary';
import { useSelector } from '../../redux/store';
import Button from '../../components/Button'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    padding: '100px',
}));

// ----------------------------------------------------------------------

export default function Mint() {
    const { realmPasses } = useSelector((state) => state.passes);

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
                        <Button fullWidth size="large" type="submit" variant="contained">
                            Mint
                        </Button>
                    </Grid>
                </Grid>
            </RootStyle>
        </>
    );
}
