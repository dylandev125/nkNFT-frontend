// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { Hero, Contact } from '../sections/ContactUs';
import Button from '../components/Button'
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
        <Page title="Mint">
            <RootStyle>
                <Hero />
                <Contact />
            </RootStyle>
        </Page>
    );
}
