import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Grid } from '@mui/material';
// components
import { varFade, MotionInView } from '../../components/animate';
import Carousel from './Carousel';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#240E63',
    [theme.breakpoints.up('lg')]: {
        paddingTop: '216px',
        position: 'relative',
        zIndex: 2,
        background: 'url(images/enter-nekotopia/second-slide-hero.webp) center 0 no-repeat',
        backgroundSize: 'cover',
        WebkitMask: 'url(images/enter-nekotopia/second-slide-mask.svg) center 0 no-repeat',
        WebkitMaskSize: 'cover',
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

// const TypographyStyle = styled(Typography)(({ theme }) => ({
//     [theme.breakpoints.up('lg')]: {
//         textAlign: 'center'
//     },
//     textAlign: 'center',
// }));

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

const LineDecoration = styled('img')(() => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    // height: '100%',
    // backgroundSize: 'cover',
    // transform: 'translateX(-50%)',
    zIndex: '5'
}));

const Heading = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        textAlign: 'center',
    },
    textAlign: 'center',
    fontFamily: 'Akira Expanded',
    letterSpacing: '2px',
    marginTop: '30px'
}));

// ----------------------------------------------------------------------

export default function EnterNekotopia() {
    const isDesktop = useResponsive('up', 'lg');
    const _carouselsExample = [
        {
            id: 1,
            image: 'images/enter-nekotopia/screenshot-1.png',
            title: 'slide1'
        },
        {
            id: 2,
            image: 'images/enter-nekotopia/screenshot-1.png',
            title: 'slide2'
        },
        {
            id: 3,
            image: 'images/enter-nekotopia/screenshot-3.png',
            title: 'slide3'
        }
    ]
    return (
        <div>
            <RootStyle>
                {isDesktop &&
                    <LineDecoration
                        alt="Nekotopia hero"
                        src="images/enter-nekotopia/line-decoration.svg"
                        loading="lazy"
                    />
                }

                <BoxStyle >
                    <Heading variant="h3">
                        Enter the Nekotopia
                    </Heading>

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
