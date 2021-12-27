import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, keyframes } from '@mui/material/styles';
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
import RoadmapMobile from './RoadmapMobile'
// import { keyframes } from '@mui/styled-engine'

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    minHeight: '911px',
    marginTop: '-200px',
    // overflow: 'hidden',
    zIndex: '5',
    backgroundColor: '#231759'
    // backgroundColor: theme.palette.grey[400],
    // [theme.breakpoints.up('md')]: {
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   // height: '80vh',
    //   display: 'flex',
    //   // position: 'fixed',
    //   alignItems: 'center',
    // },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1578px',
    position: 'relative',
    padding: '0 30px',
    height: '1750px'
}));

const BoxStyle = styled(Box)({
    width: '210px',
    position: 'absolute',
    left: '50%',
    // top: '10%',
    zIndex: '2',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '2',
    color: '#7c80b9',
    transform: 'translateX(-645px)',
    opacity: '0',
    transition: 'opacity .5s',
    transitionDelay: '.5s'
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '-1'
}));


// const ImageStyle = styled(m.img)`
//   position: absolute;
//     top: '60px';
//     left: '50%';
//     transform: translateX(-50%);
//     animation: 'road-map 1s linear infinite';
//     @keyframes road-map {
//         0% { strokeDashoffset: '0' };
//         100% { strokeDashoffset: '-32px' }
//     }
// `;

const roadMap = keyframes`
//      0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
0% {
    stroke-dashoffset: 3333.92822265625px;
    stroke-dasharray: 3333.92822265625px;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 3333.92822265625px;
  }
`;

const pin = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;



const ImageStyle = styled(m.img)(({ theme }) => ({
    // '@keyframes road-map': {
    //     '0%': { strokeDashoffset: '0' },
    //     '100%': { strokeDashoffset: '-32px' }
    // },
    position: 'absolute',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    // left: '50%'
    // transform: translateX(-50 %);
    strokeDasharray: '2566',
    strokeDataoffset: '2566',
    animation: `${roadMap} 1s linear infinite`,

}));

const Img = styled('img')(({ theme }) => ({
    animation: `${pin} 1s linear infinite`,

}));


// ----------------------------------------------------------------------

const RoadMapItem = ({ img, title, description, sx, imgsx, pinsx, textsx }) => {

    return (
        <Box
            sx={{
                width: '150px',
                position: 'absolute',
                textAlign: 'left',
                zIndex: '2',
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '2',
                color: '#7c80b9',
                ...sx
            }}>
            <MotionInView variants={varFade().inUp} triggerOnce={'true'}>
                <Box sx={{
                    position: 'absolute',
                    ...imgsx,
                }}>
                    <img src={img} alt="" width="150px" />
                </Box>
            </MotionInView>
            <Box sx={{
                top: '0',
                width: 'fit-content',
                position: 'absolute',
                ...pinsx
            }}>
                <Img src="round-pin.svg" alt="" loading="lazy" />
            </Box>
            <MotionInView variants={varFade().inUp} triggerOnce={'true'}>
                <Box sx={{
                    fontWeight: '300',
                    fontSize: '14px',
                    // lineHeight: '2',
                    color: '#7c80b9',
                    ...textsx
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        // lineHeight: '35px',
                        color: '#fff',
                        // marginBottom: '10px',
                        whiteSpace: 'nowrap'
                    }}>{title}</Box>
                    {description}
                </Box>
            </MotionInView>
        </Box >
    )
}

