import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
// components
import { varFade } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  // position: 'relative',
  // minHeight: '911px',
  // overflow: 'hidden',
  minHeight: '500px',
  // backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    minHeight: '125vh',
    overflow: 'hidden',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  // maxWidth: 450,
  // margin: 'auto',
  // marginTop: '80px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: '17%',
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center',
  },
}));

// const HeroOverlayStyle = styled(m.img)({
//   zIndex: 9,
//   width: '100%',
//   height: '100%',
//   // objectFit: 'cover',
//   position: 'absolute',
// });

const HeroImgStyle = styled(m.img)(() => ({
  position: 'absolute',
  top: '0',
  // left: '50%',
  zIndex: '1',
  // transform: 'translateX(-50 %)',
  width: '100%',
  height: 'auto'
}));

// const HeroBox = styled(Box)(({ theme }) => ({
//   minHeight: '911px',
//   overflow: 'hidden',
//   width: '100%'
// }));

// const HeroDividerStyle = styled('div')(({ theme }) => ({
//   // position: 'absolute',
//   // top: '700px',
//   // left: '0',
//   // zIndex: '1',
//   // width: '100 %',
//   // // minWidth: '1920px',
//   // height: 'auto',
//   // background: '#240e63'
//   // paddingTop: '216px',
//   position: 'relative',
//   zIndex: '2',
//   background: '#240e63 linear-gradient(180deg, #160E60 3.19%, rgba(22, 14, 96, 0) 100%)',
//   WebkitMask: 'url("second-slide.svg") center 0 no-repeat',
//   mask: 'url("second-slide.svg") center 0 no-repeat'
// }));


// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'lg');

  return (
    // <MotionContainer>
    <RootStyle>
      {/* <HeroOverlayStyle
          alt="overlay"
        // src="https://minimal-assets-api.vercel.app/assets/overlay.svg"
        // variants={varFade().in}
        /> */}
      {/* <HeroBox> */}
      {isDesktop ?
        <HeroImgStyle
          alt="hero"
          src="main-hero.png"
          variants={varFade().inUp}
        /> :
        <HeroImgStyle
          alt="hero"
          src="hero-mob.png"
          variants={varFade().inUp}
        />
      }
      {/* </HeroBox> */}
      {/* <HeroDividerStyle
          alt="hero"
          src="second-slide.svg"
          variants={varFade().inUp}
        /> */}
      {/* <Container> */}
      {isDesktop &&
        <ContentStyle>
          <m.div variants={varFade().inRight}>
            <Typography sx={{
              color: 'common.white', textShadow: '10px 5px 5px #240e6347',
              fontWeight: 'bold',
              fontSize: '48px',
              // marginBottom: '15px',
              lineHeight: 1
            }}>
              An endlessly unfolding metaverse of limitless possibilities
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography sx={{
              color: 'common.white', textShadow: '1px 5px 5px #240e6347',
              width: '700px',
              margin: 'auto',
              fontWeight: 400,
              fontSize: '22px'
            }}>
              Take a quantum leap into a new, multi-dimensional world. Mint your Neko and start exploring life in the Nekoverse
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Button
              href="https://docs.nekoverse.io/"
              target="_blank"
              component={'a'}
              handleClick={() => {

              }}
              sx={{
                marginRight: '40px',
                background: '#231447',
                '&:hover': {
                  background: '#332171',
                  boxShadow: '0 2px 19px rgb(103 65 197 / 36%)'
                }
              }}
            >
              Litepaper
            </Button>
            <Button
              to="/contact"
              component={RouterLink}
              handleClick={() => { }}
            >
              Contact Us
            </Button>
          </m.div>



          {/* <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    src={`https://minimal-assets-api.vercel.app/assets/images/home/${resource}.svg`}
                  />
                ))}
              </Stack>
            </Stack> */}
        </ContentStyle>}

      {isDesktop &&
        <>
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              zIndex: 15,
              pointerEvents: 'none',
              right: '-10px',
              top: '252px'
            }}>
            <m.div animate={{ y: [0, 30, 0], x: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <img src="white-square.svg" alt="" />
            </m.div>
          </div>

          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              zIndex: 15,
              pointerEvents: 'none',
              right: '-10px',
              top: '590px'
            }}>
            <m.div animate={{ y: [0, 30, 0], x: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <img src="green-square.svg" alt="" />
            </m.div>
          </div>
        </>}
      {/* </Container> */}
    </RootStyle >
  );
}
