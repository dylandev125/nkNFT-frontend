// @mui
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
// components
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.up('lg')]: {
        width: '50%',
        marginTop: '-18%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        zIndex: '2',
    },
}));

// ----------------------------------------------------------------------

export default function StartYourJourney() {
    return (
        <RootStyle>
            <Grid container direction="column" alignItems="center" justifyContent="center" spacing={{ xs: 1, md: 0 }}>
                <Grid item xs={11} md={6} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                    <MotionInView variants={varFade().inDown}>
                        <Typography variant="h3" sx={{ mt: 2, mb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                            Start your journey
                        </Typography>
                    </MotionInView>

                    <MotionInView variants={varFade().inDown} sx={{ mt: 2, mb: 2, width: { xs: '100%', md: '500px' } }}>
                        <Typography variant="p">
                            Take your first steps into the Nekoverse by minting your Neko NFT. Your kitty is your access pass to this metaverse and is your playable character in the ecosystem's games.
                        </Typography>
                    </MotionInView>

                    <MotionInView variants={varFade().inDown} sx={{ pt: 4, mb: 5, width: { xs: '100%', md: '500px' } }}>
                        <Typography variant="p">
                            You start out with a random base NFT from the Neko classes. What your Neko becomes is up to you (with a little help from quantum mechanics) in this "play to earn" social world.
                        </Typography>
                    </MotionInView>
                </Grid>

                <Grid item xs={11} md={12}>
                    <MotionInView
                        variants={varFade().inUp}
                        sx={{
                            pb: { xs: 3, md: 6 },
                        }}
                    >
                        <img
                            alt="rocket"
                            src="https://website-static.sgp1.cdn.digitaloceanspaces.com/whyyou.gif"
                            style={{ width: { md: '700px' }, height: { md: '400px' }, transform: 'scale(1.6)' }}
                            loading="lazy"
                        />
                    </MotionInView>
                </Grid>
            </Grid>
        </RootStyle >
    );
}
