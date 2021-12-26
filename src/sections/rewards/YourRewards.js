// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
// import Image from '../../components/Image';
import { styled } from '@mui/material/styles';
import { MotionInView, varFade } from '../../components/animate';
import Button from '../../components/Button'

// ----------------------------------------------------------------------

const BoxStyle = styled('Box')(({ theme }) => ({
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '50px',
    borderRadius: '31px',
    position: 'relative',
    background: 'linear-gradient(180.54deg, #2D1576 0.25%, rgba(49, 24, 127, 0) 69.79%)',
    '&:before': {
        background: 'linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)',
        position: 'absolute',
        height: '2px',
        left: '50%',
        top: '0',

        // transform: translateX(-50 %);
    }
}));


export default function YourRewards() {
    return (
        <Container sx={{ padding: '60px 10px 60px 10px' }}>
            <Grid container justifyContent="center" alignItems="baseline" sx={{ mt: 2 }} spacing={1} gap={2}>
                <Grid item xs={9} sm={3} spacing={3}>
                    <MotionInView variants={varFade().inUp}>
                        <BoxStyle>
                            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                                15
                            </Typography>
                            <Typography variant="p" sx={{ textAlign: 'center' }}>
                                GEMS
                            </Typography>

                            <Typography variant="p" sx={{ textAlign: 'center', mt: 3 }}>
                                FROM COMMUNITY MILESTONES
                            </Typography>
                        </BoxStyle>
                    </MotionInView>
                </Grid>

                <Grid item xs={9} sm={3} spacing={3}>
                    <MotionInView variants={varFade().inUp}
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '30px',
                            // lineHeight: '140%',
                            textAlign: 'center',
                            fontFeatureSettings: '"salt" on,"liga" off',
                            color: '#fff',
                            // paddingTop: '30px'
                        }}>
                        <Typography variant="h5" >
                            YOUR TOTAL <br />REWARDS ARE:
                        </Typography>
                        <Button handleClick={(e) => { }} sx={{ mt: 1 }}>CONNECT WALLET</Button>
                    </MotionInView>
                </Grid>

                <Grid item xs={9} sm={3} spacing={3}>
                    <MotionInView variants={varFade().inUp}>
                        <BoxStyle>
                            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                                350
                            </Typography>
                            <Typography variant="p" sx={{ textAlign: 'center' }}>
                                ETH
                            </Typography>

                            <Typography variant="p" sx={{ textAlign: 'center', mt: 3 }}>
                                FROM REFERRALS
                            </Typography>
                        </BoxStyle>
                    </MotionInView>
                </Grid>
            </Grid>
        </Container>
    );
}
