// @mui
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
// components
import { MotionInView, varFade } from '../../components/animate';
// import CarouselBasic from '../../components/CarouselBasic';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    width: '80%',
    margin: 'auto',
    paddingTop: '40px',
    position: 'relative'
    // padding: theme.spacing(5, 0),
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(8, 0),
    // },
}));

// const LimitStyle = styled('div')(() => ({
//     display: 'flex',
//     alignItems: 'center',
//     width: '700px',
//     minHeight: '911px'
// }));

const VideoBlock = styled('div')(() => ({
    position: 'relative',
    padding: '4px 4px 0px 4px',
    borderRadius: '42px',
    // background: 'radial-gradient(91.64% 201.72% at 100% 50%, #0DAEFA 0%, rgba(45, 53, 227, 0) 100%)',


    '&:before': {
        content: `""`,
        width: '400px',
        height: '400px',
        pointerEvents: 'none',
        position: 'absolute',
        // top: '100%',
        // left: '100%',
        zIndex: 6,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1051F5',
        mixBlendMode: 'color-dodge',
        filter: 'blur(312px)',
        borderRadius: '100%',
        opacity: 0.5
    }

}));

const VideoContainer = styled('div')(() => ({
    borderRadius: '42px',
    overflow: 'hidden',
    // paddingBottom: '56%',
    position: 'relative',
    cursor: 'pointer',
    // backgroundColor: '#000'

}));

const Parallax1 = styled('div')(() => ({
    position: 'absolute',
    zIndex: 2,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '-55px',
    right: '-200px'
}));

const Parallax2 = styled('div')(() => ({
    position: 'absolute',
    zIndex: 2,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '0',
    right: '-200px'
}));

const Parallax3 = styled('div')(() => ({
    position: 'absolute',
    zIndex: 2,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '-21px',
    right: '52px'
}));

// const Parallax4 = styled('div')(() => ({
//     position: 'absolute',
//     zIndex: 2,
//     pointerEvents: 'none',
//     display: 'inline-block',
//     top: '300px',
//     right: '-20px'
// }));
// const PlayButton = styled('div')(() => ({

// }));




// ----------------------------------------------------------------------

export default function HomeBattle() {

    // const _carouselsExample = [
    //     // {
    //     //     id: 11,
    //     //     image: '3.png',
    //     //     title: 'slide1'
    //     // },
    //     {
    //         id: 12,
    //         image: 'render2.png',
    //         title: 'slide2'
    //     },
    //     {
    //         id: 13,
    //         image: 'render-1.png',
    //         title: 'slide3'
    //     },
    //     {
    //         id: 14,
    //         image: 'space_cat.png',
    //         title: 'slide4'
    //     }
    // ]
    return (
        <div style={{ background: 'url(bg.png)' }}>
            <RootStyle>
                {/* <Container> */}
                <Grid container direction="column" alignItems="center" justifyContent="space-between" alignContent="center" spacing={{ xs: 4, md: 3 }}>
                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                        <MotionInView variants={varFade().inDown}>
                            <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                                Go to battle in the Nekoverse arena
                            </Typography>
                        </MotionInView>

                        <MotionInView variants={varFade().inDown} sx={{ mt: 2, mb: 2, width: { xs: '95%', md: '800px' }, margin: 'auto' }}>
                            <Typography variant="p" >
                                The center of the Nekotopia is a mind-bending MOBA- a multiplayer online battle arena. Here is where your evolved Neko NFT will morph from their 2D pixelated form to a 3D version of themselves to do battle. either against your opponents in kitty-versus-kitty action, or in single-player, Neko-versus-the-world mode.
                            </Typography>
                        </MotionInView>
                    </Grid>


                    <Grid item xs={12} md={4} sx={{ mt: 5 }}>
                        <MotionInView >
                            {/* <Card sx={{ width: '900px', height: '600px', bgColor: 'transparent' }}>
                            <CardHeader title="" />
                            <CardContent> */}
                            {/* <video width="640" height="360" id="player1" preload="none">
                            <source type="video/youtube" src="https://www.youtube.com/embed/il_t1WVLNxk" />
                            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
                        </video> */}
                            {/* <img src="video-bg.webp" alt="" loading="lazy" style={{
                            position: 'absolute',
                            top: 0,
                            // left: '50%',
                            // transform: 'translateX(-50%)',
                            zIndex: 1,
                            width: '100%',
                            minWidth: '1000px',
                            height: 'auto'
                        }} /> */}
                            {/* <LimitStyle>
                            <VideoBlock>
                                <VideoContainer> */}
                            {/* <div class="poster">
                                            <img src="poster.jpg" alt=""/>
                                        </div> */}
                            {/* <PlayButton>
                                        <img src="icon/play.svg" alt="" loading="lazy" />
                                    </PlayButton>
                                    <video
                                        src="Nekotopia.mp4"
                                        id="video"
                                        width="700" height="450"
                                    >
                                        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
                                    </video>
                                </VideoContainer>
                            </VideoBlock>
                        </LimitStyle> */}
                            {/* <iframe
                            frameBorder="0"
                            allowFullScreen="true"
                            width="700"
                            height="450"
                            allow="fullscreen"
                            title="YouTube video player"
                            src="https://website-static.sgp1.cdn.digitaloceanspaces.com/Nekotopia1_Trimed.mp4"
                            id="ytplayer"
                            style={{ width: '700px', height: '450px' }}
                        /> */}
                            <VideoBlock>
                                <VideoContainer>
                                    <video width="100%" height="100%" controls
                                        // style={{
                                        //     position: 'absolute',
                                        //     top: '50%',
                                        //     left: 0,
                                        //     transform: 'translateY(-50%)',
                                        //     width: '100% !important',
                                        //     height: '100% !important',
                                        //     zIndex: 1
                                        // }}
                                        src="https://website-static.sgp1.cdn.digitaloceanspaces.com/Nekotopia_Original.mp4">
                                        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
                                    </video>
                                </VideoContainer>

                            </VideoBlock>
                            {/* <video width="700" height="450" controls>
                            <source dataSrc="https://www.youtube.com/embed/il_t1WVLNxk?autoplay=1/?controls=0" type="video/mp4" />
                            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
                        </video> */}
                            {/* <iframe
                            height="450"
                            width="650"
                            style={{
                                borderRadius: '32px',
                                border: 'none'
                            }}
                            frameBorder="0"
                            src="https://www.youtube.com/embed/APYLABC3WNA?autoplay=1&loop=1"
                            title="Neko Teaser"
                        /> */}
                            {/* <Box sx={{ width: { xs: '330px', md: '700px' }, height: { xs: '200px', md: '400px' }, bgColor: 'transparent', margin: 'auto' }}>
                            <CarouselBasic _carouselsExample={_carouselsExample} />
                        </Box> */}
                            {/* </CardContent>
                        </Card> */}
                        </MotionInView>
                    </Grid>
                </Grid>
                <Parallax1>
                    <img src="Rectangle%20916.svg" alt="" loading="lazy" width="100%" height="100%" />
                </Parallax1>
                <Parallax2>
                    <img src="Rectangle%20914.svg" alt="" loading="lazy" width="100%" height="100%" />
                </Parallax2>
                <Parallax3>
                    <img src="Rectangle%20915.svg" alt="" loading="lazy" width="100%" height="100%" />
                </Parallax3>
                {/* <Parallax4>
                                <img src="Rectangle%20917.svg" alt="" loading="lazy" />
                            </Parallax4> */}
            </RootStyle>
        </div>
    );
}
