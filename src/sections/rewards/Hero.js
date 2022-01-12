// import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import { MotionContainer } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    backgroundSize: 'cover',
    width: '100%',
    backgroundPosition: 'center',
    backgroundImage:
        'url(reward-hero.jfif)',
    // padding: theme.spacing(10, 0),
    minHeight: 300,
    opacity: '.82',
    padding: 0,
    opactity: '.82',
    transition: 'filter, .5s',
    filter: 'blur(0)',
    '&:after': {
        content: `""`,
        height: '5px',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)',
        position: 'absolute',
        top: '100%',
        left: '50%',
        zIndex: '2',
        transform: 'translate(-50%,-100%)'
    }
    // [theme.breakpoints.up('md')]: {
    //   height: 560,
    //   padding: 0,
    // },
}));

// const ImageStyle = styled('Box')(({ theme }) => ({
//   background: 'linear-gradient(90deg, #240E63 0%, rgba(36, 14, 99, 0) 100%)'
// }))

const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        textAlign: 'center',
        position: 'absolute',
        // bottom: theme.spacing(10),
    },
    '&:after': {
        background: `linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)`,
        height: '5px',
    },
}));

// const DividerStyle = styled('div')(({ theme }) => ({
//   background: `linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)`,
//   height: '5px',
// }));
// ----------------------------------------------------------------------

export default function AboutHero() {
    return (
        <>
            <RootStyle>
                <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
                    <ContentStyle>
                        {/* <TextAnimate text="Who" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text="we" sx={{ mr: 2 }} />
            <TextAnimate text="are?" />
          </Box> */}

                        {/* <m.div variants={varFade().inRight}>
              <Typography
                variant="h1"
                sx={{
                  mt: 5,
                  color: '#fff',
                  fontWeight: 'fontWeightBold',
                }}
              >
                ABOUT
              </Typography>
            </m.div> */}
                    </ContentStyle>
                </Container>
            </RootStyle>
            {/* <div style={{ backgroundColor: '#13055c' }}><DividerStyle /></div> */}

        </>
    );
}
