// @mui
import { styled } from '@mui/material/styles';
import Page from '../components/Page';
import { PassesHero, Mint } from '../sections/passes';
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
                <PassesHero />
                <Mint />
            </RootStyle>
        </Page>
    );
}
