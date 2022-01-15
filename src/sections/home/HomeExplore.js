import { m } from 'framer-motion';
import { useEffect } from 'react'
// @mui
import { styled, keyframes } from '@mui/material/styles';
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

const square = keyframes`
 2% {
    transform: translate3d(7px, -1px, 3px) rotate(3deg);
}
4% {
    transform: translate3d(1px, -9px, 3px) rotate(5deg);
}
6% {
    transform: translate3d(6px, -9px, 3px) rotate(5deg);
}
8% {
    transform: translate3d(8px, -3px, 1px) rotate(3deg);
}
10% {
    transform: translate3d(2px, -2px, 10px) rotate(5deg);
}
12% {
    transform: translate3d(8px, -10px, 6px) rotate(3deg);
}
14% {
    transform: translate3d(7px, -1px, 1px) rotate(5deg);
}
16% {
    transform: translate3d(5px, -10px, 3px) rotate(3deg);
}
18% {
    transform: translate3d(10px, -5px, 6px) rotate(2deg);
}
20% {
    transform: translate3d(9px, -5px, 10px) rotate(4deg);
}
22% {
    transform: translate3d(2px, -7px, 4px) rotate(2deg);
}
24% {
    transform: translate3d(4px, -4px, 2px) rotate(4deg);
}
26% {
    transform: translate3d(8px, -1px, 1px) rotate(1deg);
}
28% {
    transform: translate3d(2px, -5px, 9px) rotate(5deg);
}
30% {
    transform: translate3d(6px, -4px, 8px) rotate(1deg);
}
32% {
    transform: translate3d(1px, -2px, 4px) rotate(5deg);
}
34% {
    transform: translate3d(9px, -9px, 4px) rotate(5deg);
}
36% {
    transform: translate3d(2px, -8px, 9px) rotate(1deg);
}
38% {
    transform: translate3d(2px, -1px, 8px) rotate(1deg);
}
40% {
    transform: translate3d(7px, -6px, 4px) rotate(3deg);
}
42% {
    transform: translate3d(1px, -5px, 7px) rotate(1deg);
}
44% {
    transform: translate3d(1px, -2px, 3px) rotate(4deg);
}
46% {
    transform: translate3d(7px, -9px, 7px) rotate(4deg);
}
48% {
    transform: translate3d(8px, -1px, 4px) rotate(5deg);
}
50% {
    transform: translate3d(7px, -7px, 5px) rotate(4deg);
}
52% {
    transform: translate3d(5px, -1px, 8px) rotate(4deg);
}
54% {
    transform: translate3d(6px, -6px, 1px) rotate(3deg);
}
56% {
    transform: translate3d(4px, -6px, 7px) rotate(5deg);
}
58% {
    transform: translate3d(6px, -3px, 1px) rotate(2deg);
}
60% {
    transform: translate3d(8px, -10px, 3px) rotate(3deg);
}
62% {
    transform: translate3d(4px, -8px, 1px) rotate(3deg);
}
64% {
    transform: translate3d(4px, -9px, 4px) rotate(4deg);
}
66% {
    transform: translate3d(7px, -9px, 4px) rotate(4deg);
}
68% {
    transform: translate3d(1px, -4px, 5px) rotate(2deg);
}
70% {
    transform: translate3d(9px, -7px, 9px) rotate(4deg);
}
72% {
    transform: translate3d(7px, -2px, 4px) rotate(5deg);
}
74% {
    transform: translate3d(3px, -5px, 5px) rotate(5deg);
}
76% {
    transform: translate3d(8px, -4px, 8px) rotate(5deg);
}
78% {
    transform: translate3d(1px, -2px, 5px) rotate(5deg);
}
80% {
    transform: translate3d(7px, -2px, 7px) rotate(4deg);
}
82% {
    transform: translate3d(5px, -8px, 8px) rotate(5deg);
}
84% {
    transform: translate3d(3px, -8px, 5px) rotate(1deg);
}
86% {
    transform: translate3d(8px, -4px, 6px) rotate(2deg);
}
88% {
    transform: translate3d(4px, -8px, 9px) rotate(3deg);
}
90% {
    transform: translate3d(3px, -10px, 10px) rotate(4deg);
}
92% {
    transform: translate3d(8px, -10px, 9px) rotate(3deg);
}
94% {
    transform: translate3d(1px, -3px, 5px) rotate(2deg);
}
96% {
    transform: translate3d(5px, -5px, 8px) rotate(2deg);
}
98% {
    transform: translate3d(6px, -2px, 10px) rotate(3deg);
}
100% {
    transform: translate3d(10px, -4px, 1px) rotate(3deg);
}
`;

const AnimateStyle = styled('div')(() => ({
    animation: `${square} 50s linear infinite alternate`
}));


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
                    <m.div variants={varFade().inRight} >
                        <Typography variant="h2" component="div">
                            Explore worlds within the Nekotopia
                        </Typography>
                    </m.div>
                </Container>

                <Grid container spacing={3} sx={{
                    position: 'absolute',
                    zIndex: "2",
                    mt: 10
                }} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        {/* <Box sx={{ mt: { xs: 6 }, }}> */}
                        {/* <MotionInView variants={varFade().inDown}> */}
                        {/* <m.div animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }}> */}
                        {/* <FigureStyle> */}
                        <img src="https://website-static.sgp1.cdn.digitaloceanspaces.com/3d-black-cat.gif" alt="" style={{ width: isDesktop ? '100%' : '90%', height: '100%', transform: 'scale(1.6)', marginTop: '20%' }} className='3dcat' loading="lazy" />
                        {/* </FigureStyle> */}
                        {/* </m.div> */}
                        {/* </MotionInView> */}
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ padding: '0 15px 0 15px', textAlign: { xs: 'center', md: 'left' }, mt: { xs: 5 } }}>
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
