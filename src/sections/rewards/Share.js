import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    backgroundSize: 'cover',
    width: '100%',
    padding: '30px',
    height: '550px',
    backgroundPosition: 'center',
    backgroundImage:
        'url(share-bg.png)',
    position: 'relative',
    borderRadius: '46px',
    // padding: theme.spacing(10, 0),
    minHeight: 300,
    margin: '0 auto 200px'
}));


const TreasureStyle = styled('img')(({ theme }) => ({
    width: '46.6vw',
    height: '46.6vw',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    marginTop: '-100px'
}));

const TextStyle = styled('div')(({ theme }) => ({
    width: '923px',
    margin: '144px 0 0 123px',
    position: 'relative',
    zIndex: '2'
}));

const HeadingStyle = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '45px',
    lineHeight: '140%',
    color: '#fff',
    marginBottom: '10px',
    textShadow: '0 0 5px #000'
}));

const SecondaryStyle = styled('div')(({ theme }) => ({
    fontSize: '16px',
    // lineHeight: '160%',
    color: '#8270b6',
    marginBottom: '40px'
}));

const ShareStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '330px',
    fontSize: '16px',
    lineHeight: '160%',
    textAlign: 'center',
    color: '#fff',
    marginRight: '40px'
}));




// ----------------------------------------------------------------------

export default function AboutHero() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <Box sx={{ padding: '15px' }}>
            {isDesktop && <RootStyle>
                {isDesktop && <TreasureStyle src="chest-big.png" alt="treasure" />}
                {isDesktop && <TextStyle>
                    <HeadingStyle>SHARE YOUR UNIQUE LINK TO EARN</HeadingStyle>
                    <SecondaryStyle>Give your friends 5% off their purchases and earn 5% of what they spend</SecondaryStyle>
                    <Box sx={{
                        display: 'flex'
                    }}>
                        <ShareStyle>
                            Share link:
                            <Button sx={{ width: '330px' }} handleClick={e => { }}>Copy Link</Button>
                        </ShareStyle>
                        <ShareStyle>
                            Share on:
                            <Button sx={{ width: '330px' }} handleClick={e => { }}>Social</Button>
                        </ShareStyle>
                    </Box>
                </TextStyle>}
            </RootStyle>}
        </Box>
    );
}
