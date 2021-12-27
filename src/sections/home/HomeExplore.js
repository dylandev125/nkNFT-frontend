import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade, MotionInView } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    height: '911px',
    // backgroundColor: theme.palette.grey[400],
    [theme.breakpoints.up('md')]: {
        // overflow: 'hidden',
    },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    zIndex: 10,
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //     margin: 'auto',
    //     textAlign: 'center',
    // },
}));

const HeroOverlayStyle = styled(m.img)({
    zIndex: 9,
    width: '100%',
    height: '100%',
    // objectFit: 'cover',
    position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    // left: '50%',
    zIndex: '1',
    width: '100%',
    height: 'auto'
}));

// ----------------------------------------------------------------------

export default function HomeExplore() {
    const isDesktop = useResponsive('up', 'lg');
    return (
        // <MotionContainer>
        <RootStyle>
            {isDesktop &&
                <HeroImgStyle
                    alt="hero"
                    src="collect-bg.webp"
                    variants={varFade().inUp}
                />}

            <ContentStyle sx={{ width: '100%' }}>
                <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                    <m.div variants={varFade().inRight} >
                        <Typography variant="h2" component="div">
                            Explore worlds within the Nekotopia
                        </Typography>
                    </m.div>
                </Container>

                <Grid container spacing={2} sx={{
                    position: 'absolute',
                    zIndex: "2"
                }} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Box sx={{ mt: { xs: 6 } }}>
                            <MotionInView variants={varFade().inDown}>
                                <m.div animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                                    <img src="cat.webp" alt="" width={isDesktop ? '80%' : '100%'} />
                                </m.div>
                            </MotionInView>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ padding: '0 15px 0 15px', textAlign: 'left', mt: { xs: 5 } }}>
                            <MotionInView variants={varFade().inDown}>
                                <Typography variant="p">
                                    Take your Neko on an existential journey through space and time, exploring multiple aesthetic environments and styles of gameplay. Duke it out in the futuristic physics of the 3D MOBA. Travel back in time to the 32-bit era of video games for a spin on a Mario Kart-inspired racetrack. Test your agility and endurance with an infinite runner-style game.
                                    <br />
                                    <br />
                                    Dive into new worlds with game realms that include Radioactive, Digital, Punk, Quantum, Cosmos, and Abstract. Explore competitive edge and live operations, such as e-sports, events and tournaments, boss battles, mystery box and treasure chests, and professional team tie-ups.
                                </Typography>
                            </MotionInView>
                        </Box>
                    </Grid>
                </Grid>


                {/* <Box sx={{
                        position: 'absolute',
                    }}>
                        <MotionInView variants={varFade().inDown}>
                            Take your Neko on an existential journey through space and time, exploring multiple aesthetic environments and styles of gameplay. Duke it out in the futuristic physics of the 3D MOBA. Travel back in time to the 32-bit era of video games for a spin on a Mario Kart-inspired racetrack. Test your agility and endurance with an infinite runner-style game.
                        </MotionInView>
                    </Box>

                    <Box sx={{
                        position: 'absolute',
                    }}>
                        <MotionInView variants={varFade().inDown}>
                            Dive into new worlds with game realms that include Radioactive, Digital, Punk, Quantum, Cosmos, and Abstract. Explore competitive edge and live operations, such as e-sports, events and tournaments, boss battles, mystery box and treasure chests, and professional team tie-ups.                        
                            </MotionInView>
                    </Box> */}


            </ContentStyle>
        </RootStyle >
    );
}
