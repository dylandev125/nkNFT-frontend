// @mui
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
// components
import { MotionInView, varFade } from '../../components/animate';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    width: '80%',
    margin: 'auto',
    paddingTop: '40px',
    position: 'relative'
}));


const VideoBlock = styled('div')(() => ({
    position: 'relative',
    padding: '4px 4px 0px 4px',
    borderRadius: '42px',
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
    border: '2px solid transparent',
    background: 'linear-gradient(#150A46,#150A46) padding-box, linear-gradient(162.31deg, #0DAEFA -2.45%, #301778 95.19%) border-box',
    position: 'relative',
    cursor: 'pointer',
}));

const Parallax1 = styled('div')(() => ({
    position: 'absolute',
    zIndex: 0,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '-55px',
    right: '0px'
}));

const Parallax2 = styled('div')(() => ({
    position: 'absolute',
    zIndex: -1,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '0',
    left: '0'
}));

const Parallax3 = styled('div')(() => ({
    position: 'absolute',
    zIndex: 0,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '-21px',
    left: '0'
}));

const Parallax4 = styled('div')(() => ({
    position: 'absolute',
    zIndex: -1,
    pointerEvents: 'none',
    display: 'inline-block',
    top: '100px',
    left: '0'
}));


// ----------------------------------------------------------------------

export default function NekoverseArena() {

    return (
        <div style={{
            background: 'url(images/nekoverse-arena/bg.png)', position: 'relative'
        }}>
            <RootStyle>
                <Grid container direction="column" alignItems="center" justifyContent="space-between" alignContent="center" spacing={{ xs: 4, md: 3 }}>
                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                        <MotionInView variants={varFade().inDown}>
                            <Typography variant="h3" sx={{ mt: 2, mb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
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
                            <VideoBlock>
                                <VideoContainer>
                                    <video
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        controls
                                        src="https://website-static.sgp1.cdn.digitaloceanspaces.com/NekotopiaTeaser.mp4">
                                        <track src="captions_en.vtt"
                                            kind="captions"
                                            srcLang="en"
                                            label="english_captions"
                                        />
                                    </video>
                                </VideoContainer>

                            </VideoBlock>
                        </MotionInView>
                    </Grid>
                </Grid>
            </RootStyle>
            <Parallax1>
                <img src="images/nekoverse-arena/Rectangle%20916.svg" alt="" loading="lazy" width="100%" height="100%" />
            </Parallax1>
            <Parallax2>
                <img src="images/nekoverse-arena/Rectangle%20914.svg" alt="" loading="lazy" width="100%" height="100%" />
            </Parallax2>
            <Parallax3>
                <img src="images/nekoverse-arena/Rectangle%20915.svg" alt="" loading="lazy" width="100%" height="100%" />
            </Parallax3>
            <Parallax4>
                <img src="images/nekoverse-arena/Rectangle%20917.svg" alt="" loading="lazy" width="100%" height="100%" />
            </Parallax4>
        </div>
    );
}
