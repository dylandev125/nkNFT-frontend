// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    width: '80%',
    margin: 'auto'
    // padding: theme.spacing(5, 0),
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(8, 0),
    // },
}));

// ----------------------------------------------------------------------

export default function HomeBattle() {
    return (
        <RootStyle>
            {/* <Container> */}
            <Grid container direction="column" alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
                <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                    <MotionInView variants={varFade().inDown}>
                        <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                            Go to battle in the Nekoverse arena
                        </Typography>
                    </MotionInView>

                    <MotionInView variants={varFade().inDown}>
                        <Typography variant="p" sx={{ mt: 2, mb: 2, width: '400px' }}>
                            The center of the Nekotopia is a mind-bending MOBA- a multiplayer online battle arena. Here is where your evolved Neko NFT will morph from their 2D pixelated form to a 3D version of themselves to do battle. either against your opponents in kitty-versus-kitty action, or in single-player, Neko-versus-the-world mode.
                        </Typography>
                    </MotionInView>

                    {/* <MotionInView variants={varFade().inDown}>
                        <Typography variant="p" sx={{ mt: 2, mb: 5, width: '400px' }}>
                            You start out with a random base NFT from the Neko classes. What your Neko becomes is up to you (with a little help from quantum mechanics) in this "play to earn" social world.
                        </Typography>
                    </MotionInView> */}

                    {/* <MotionInView variants={varFade().inDown}>
            <Button
              color="inherit"
              size="large"
              variant="outlined"
              target="_blank"
              rel="noopener"
              href="https://material-ui.com/store/items/zone-landing-page/"
              endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
            >
              Visit Zone Landing
            </Button>
          </MotionInView> */}
                </Grid>

                <Grid item xs={12} md={12} sx={{ mt: 5 }}>
                    <Grid container direction="row" alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <MotionInView
                                variants={varFade().inUp}
                                sx={{
                                    mb: { xs: 3, md: 0 },
                                }}
                            >
                                <Image
                                    alt="rocket"
                                    src="arena1.jpg"
                                    sx={{ borderRadius: '40px' }}
                                />
                            </MotionInView>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionInView
                                variants={varFade().inUp}
                                sx={{
                                    mb: { xs: 3, md: 0 },
                                }}
                            >
                                <Image
                                    alt="rocket"
                                    src="arena2.jpg"
                                    sx={{ borderRadius: '40px' }}
                                />
                            </MotionInView>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={6} md={6}>
                    <MotionInView
                        variants={varFade().inUp}
                        sx={{
                            mb: { xs: 3, md: 0 },
                        }}
                    >
                        <Image
                            disabledEffect
                            alt="rocket"
                            src="arena2.jpg"
                        // sx={{ width: '500px', height: '550px' }}
                        />
                    </MotionInView>
                </Grid> */}
            </Grid>
            {/* </Container> */}
        </RootStyle>
    );
}
