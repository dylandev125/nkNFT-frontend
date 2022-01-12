import { m } from 'framer-motion';
// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, keyframes } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import { varFade, MotionInView } from '../../components/animate';
// import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
import RoadmapMobile from './RoadmapMobile'
import RoadMapSVG from './RoadMapSVG'
// import { keyframes } from '@mui/styled-engine'
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(() => ({
    position: 'relative',
    minHeight: '911px',
    marginTop: '-125px',
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

const ContentStyle = styled('div')(() => ({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1578px',
    position: 'relative',
    padding: '0 30px',
    height: '1750px'
}));

// const BoxStyle = styled(Box)({
//     width: '210px',
//     position: 'absolute',
//     left: '50%',
//     // top: '10%',
//     zIndex: '2',
//     fontWeight: '300',
//     fontSize: '16px',
//     lineHeight: '2',
//     color: '#7c80b9',
//     transform: 'translateX(-645px)',
//     opacity: '0',
//     transition: 'opacity .5s',
//     transitionDelay: '.5s'
// });

// const HeroImgStyle = styled(Image)(() => ({

// }));


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
from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -32px;
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



const ImageStyle = styled('div')(() => ({
    animation: `${roadMap} 1s linear infinite`,
    position: 'absolute',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)'
}));

const Img = styled(Image)(() => ({
    animation: `${pin} 1s linear infinite`,

}));


// ----------------------------------------------------------------------

const RoadMapItem = (item) => {
    const { img, title, description, sx, imgsx, pinsx, textsx } = item
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
            <MotionInView variants={varFade().in} sx={{ transitionDelay: '.1s' }}>
                <Box sx={{
                    position: 'absolute',
                    ...imgsx,
                }}>
                    <Image src={img} alt="" style={{ width: '150px' }} loading="lazy" />
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
            <MotionInView variants={varFade().in} sx={{ transition: 'opacity .5s', transitionDelay: '.4s' }}>
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
                    <Image
                        alt="road-map"
                        src="road-map.webp"
                        sx={{
                            width: '100%',
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: '-1'
                        }}
                    // variants={varFade().inUp}
                    />
                    <ContentStyle sx={{ width: '100%' }}>
                        <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                            <m.div variants={varFade().inRight} >
                                <Typography variant="h2" component="div">
                                    Road Map
                                </Typography>
                            </m.div>
                        </Container>
                        {/* <m.div
                            initial={{
                                // opacity: 0,
                                pathLength: 0,
                                strokeDashoffset: 0,
                            }}
                            animate={{
                                // opacity: 1,
                                pathLength: 1,
                                strokeDashoffset: '-32px',
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                repeatDelay: 1,
                                repeat: Infinity,
                            }}
                            variants={pathVariants}
                        > */}
                        <ImageStyle>
                            <RoadMapSVG />
                        </ImageStyle>
                        {/* </m.div> */}

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
                                transform: 'translateX(165px)',
                                top: '1333px'
                            }}
                            imgsx={{
                                top: '-30px',
                                left: '33px'
                            }}
                            pinsx={{ left: '-30px' }}
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
                <Box sx={{ mt: 5, mb: 5, position: "relative" }}>
                    <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                        <m.div variants={varFade().inRight} >
                            <Typography variant="h2" component="div">
                                Road Map
                            </Typography>
                        </m.div>
                    </Container>
                    <RoadmapMobile sx={{ mt: 5 }} />
                </Box>
            }
        </>
    );
}
