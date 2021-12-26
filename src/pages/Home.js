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

const RootStyle = styled('div')(() => ({
    height: '100%',
    width: '100%',
    overflowX: 'hidden'
}));

const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#240E63',
}));

// ----------------------------------------------------------------------

export default function HomePage() {
    return (
        <Page title="The starting point for your next project">
            <RootStyle>
                <HomeHero />
                <HomeMinimal />
                <HomeLookingFor />
                <HomeBattle />
                <HomeColorPresets />
                <HomeExplore />
                <HomeRoadMap />
                <HomeCoreTeam />
            </RootStyle>
        </Page>
    );
}