export default function HomeRoadMap() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <>
            {isDesktop ?
                <RootStyle>
                    <HeroImgStyle
                        alt="hero"
                        src="road-map.png"
                        variants={varFade().inUp}
                    />

                    <ContentStyle sx={{ width: '100%' }}>
                        <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                            <m.div variants={varFade().inRight} >
                                <Typography variant="h2" component="div">
                                    Road Map
                                </Typography>
                            </m.div>
                        </Container>
                        <ImageStyle src={"road-map.svg"} alt="" />

                        <RoadMapItem
                            img="roadMap/road-map1.png"
                            title="Aug-Sep 2021"
                            description="Idea assessment Team Building Project Planning Character Development Entity Structuring"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(-632px)',
                                top: '259px'
                            }}
                            imgsx={{
                                top: '-116px',
                                left: '-40px'
                            }}
                            pinsx={{ left: '261px' }}
                        />


                        <RoadMapItem
                            img="roadMap/road-map2.png"
                            title="Sep - Oct 2021"
                            description="Whitepaper Website building Game Asset development"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(-407px)',
                                top: '550px'
                            }}
                            imgsx={{
                                top: '6px',
                                left: '46px'
                            }}
                            pinsx={{ left: '271px' }}
                            textsx={{
                                position: 'absolute',
                                left: '185px',
                                top: '25px'
                            }}
                        />


                        <RoadMapItem
                            img="roadMap/road-map3.png"
                            title="Nov - Dec 2021"
                            description="Website Launch Whitepaper Launch Partnerships & Marketing"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(399px)',
                                top: '514px'
                            }}
                            imgsx={{
                                top: '-133px',
                                left: '-16px'
                            }}
                            pinsx={{ left: '-51px' }}
                            textsx={{
                                position: 'absolute',
                                left: '8px',
                                top: '-23px'
                            }}
                        />


                        <RoadMapItem
                            img="roadMap/road-map4.png"
                            title="Dec-Jan 2022"
                            description="Seed and Private sales NFT Mint & IDO launch EA to Nekotopia Marketplace Launch"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(236px)',
                                top: '866px'
                            }}
                            imgsx={{
                                top: '-14px',
                                left: '-31px'
                            }}
                            pinsx={{ left: '-51px' }}
                            textsx={{
                                position: 'absolute',
                                left: '109px',
                                top: '-23px'
                            }}
                        />

                        <RoadMapItem
                            img="roadMap/road-map5.png"
                            title="Jan-Feb 2022"
                            description="MOBA(P2E) Announcement Metaverse Testnet Staking & Swap Launch Neko Experiment Launch"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(-211px)',
                                top: '1075px'
                            }}
                            imgsx={{
                                top: '-24px',
                                left: '-40px'
                            }}
                            pinsx={{ left: '-51px' }}
                            textsx={{
                                position: 'absolute',
                                left: '100px',
                                top: '-23px'
                            }}
                        />

                        <RoadMapItem
                            img="roadMap/road-map6.png"
                            title="Feb- March 2022"
                            description="MOBA Dev logs Nekotopia Patchwork MOBA Early Access"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(-310px)',
                                top: '1333px'
                            }}
                            imgsx={{
                                top: '-30px',
                                left: '33px'
                            }}
                            pinsx={{ left: '443px' }}
                            textsx={{
                                position: 'absolute',
                                left: '171px',
                                top: '-23px'
                            }}
                        />


                        <RoadMapItem
                            img="roadMap/road-map7.png"
                            title="March-April 2022"
                            description="Alpha Release of MOBA"
                            sx={{
                                width: '210px',
                                position: 'absolute',
                                left: '50%',
                                zIndex: '2',
                                transform: 'translateX(242px)',
                                top: '1621px'
                            }}
                            imgsx={{
                                top: '-55px',
                                left: '-7px'
                            }}
                            pinsx={{ left: '-51px' }}
                            textsx={{
                                position: 'absolute',
                                left: '-323px',
                                top: '-23px'
                            }}
                        />
                    </ContentStyle>
                </RootStyle > :
                <Box sx={{ mt: 5, position: "relative" }}>
                    <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                        <m.div variants={varFade().inRight} >
                            <Typography variant="h2" component="div">
                                Road Map
                            </Typography>
                        </m.div>
                    </Container>
                    <RoadmapMobile sx={{ mt: 5 }} />
                </Box>}
        </>
    );
}
