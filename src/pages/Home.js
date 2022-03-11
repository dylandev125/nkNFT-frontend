import React, { lazy } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
// import {
//     Hero,
//     EnterNekotopia,
//     StartYourJourney,
//     NekoverseArena,
//     BattleMap,
//     ExploreNekotopia,
//     RoadMap,
//     CoreTeam
// } from '../sections/home';

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

const Hero = lazy(() => import('../sections/home/Hero'));
const EnterNekotopia = lazy(() => import('../sections/home/EnterNekotopia'));
const StartYourJourney = lazy(() => import('../sections/home/StartYourJourney'));
const NekoverseArena = lazy(() => import('../sections/home/NekoverseArena'));
const BattleMap = lazy(() => import('../sections/home/BattleMap'));
const ExploreNekotopia = lazy(() => import('../sections/home/ExploreNekotopia'));
const RoadMap = lazy(() => import('../sections/home/RoadMap'));
const CoreTeam = lazy(() => import('../sections/home/CoreTeam'));


export default function HomePage() {
    return (
        <Page title="Home">
            <RootStyle>
                <Hero />
                <ContentStyle>
                    <EnterNekotopia />
                    <StartYourJourney />
                    <NekoverseArena />
                    {/* <HomeChart /> */}
                    <BattleMap />
                    <ExploreNekotopia />
                    <RoadMap />
                    <CoreTeam />
                </ContentStyle>
            </RootStyle>
        </Page>
    );
}
