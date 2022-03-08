// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import { Hero, Contact } from '../sections/ContactUs';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(11),
        backgroundImage: "url(images/backgrounds/About.jpg)",
    },
}));

// ----------------------------------------------------------------------

export default function Rewards() {
    return (
        <Page title="Contact us">
            <RootStyle>
                <Hero />
                <Contact />
            </RootStyle>
        </Page>
    );
}
