// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(5, 0),
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    margin: 'auto'
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      {/* <Container> */}
      <Grid container direction="column" alignItems="center" justifyContent="space-between" spacing={{ xs: 1, md: 3 }}>
        <Grid item xs={11} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
          {/* <MotionInView variants={varFade().inDown}>
            <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
              Looking For a
            </Typography>
          </MotionInView> */}

          <MotionInView variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
              Start your journey
            </Typography>
          </MotionInView>

          <MotionInView variants={varFade().inDown}>
            <Typography variant="p" sx={{ mt: 2, mb: 2, width: { xs: '100%', md: '400px' } }}>
              Take your first steps into the Nekoverse by minting your Neko NFT. Your kitty is your access pass to this metaverse and is your playable character in the ecosystem's games.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFade().inDown}>
            <Typography variant="p" sx={{ mt: 2, mb: 5, width: { xs: '100%', md: '400px' } }}>
              You start out with a random base NFT from the Neko classes. What your Neko becomes is up to you (with a little help from quantum mechanics) in this "play to earn" social world.
            </Typography>
          </MotionInView>

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

        <Grid item xs={11} md={7}>
          <MotionInView
            variants={varFade().inUp}
            sx={{
              mb: { xs: 3, md: 0 },
            }}
          >
            <Image
              disabledEffect
              alt="rocket"
              src="cats.png"
              sx={{ width: { md: '500px' }, height: { md: '550px' } }}
            />
          </MotionInView>
        </Grid>
      </Grid>
      {/* </Container> */}
    </RootStyle>
  );
}
