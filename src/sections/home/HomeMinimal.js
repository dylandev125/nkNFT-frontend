import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade, MotionInView } from '../../components/animate';
import Carousel from './Carousel';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#240E63',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'left',
  marginTop: '10px',
  padding: '15px',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
    zIndex: 10,
    maxWidth: 450,
    // margin: 'auto',
    marginTop: '40px',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  // objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  position: 'absolute',
  top: '-200px',
  left: '50 %',
  zIndex: '1',
  transform: 'translateX(-50 %)',
  width: '100 %',
  // minWidth: '1920px',
  height: 'auto'
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: '-30px',
    zIndex: "1",
    width: "100%",
    height: "auto",
    marginBottom: 20,
    textAlign: 'center'
  },
  textAlign: 'center',
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: '5%',
    zIndex: "1",
    width: "100%",
    marginTop: 10,
    height: "auto",
    textAlign: 'center',
    alignItems: 'center'
  },
  textAlign: 'center',
  alignItems: 'center'

}));

const HeroDividerStyle = styled(m.img)(({ theme }) => ({
  position: 'absolute',
  top: '700px',
  left: '0',
  zIndex: '1',
  width: '100 %',
  // minWidth: '1920px',
  height: 'auto'
}));


// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const isDesktop = useResponsive('up', 'lg');

  return (
    <MotionContainer>
      <RootStyle>
        {isDesktop &&
          <><HeroImgStyle
            alt="hero"
            src="second-slide.png"
            variants={varFade().inUp}
          />
            <img
              alt="hero"
              src="second-slide-hero.jpg"
              variants={varFade().inUp}
            />
            <img
              alt="hero"
              src="line-decoration.svg"
              sx={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '2'
              }} />
          </>}


        {/* <Box sx={{
          position: 'absolute',
          top: '-30px',
          zIndex: "1",
          width: "100%",
          height: "auto",
          textAlign: 'center'
        }}
        > */}
        {/* <MotionInView variants={varFade().inDown}
          sx={{
            position: 'absolute',
            top: '-30px',
            zIndex: "1",
            width: "100%",
            height: "auto",
            textAlign: 'center'
          }}>
          <Typography variant="h2" sx={{ mb: 15 }}>
            Enter the Nekotopia
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h3" sx={{ mb: 5 }}>Open-ended social world</Typography>
              <Typography variant="p">This top-down, open-ended social world is built on blockchain and maximizes the interactive and creative potential of the metaverse.</Typography>
            </Grid>
            <Grid item xs={8}>
              abc
            </Grid>
          </Grid>
        </MotionInView> */}
        <TypographyStyle variant="h2">
          Enter the Nekotopia
        </TypographyStyle>

        <GridStyle container spacing={0} direction="row" justifyContent="space-around">
          <Grid item xs={12} lg={4} >
            <ContentStyle>
              <MotionInView variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Open-ended social world
                </Typography>

              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography>
                  This top-down, open-ended social world is built on blockchain and maximizes the interactive and creative potential of the metaverse.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} lg={5} sx={{ position: 'relative' }}>
            <MotionInView variants={varFade().inUp}>
              <Carousel />
            </MotionInView>
          </Grid>
        </GridStyle>
      </RootStyle>
    </MotionContainer >
  );
}
