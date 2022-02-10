import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import { varFade, MotionInView } from '../../components/animate';
import useResponsive from '../../hooks/useResponsive';
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    zIndex: 4,
    height: '911px',
    // backgroundColor: theme.palette.grey[400],
    [theme.breakpoints.up('md')]: {
        // overflow: 'hidden',
        height: '1090px',
        position: 'relative',
    },
}));


// const AnimateStyle = styled('div')(() => ({
//     animation: `${square} 50s linear infinite alternate`
// }));


const ContentStyle = styled('div')(() => ({
    zIndex: 10,
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //     margin: 'auto',
    //     textAlign: 'center',
    // },
}));

// const HeroOverlayStyle = styled(m.img)({
//     zIndex: 9,
//     width: '100%',
//     height: '100%',
//     // objectFit: 'cover',
//     position: 'absolute',
// });

// const HeroImgStyle = styled('img')(() => ({

// }));


// ----------------------------------------------------------------------

export default function HomeExplore() {
    const isDesktop = useResponsive('up', 'lg');

    // function getPosition(e) {
    //     let x = 0;
    //     let y = 0;
    //     if (!e) {
    //         // const e = window.event;
    //     }
    //     if (e.pageX || e.pageY) {
    //         x = e.pageX;
    //         y = e.pageY;
    //     } else if (e.clientX || e.clientY) {
    //         x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    //         y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    //     }
    //     return { x, y }
    // }

    // const handleMouseMove = (e) => {
    //     const coord = getPosition(e);
    //     const css = document.getElementsByClassName('3dcat')[0]
    //     // const offset = css.offset();
    //     const x = (coord.x - css.offsetLeft) / 1920 * 100;
    //     const y = (coord.y - css.offsetTop) / 800 * 100;
    //     // console.log(x + y)
    //     css.style.top = `${y / 10}%`
    //     css.style.left = `${x / 10}%`
    //     const degree = (x + y) / 10 - 80
    //     css.style.transform = degree > -15 && degree < 15 && `rotate(${degree}deg)`
    // };

    // useEffect(() => {
    //     if (isDesktop) {
    //         window.addEventListener("mousemove", handleMouseMove);
    //         return () => window.removeEventListener("mousemove", handleMouseMove);
    //     }
    // }, [isDesktop]);

    return (
        // <MotionContainer>
        <RootStyle>
            {isDesktop &&
                <Image
                    alt="hero"
                    src="collect-bg.webp"
                    variants={varFade().inUp}
                    sx={{
                        position: 'absolute',
                        top: '0',
                        // left: '50%',
                        zIndex: '1',
                        width: '100%',
                        height: '100%'
                    }}
                />}

            <ContentStyle sx={{ width: '100%' }}>
                <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                    <m.div variants={varFade().in} >
                        <Typography variant="h3" component="div" style={{ fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                            Explore worlds within the Nekotopia
                        </Typography>
                    </m.div>
                </Container>

                <Grid container spacing={3} sx={{
                    position: 'absolute',
                    zIndex: "2",
                    mt: 10,
                    marginLeft: { md: '-122px' }
                }} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} lg={5}>
                        {/* <Box sx={{ mt: { xs: 6 }, }}> */}
                        {/* <MotionInView variants={varFade().inDown}> */}
                        {/* <m.div animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }}> */}
                        {/* <FigureStyle> */}
                        <img src="https://website-static.sgp1.cdn.digitaloceanspaces.com/3d-black-cat.gif" alt="" style={{ width: isDesktop ? '100%' : '90%', height: '100%', transform: 'scale(1.5)', marginTop: '10%' }} className='3dcat' loading="lazy" />
                        {/* </FigureStyle> */}
                        {/* </m.div> */}
                        {/* </MotionInView> */}
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <Box sx={{ padding: '0 15px 0 15px', textAlign: { xs: 'center', md: 'left' }, mt: { xs: 5 } }}>
                            <MotionInView variants={varFade().in}>
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
