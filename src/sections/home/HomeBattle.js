// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Grid, Card, CardHeader, CardContent, Box } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';
import CarouselBasic from '../../components/CarouselBasic';
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

    const _carouselsExample = [
        {
            id: 11,
            image: '3.png',
            title: 'slide1'
        },
        {
            id: 12,
            image: 'render2.png',
            title: 'slide2'
        },
        {
            id: 13,
            image: 'render2.png',
            title: 'slide3'
        },
        {
            id: 14,
            image: 'space_cat.png',
            title: 'slide4'
        }
    ]
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
                </Grid>


                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <MotionInView variants={varFade().inDown}>
                        {/* <Card sx={{ width: '900px', height: '600px', bgColor: 'transparent' }}>
                            <CardHeader title="" />
                            <CardContent> */}
                        <Box sx={{ width: { xs: '300px', md: '900px' }, height: { xs: '100px', md: '600px' }, bgColor: 'transparent' }}>
                            <CarouselBasic _carouselsExample={_carouselsExample} />
                        </Box>
                        {/* </CardContent>
                        </Card> */}
                    </MotionInView>
                </Grid>
            </Grid>
        </RootStyle>
    );
}
