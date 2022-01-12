import React, { lazy } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
    HomeHero,
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
        padding: '0px',
    },
}));

// ----------------------------------------------------------------------


// const HomeHero = lazy(() => import('../sections/home/HomeHero'))
const HomeMinimal = lazy(() => import('../sections/home/HomeMinimal'))
const HomeLookingFor = lazy(() => import('../sections/home/HomeLookingFor'))
const HomeColorPresets = lazy(() => import('../sections/home/HomeColorPresets'))
const HomeExplore = lazy(() => import('../sections/home/HomeExplore'))
const HomeRoadMap = lazy(() => import('../sections/home/HomeRoadMap'))
const HomeCoreTeam = lazy(() => import('../sections/home/HomeCoreTeam'))
const HomeBattle = lazy(() => import('../sections/home/HomeBattle'))

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
