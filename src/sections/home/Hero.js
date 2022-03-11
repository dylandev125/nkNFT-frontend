import { Link as RouterLink } from 'react-router-dom';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
// components
import { varFade } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    minHeight: '500px',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        minHeight: '100vh',
        height: '150vh',
        overflow: 'hidden',
    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    zIndex: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    paddingTop: '17%',
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        margin: 'unset',
        textAlign: 'center',
    },
}));

const HeroImgStyle = styled('video')(() => ({
    position: 'absolute',
    top: '-100px',
    left: '50%',
    zIndex: '1',
    transform: 'translateX(-50%)',
    objectFit: 'cover',
    backgroundColor: '#000000',
    opacity: '0.3',
    transition: 'background 0.3s border-radius 0.3s opacity 0.3s',
    width: '100%',
    minHeight: '150vh'
}));

const MainText = styled(Typography)(() => ({
    color: 'common.white',
    textShadow: '10px 5px 5px #240e6347',
    fontWeight: 'bold',
    fontSize: '32px',
    width: '1000px',
    fontFamily: 'Akira Expanded',
    letterSpacing: '2px',
    lineHeight: 1
}));

const SecondaryText = styled(Typography)(() => ({
    color: 'common.white',
    textShadow: '1px 5px 5px #240e6347',
    width: '700px',
    margin: 'auto',
    fontWeight: 400,
    fontSize: '22px'
}));

const SecondaryButton = styled(Button)(() => ({
    marginRight: '40px',
    background: '#231447',
    '&:hover': {
        background: '#332171',
        boxShadow: '0 2px 19px rgb(103 65 197 / 36%)'
    }
}));

const GreenSquare = styled(m.div)(() => ({
    display: 'inline-block',
    position: 'absolute',
    zIndex: 15,
    pointerEvents: 'none',
    right: '-10px',
    top: '590px'
}));

const WhiteSquare = styled(m.div)(() => ({
    display: 'inline-block',
    position: 'absolute',
    zIndex: 15,
    pointerEvents: 'none',
    right: '-10px',
    top: '252px'
}));



// ----------------------------------------------------------------------

export default function Hero() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <RootStyle>
            {isDesktop ?
                <>
                    <HeroImgStyle
                        className="elementor-background-video-embed"
                        loop
                        autoPlay
                        muted
                        title="YouTube video player"
                        src="https://website-static.sgp1.cdn.digitaloceanspaces.com/HeroImageVideoTrimmed.mp4"
                        id="ytplayer"
                    />
                    <ContentStyle>
                        <m.div variants={varFade().inRight}>
                            <MainText>
                                An endlessly unfolding metaverse of limitless possibilities
                            </MainText>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <SecondaryText>
                                Take a quantum leap into a new, multi-dimensional world. Mint your Neko and start exploring life in the Nekoverse
                            </SecondaryText>
                        </m.div>

                        <m.div variants={varFade().inRight}>
                            <SecondaryButton
                                href="https://docs.nekotopia.co/"
                                target="_blank"
                                component={'a'}
                                handleClick={() => { }}
                            >
                                Litepaper
                            </SecondaryButton>
                            <Button
                                to="/contact"
                                component={RouterLink}
                                handleClick={() => { }}
                            >
                                Contact Us
                            </Button>
                        </m.div>
                    </ContentStyle>

                    <WhiteSquare
                        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <img src="images/hero-page/white-square.svg" alt="Nekotopia square" width="100%" height="100%" />
                    </WhiteSquare>

                    <GreenSquare
                        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <img src="images/hero-page/green-square.svg" alt="Nekotopia square" width="100%" height="100%" />
                    </GreenSquare>
                </>
                :
                <img
                    src="images/hero-page/hero-mob.png"
                    alt="hero"
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%'
                    }}
                />
            }
        </RootStyle >
    );
}
