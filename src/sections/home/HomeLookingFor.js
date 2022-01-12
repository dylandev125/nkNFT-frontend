// @mui
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(5, 0)

  position: 'relative',
  zIndex: '2',
  // margin: 'auto',
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    marginTop: '-15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // margin: 'auto',
    position: 'relative',
    zIndex: '2',
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      {/* <Container> */}
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={{ xs: 1, md: 3 }}>
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

        <Grid item xs={11} md={12}>
          <MotionInView
            variants={varFade().inUp}
            sx={{
              mb: { xs: 3, md: 6 },
            }}
          >
            {/* <div className="sketchfab-embed-wrapper"> */}
            {/* <iframe
              width="600"
              height="400"
              title="3D cat"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen=""
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xrSpatialTracking="true"
              executionWhileOutOfViewport="true"
              executionWhileNotRendered="true"
              webShare="true"
              src="https://sketchfab.com/models/57a9e59c3f5d4580a94100f2d20ea208/embed?annotations_visible=0&autospin=-0.1&autostart=1&camera=0&double_click=0&internal=1&max_texture_size=1024&orbit_constraint_pan=1&orbit_constraint_zoom_in=40&orbit_constraint_zoom_out=60&preload=1&scrollwheel=0&sound_enable=0&transparent=0&ui_animations=0&ui_annotations=0&ui_ar=1&ui_ar_help=0&ui_color=white&ui_fadeout=0&ui_fullscreen=0&ui_help=0&ui_infos=0&ui_inspector=0&ui_settings=0&ui_stop=0&ui_theatre=0&ui_theme=light&ui_vr=0&ui_watermark=0"
            /> */}
            {/* </div> */}
            <Image
              disabledEffect
              alt="rocket"
              src="whyyou.gif"
              sx={{ width: { md: '500px' }, height: { md: '400px' } }}
              loading="lazy"
            />
          </MotionInView>
        </Grid>
      </Grid>
      {/* </Container> */}
    </RootStyle >
  );
}
