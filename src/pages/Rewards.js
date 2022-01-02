// @mui
import { styled } from '@mui/material/styles';
// import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { RewardHero, YourRewards, MileStoneRewards, Share, News } from '../sections/rewards';
// import Button from '../components/Button'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(11),
        backgroundImage: "url(About.jpg)"
    },
}));

// ----------------------------------------------------------------------

export default function Rewards() {
    return (
        <Page title="Rewards">
            <RootStyle>
                <RewardHero />
                <YourRewards />
                <MileStoneRewards />
                <Share />
                <News />
                {/* <Button handleClick={(e) => { }} >Connect</Button> */}
                {/* 
                <Container sx={{ my: 10 }}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} md={6}>
                            <ContactForm />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ContactMap />
                        </Grid>
                    </Grid>
                </Container> */}
            </RootStyle>
        </Page>
    );
}
