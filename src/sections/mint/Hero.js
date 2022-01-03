// import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
// import { Box, Container, Typography } from '@mui/material';
// components
// import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    backgroundSize: 'cover',
    width: '100%',
    backgroundPosition: 'center',
    backgroundImage:
        'url(mint-bg.jpg)',
    minHeight: 300,
    opacity: '.82',
    padding: 0,
    opactity: '.82',
    transition: 'filter, .5s',
    filter: 'blur(0)',
    '&:after': {
        content: `""`,
        height: '5px',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)',
        position: 'absolute',
        top: '100%',
        left: '50%',
        zIndex: '2',
        transform: 'translate(-50%,-100%)'
    }
}));


// const ContentStyle = styled('div')(({ theme }) => ({
//     textAlign: 'center',
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//         textAlign: 'center',
//         position: 'absolute',
//     },
//     '&:after': {
//         background: `linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)`,
//         height: '5px',
//     },
// }));

// ----------------------------------------------------------------------

export default function AboutHero() {
    return (
        <>
            <RootStyle />
            {/* <div style={{ backgroundColor: '#13055c' }}><DividerStyle /></div> */}

        </>
    );
}
