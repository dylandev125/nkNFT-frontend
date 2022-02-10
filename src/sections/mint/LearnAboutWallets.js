// import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// components
// import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Button from '../../components/Button'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    paddingTop: '60px',
    paddingBottom: '60px',
    width: '100%',
    textAlign: 'center'
}));

const BoxStyle = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '55px',
}));



// ----------------------------------------------------------------------

export default function LearnAboutWallets() {
    return (
        <>
            <RootStyle>
                <Typography variant="h3" sx={{ marginBottom: '72px' }}>Learn about wallets</Typography>
                <BoxStyle>
                    <img src="arrow-line.svg" alt="" />
                </BoxStyle>
                <BoxStyle>
                    <img src="coming-soon.png" alt="" />
                </BoxStyle>
                <BoxStyle>
                    <Button handleClick={() => { }}>Coming Soon!</Button>
                </BoxStyle>
            </RootStyle>
        </>
    );
}
