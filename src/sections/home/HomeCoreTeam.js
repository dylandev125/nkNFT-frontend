import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, Stack, Card, CardHeader, } from '@mui/material';
// components
import { PATH_DASHBOARD } from '../../routes/paths';
import { MotionContainer, TextAnimate, varFade, MotionInView } from '../../components/animate';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
import TeamCard from '../about/TeamCard'
import Iconify from '../../components/Iconify';
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
        icon: `team/SamhithBW.png`,
        href: 'https://www.linkedin.com/in/vksamhith/',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users.  Ex - MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        name: 'Omrum Cetin',
        description: 'Chief Technical Officer & Game Lead',
        icon: `RadioactiveDark_walk.png`,
        href: 'https://www.linkedin.com/in/omrumcetin/',
        credibility: 'Software Developer in multicultural environment, multiple languages, developing algorithms which are being used worldwide'
    },
    {
        name: 'Tetsuo420',
        description: 'Co-Founder & Cheif Business Officer',
        icon: `QuantumDark_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Serial entrepreneur specialising emerging industries such as Crypto & Cannabis.'
    },
    {
        name: 'Ssaulgoodmann',
        description: 'Cheif - Product & Design',
        icon: `MechaLight_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        name: 'Buzzkill77',
        description: 'Co-Founder & Strategy',
        icon: `SpaceDark_walk.png`,
        href: 'https://www.linkedin.com/home',
        credibility: 'Crypto champion & investor since 2016'
    },
    {
        name: 'JP',
        description: 'Co-Founder & Strategy',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/in/jp-reddy-bornmonkie/',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
]

export default function HomeCoreTeam() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <div style={{ backgroundImage: 'linear-gradient(to top, #240e63, #241161, #23135e, #23155c, #231759)' }}>
            <BoxStyle>
                <Typography variant="h3" sx={{ textAlign: 'center', mt: 3, pb: 5 }}>
                    Core Team
                </Typography>
                <Grid item xs={12} sm={12} alignItems={'center'} justifyItems={'center'}>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center'
                        }}
                    >
                        {FOUNDATION_LIST.map((item) => (
                            <TeamCard key={item.name} item={item} />
                        ))}
                    </Box>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        href={`/about-us#team`}
                        // component={RouterLink}
                        // to="/about-us#team"
                        handleClick={() => { }}
                        endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={24} height={24} />}
                        sx={{ mx: 'auto', mt: 3 }}
                    >
                        View all team members
                    </Button>
                </Box>

                <MotionInView variants={varFade().in}>
                    <Grid container spacing={2} direction="row" alignItems={'center'} sx={{ justifyContent: 'space-around' }}>
                        <Grid item xs={12} sm={7}>
                            <Typography variant="h3" sx={{ textAlign: 'center', mt: 10, mb: 5, }}>
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


                        {/* <Grid item xs={12} sm={6} alignItems={'center'} sx={{ justifyItems: 'center' }}>
                            <Typography variant="h3" sx={{ textAlign: 'left', mt: 10, mb: 5 }}>
                                Extended Team
                            </Typography> */}

                        {/* <Grid container spacing={2} direction="row"> */}

                        {/* <Grid item xs={6} md={4}>
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
                                </Grid> */}
                        {/* </Grid> */}

                        {/* </Grid> */}
                    </Grid>
                </MotionInView>
                {/* {isDesktop ? <ImageStyle src="core-team.png" alt="" /> : <ImageStyle src="core-team-mob.png" alt="" />} */}
            </BoxStyle >
        </div >
    );
}
