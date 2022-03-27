import { m } from 'framer-motion';
// @mui
import { styled, keyframes } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import { varFade, MotionInView } from '../../components/animate';
import useResponsive from '../../hooks/useResponsive';
import RoadmapMobile from './RoadmapMobile'
import RoadMapSVG from './RoadMapSVG'
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(() => ({
    position: 'relative',
    minHeight: '911px',
    marginTop: '-125px',
    zIndex: '5',
    backgroundColor: '#231759'
}));

const ContentStyle = styled('div')(() => ({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1578px',
    position: 'relative',
    padding: '0 30px',
    height: '1750px'
}));

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
                width: '300px',
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
                    <Image src={img} alt="Nekotopia Road Map" style={{ width: '150px' }} loading="lazy" />
                </Box>
            </MotionInView>
            <Box sx={{
                top: '0',
                width: 'fit-content',
                position: 'absolute',
                ...pinsx
            }}>
                <Img src="images/road-map/round-pin.svg" alt="Nekotopia Pin" loading="lazy" />
            </Box>
            <MotionInView variants={varFade().in} sx={{ transition: 'opacity .5s', transitionDelay: '.4s' }}>
                <Box sx={{
                    fontWeight: '300',
                    fontSize: '14px',
                    color: '#7c80b9',
                    ...textsx
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                        fontSize: '15px',
                        fontFamily: 'Akira Expanded',
                        letterSpacing: '2px',
                        // lineHeight: '35px',
                        color: '#fff',
                        // marginBottom: '10px',
                        whiteSpace: 'nowrap'
                    }}>{title}</Box>
                    <Box sx={{ marginLeft: '20px', width: '250px' }}>{description}</Box>
                </Box>
            </MotionInView>
        </Box >
    )
}

export default function RoadMap() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <>
            {isDesktop ?
                <RootStyle>
                    <Image
                        alt="Nekotopia road-map"
                        src="images/road-map/road-map.webp"
                        sx={{
                            width: '100%',
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: '-1'
                        }}
                    />
                    <ContentStyle sx={{ width: '100%' }}>
                        <Container sx={{ color: 'common.white', textAlign: 'center' }}>
                            <m.div variants={varFade().inRight} >
                                <Typography variant="h3" component="div" style={{ fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                                    Road Map
                                </Typography>
                            </m.div>
                        </Container>

                        <ImageStyle>
                            <RoadMapSVG />
                        </ImageStyle>

                        <RoadMapItem
                            img="images/road-map/road-map1.png"
                            title="2021 Q3"
                            description={<ul>
                                <li>Idea assessment</li>
                                <li>Team Building</li>
                                <li>Whitepaper building</li>
                                <li>Entity Structuring</li>
                                <li>Website development</li>
                            </ul>}
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
                            img="images/road-map/road-map2.png"
                            title="2021 Q4"
                            description={<ul>
                                <li>Website Launch</li>
                                <li>Litepaper Launch</li>
                                <li>Lore building</li>
                                <li>Game Prototyping</li>
                                <li>Ex-Network Incubation</li>
                            </ul>}
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
                            img="images/road-map/road-map3.png"
                            title="2022 Q1"
                            description={<ul>
                                <li>Smart Contract Development</li>
                                <li>Marketplace Development</li>
                                <li>Teaser Reveal</li>
                                <li>Community Building</li>
                                <li>Realm Pass Mint launch</li>
                                <li>Private Sale</li>
                            </ul>}
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
                            img="images/road-map/road-map4.png"
                            title="2022 Q2"
                            description={<ul>
                                <li>MOBA Demo Launch ( Tutorial + bot match )</li>
                                <li>Mint Launch</li>
                                <li>Nekotopia World Testnet Launch</li>
                                <li>Act 1 Launch (RPG)</li>
                                <li>IDO</li>
                            </ul>}
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
                            img="images/road-map/road-map5.png"
                            title="2022 Q3"
                            description={<ul>
                                <li>Airdrop Campaign</li>
                                <li>Nekotopia World moved to MainNet</li>
                                <li>Testnet launch - MOBA (alpha)</li>
                                <li>Liquidity Pools</li>
                                <li>P2E</li>
                            </ul>}
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
                                top: '-25px'
                            }}
                        />

                        <RoadMapItem
                            img="images/road-map/road-map7.png"
                            title="2022 Q4"
                            description={<ul><li>Marketplace Launch</li><li>MOBA Live</li><li>Centralized Exchange listing</li></ul>}
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
                                left: '-290px',
                                top: '-23px'
                            }}
                        />
                    </ContentStyle>
                </RootStyle > :
                <Box sx={{ pt: 5, pb: 10, position: "relative" }}>
                    <Container sx={{ color: 'common.white', textAlign: 'center', pt: 2, pb: 5, }}>
                        <m.div variants={varFade().inRight} >
                            <Typography variant="h2" component="div" style={{ fontFamily: 'Akira Expanded', }}>
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
