import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack, Card, CardHeader, } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade, MotionInView } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
import ComponentCard from './ComponentCard'
// import { FOUNDATION_LIST } from '../overview/PathConfig';

// ----------------------------------------------------------------------

const ImageStyle = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    border: 0,
}));

const BoxStyle = styled('div')(({ theme }) => ({
    maxWidth: '85%',
    width: '1518px',
    height: 'auto',
    margin: '0 auto 200px',
    borderRadius: '46px',
    position: 'relative',
    padding: '1px',
    zIndex: '5'
}));

// ----------------------------------------------------------------------

const FOUNDATION_LIST = [
    {
        name: 'VK Samhith',
        description: 'Founder, Chief Executive Officer & Blockchain Lead',
        icon: `Space Neko.png`,
        href: 'https://www.linkedin.com/home'
    },
    {
        name: 'Omrum Cetin',
        description: 'Chief Technical Officer & Game Lead',
        icon: `RadioactiveDark_walk.png`,
        href: 'https://www.linkedin.com/home'
    },
    {
        name: 'Tetsuo420',
        description: 'Co-Founder & Cheif Business Officer',
        icon: `QuantumDark_walk.png`,
        href: 'https://www.linkedin.com/home'
    },
    {
        name: 'Ssaulgoodmann',
        description: 'Cheif - Product & Design',
        icon: `MechaLight_walk.png`,
        href: 'https://www.linkedin.com/home'
    },
    {
        name: 'Buzzkill77',
        description: 'Co-Founder & Strategy',
        icon: `SpaceDark_walk.png`,
        href: 'https://www.linkedin.com/home'
    }
]

export default function HomeCoreTeam() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <BoxStyle>
            <Typography variant="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
                Core Team
            </Typography>
            <Grid item xs={12} sm={12} alignItems={'center'} justifyItems={'center'}>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: isDesktop ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center'
                    }}
                >
                    {FOUNDATION_LIST.map((item) => (
                        <ComponentCard key={item.name} item={item} />
                    ))}
                </Box>
            </Grid>
            <MotionInView variants={varFade().in}>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={12} sm={6} alignItems={'center'} sx={{ justifyItems: 'center' }}>
                        <Typography variant="h3" sx={{ textAlign: 'left', mt: 10, mb: 5, }}>
                            Advisors
                        </Typography>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2} direction="row">
                                    <Grid item xs={3}>
                                        <Avatar alt={'eric'} src={'eric.png'} sx={{ width: 65, height: 65 }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="subtitle1">Eric</Typography>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    mt: 0.5,
                                                    fontSize: '14px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#7c80b9'
                                                }}
                                            >
                                                Founder Ex- Network
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2} direction="row">
                                    <Grid item xs={3}>
                                        <Avatar alt={'eric'} src={'30K5Azeq_400x400.png'} sx={{ width: 65, height: 65 }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="subtitle1">Anuj Kodagam</Typography>
                                            <Typography
                                                variant="p"
                                                sx={{
                                                    mt: 0.5,
                                                    fontSize: '14px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#7c80b9'
                                                }}
                                            >
                                                Founder Wall.app
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sm={6} alignItems={'center'} sx={{ justifyItems: 'center' }}>
                        <Typography variant="h3" sx={{ textAlign: 'left', mt: 10, mb: 5 }}>
                            Extended Team
                        </Typography>

                        <Grid container spacing={2} direction="row">
                            <Grid item xs={6} md={4}>
                                3x 3d Genralists
                            </Grid>
                            <Grid item xs={6} md={4}>
                                2x Full  stack dev
                            </Grid>
                            <Grid item xs={6} md={4}>
                                3x Unreal Game devs
                            </Grid>
                            <Grid item xs={6} md={4}>
                                4X Unity Game devs
                            </Grid>
                            <Grid item xs={6} md={4}>
                                2x Smart Contract devs
                            </Grid>
                            <Grid item xs={6} md={4}>
                                2d Artist
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </MotionInView>
            {/* {isDesktop ? <ImageStyle src="core-team.png" alt="" /> : <ImageStyle src="core-team-mob.png" alt="" />} */}
        </BoxStyle >

    );
}
