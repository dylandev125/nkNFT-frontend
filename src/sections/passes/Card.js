// @mui
// import { useState } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
// components
// import { MotionContainer } from '../../components/animate';
import Iconify from '../../components/Iconify';
import { useDispatch, useSelector } from '../../redux/store';
import {
    increaseQuantity,
    decreaseQuantity,
} from '../../redux/slices/passes';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    position: 'relative',
    cursor: 'pointer',
    width: '260px',
    height: '360px',
    left: '0px',
    top: '0px',
    // padding: '3px',
    border: '2px solid transparent',
    borderRadius: '47px',
    background: 'linear-gradient(#150A46,#150A46) padding-box, linear-gradient(162.31deg, #0DAEFA -2.45%, #301778 95.19%) border-box',
    display: 'inline-block',
    '&:hover': {
        background: 'linear-gradient(#150A46,#150A46) padding-box, linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%) border-box',
    }
}));

// const ContentStyle = styled('div')(() => ({
//     padding: '15px'
// }));

const CardImage = styled('div')(() => ({
    position: 'absolute',
    width: '255px',
    height: '280px',
    left: '0px',
    top: '0px',
    background: 'url(passes/pass11.gif) no-repeat center',
    borderRadius: '46px 46px 80px 80px',
    border: '1px solid #000000'
}));

// const CatImage = styled('img')(() => ({
//     // position: 'absolute',
//     width: '255px',
//     height: '280px',
//     // borderRadius: '46px 46px 80px 80px',
//     // left: '0px',
//     // top: '0px',
//     // border: '1px solid #000000'

//     // left: '5px',
//     // top: '10px',
//     // background: 'url(Space Neko.png) no-repeat center',
// }));

const CatInfo = styled('div')(() => ({
    position: 'absolute',
    left: '10.38%',
    right: '10.38%',
    top: '68%',
    bottom: '20%',
    // background: 'rgba(21, 10, 70, 0.6)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: '16px',
    padding: '10px',
    border: '1px solid #0daefa78',
    background: 'rgba(21, 10, 70, 0%)',
    /* Note: backdrop-filter has minimal browser support */
    // background: 'linear-gradient(#0000002e,#0000002e) padding-box, linear-gradient(140.81deg, #1396E6 -8.54%, #301778 109.89%) border-box',
    // display: 'inline-block',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    // borderImageSource: 'linear-gradient(140.81deg, #1396E6 -8.54%, #301778 109.89%)'
}));

const InfoLayout = styled('div')(() => ({
    position: 'absolute',
    width: '206px',
    height: '60px',
    left: '20px',
    bottom: '5px',
    margin: '10px 0px'

}));

const PriceLayout = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '25px',
    // padding: '15px',
    // position: 'absolute',
    // width: '206px',
    // height: '60px',
    // left: '20px',
    // bottom: '60px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
}));

const PriceInfo = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    position: 'static',
    // width: '118px',
    height: '29px',
    left: '0px',
    top: '0px'
}));

const TypographyStyle = styled(Typography)(() => ({
    color: 'transparent',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
}));

const IncrementerStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(0.5, 0.75),
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.grey[500_32]}`,
}));

// ----------------------------------------------------------------------

Incrementer.propTypes = {
    available: PropTypes.number,
    quantity: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
};

function Incrementer({ available, quantity, onIncrease, onDecrease }) {
    const { cartLength } = useSelector((state) => state.passes);

    return (
        <Box sx={{ width: 96, textAlign: 'right' }}>
            <IncrementerStyle>
                <IconButton size="small" color="inherit" onClick={onDecrease} disabled={!(cartLength > 0 && quantity > 0) || quantity < 1}>
                    <Iconify icon={'eva:minus-fill'} width={16} height={16} />
                </IconButton>
                {quantity}
                <IconButton size="small" color="inherit" onClick={onIncrease} disabled={(cartLength === 2) || quantity >= available}>
                    <Iconify icon={'eva:plus-fill'} width={16} height={16} />
                </IconButton>
            </IncrementerStyle>
        </Box >
    );
}

Card.propTypes = {
    id: PropTypes.number,
    passName: PropTypes.string,
    cost: PropTypes.number,
    quantity: PropTypes.number,
};

export default function Card({ id, passName, cost, quantity }) {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increaseQuantity({ id, passName, cost, quantity }));
    }

    const handleDecrement = () => {
        dispatch(decreaseQuantity({ id, passName, cost, quantity }));

    }

    return (
        <RootStyle id={id}>
            <CardImage />
            <CatInfo>
                <TypographyStyle variant="h4" style={{ fontWeight: '700' }}>{passName}</TypographyStyle>
            </CatInfo>
            <InfoLayout>
                <PriceLayout>
                    <PriceInfo>
                        <TypographyStyle variant="h5" style={{ fontWeight: 700 }}>{cost} ETH</TypographyStyle>
                    </PriceInfo>
                    <PriceInfo>
                        <Incrementer available={2} quantity={quantity} onIncrease={() => { handleIncrement() }} onDecrease={() => { handleDecrement() }} />
                    </PriceInfo>
                </PriceLayout>
            </InfoLayout>
        </RootStyle >
        // </ Link>
    );
}