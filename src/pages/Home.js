// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
    HomeHero,
    HomeMinimal,
    HomeDarkMode,
    HomeLookingFor,
    HomeColorPresets,
    HomeExplore,
    HomeRoadMap,
    HomeCoreTeam,
    HomePricingPlans,
    HomeAdvertisement,
    HomeCleanInterfaces,
    HomeHugePackElements,
    HomeBattle,
} from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    overflowX: 'hidden',
    [theme.breakpoints.up('lg')]: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },

}));

const ContentStyle = styled('div')(({ theme }) => ({
    padding: '15px',
    [theme.breakpoints.up('lg')]: {

    },
}));

// ----------------------------------------------------------------------

export default function HomePage() {
    return (
        <Page title="Home">
            <RootStyle>
                <HomeHero />
                <ContentStyle>
                    <HomeMinimal />
                    <HomeLookingFor />
                    <HomeBattle />
                    <HomeColorPresets />
                    <HomeExplore />
                    <HomeRoadMap />
                    <HomeCoreTeam />
                </ContentStyle>
            </RootStyle>
        </Page>
    );
}
