import React, { lazy } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
    Hero,
    EnterNekotopia,
    StartYourJourney,
    NekoverseArena,
    BattleMap,
    ExploreNekotopia,
    RoadMap,
    CoreTeam
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
