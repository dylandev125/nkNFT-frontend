import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Grid } from '@mui/material';
// components
import { varFade, MotionInView } from '../../components/animate';
import Image from '../../components/Image';
import Carousel from './Carousel';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  // paddingTop: '216px',
  position: 'relative',
  backgroundColor: '#240E63',
  [theme.breakpoints.up('lg')]: {
    paddingTop: '216px',
    position: 'relative',
    zIndex: 2,
    background: '#240e63 linear-gradient(180deg, #160E60 3.19%, rgba(22, 14, 96, 0) 100%)',
    WebkitMask: 'url(second-slide-mask.svg) center 0 no-repeat',
    overflow: 'hidden',
    marginTop: '-25%',
    minWidth: '100%'
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'left',
  marginTop: '10px',
  padding: '15px',
  [theme.breakpoints.up('lg')]: {
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

// const HeroOverlayStyle = styled(m.img)({
//   zIndex: 9,
//   width: '100%',
//   height: '100%',
//   // objectFit: 'cover',
//   position: 'absolute',
// });

// const HeroImgStyle = styled(m.img)(({ theme }) => ({
//   // position: 'absolute',
//   // top: '-200px',
//   // left: '50%',
//   // zIndex: '1',
//   // transform: 'translateX(-50%)',
//   // width: '100%',
//   // // minWidth: '1920px',
//   // height: '100%'
//   paddingTop: '216px',
//   position: 'relative',
//   zIndex: 2,
//   background: '#240e63 linear-gradient(180deg, #160E60 3.19%, rgba(22, 14, 96, 0) 100%)',
//   WebkitMask: 'url(second-slide-mask.svg) center 0 no-repeat',
//   overflow: 'hidden'
// }));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    // position: 'absolute',
    // top: '-30px',
    // zIndex: "1",
    // width: "100%",
    // height: "auto",
    // marginBottom: 20,
    textAlign: 'center'
  },
  textAlign: 'center',
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
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

// const HeroDividerStyle = styled(m.img)(({ theme }) => ({
//   position: 'absolute',
//   top: '700px',
//   left: '0',
//   zIndex: '1',
//   width: '100 %',
//   // minWidth: '1920px',
//   height: 'auto'
// }));


const BoxStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    zIndex: 3,
    minHeight: '965px',
    maxWidth: '100%',
    width: '1324px',
    margin: '0 auto',
    position: 'relative',
    padding: '0 30px'
  },
}));


// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const isDesktop = useResponsive('up', 'lg');
  const _carouselsExample = [
    {
      id: 1,
      image: 'screenshot-1.png',
      title: 'slide1'
    },
    {
      id: 2,
      image: 'screenshot-1.png',
      title: 'slide2'
    },
    {
      id: 3,
      image: 'screenshot-3.png',
      title: 'slide3'
    }
  ]
  return (
    <div>
      <RootStyle>
        {isDesktop &&
          <>
            {/* <HeroImgStyle
          alt="hero"
          src="second-slide-mask.svg"
          variants={varFade().inUp}
        /> */}
            <img
              alt="hero"
              src="line-decoration.svg"
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '2'
              }}
              loading="lazy"
            />
            <Image
              alt="hero"
              src="second-slide-hero.webp"
              // variants={varFade().inUp}
              sx={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
                width: '100%',
                minWidth: '1920px',
                height: '100%'
              }}
            />

          </>}

        <BoxStyle >
          <TypographyStyle variant="h3" style={{ fontFamily: 'Akira Expanded', letterSpacing: '2px', marginTop: '30px' }}>
            Enter the Nekotopia
          </TypographyStyle>

          <GridStyle container spacing={0} direction="row" justifyContent="space-around">
            <Grid item xs={12} lg={4} >
              <ContentStyle>
                <MotionInView variants={varFade().in}>
                  <Typography variant="subtitle1" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' }, color: 'common.white', fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                    Open-ended social world
                  </Typography>

                </MotionInView>

                <MotionInView variants={varFade().in}>
                  <Typography sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                    This top-down, open-ended social world is built on blockchain and maximizes the interactive and creative potential of the metaverse.
                  </Typography>
                </MotionInView>
              </ContentStyle>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ position: 'relative', pt: 4 }}>
              <MotionInView variants={varFade().in}>
                <Carousel carouselsExample={_carouselsExample} />
              </MotionInView>
            </Grid>
          </GridStyle>
        </BoxStyle>
      </RootStyle>
    </div>
  );
}
