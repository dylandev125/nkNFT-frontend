// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, } from '@mui/material';
// components
import { Link as RouterLink } from 'react-router-dom';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
import ComponentCard from './ComponentCard'
import Iconify from '../../components/Iconify';
// import { FOUNDATION_LIST } from '../overview/PathConfig';

// ----------------------------------------------------------------------

// const ImageStyle = styled('img')(({ theme }) => ({
//     maxWidth: '100%',
//     width: '100%',
//     height: 'auto',
//     verticalAlign: 'middle',
//     border: 0,
// }));

const BoxStyle = styled('div')(() => ({
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
        id: '1',
        name: 'VK Samhith',
        description: 'CEO',
        icon: `team/SamhithBW.png`,
        href: 'https://www.linkedin.com/in/vksamhith/',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users. Partnered with MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        id: 2,
        name: 'Tetsuo420',
        description: 'Ecosystem and Strategy',
        icon: `MechaLight_walk.png`,
        href: '',
        credibility: 'Serial entrepreneur specialising emerging industries such as Crypto & Cannabis.'
    },
    // {
    //     id: 3,
    //     name: 'Buzzkill77',
    //     description: 'Co-Founder',
    //     icon: `SpaceDark_walk.png`,
    //     href: '',
    //     credibility: 'Crypto champion & investor since 2016'
    // },
    {
        id: 4,
        name: 'Omrum Cetin',
        description: 'CTO',
        icon: `team/OmrumCetin.jpg`,
        href: 'https://www.linkedin.com/in/omrumcetin/',
        credibility: 'Software Developer in multicultural environment, multiple languages, developing algorithms which are being used worldwide'
    },
    {
        id: 5,
        name: 'Ssaulgoodmann',
        description: 'Design and Lore',
        icon: `team/Bharath_Chaganty.png`,
        href: '',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        id: 6,
        name: 'JP Reddy',
        description: 'Community Head',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/in/jp-reddy-bornmonkie/',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
    {
        id: 7,
        name: 'Ravi Teja',
        description: 'Blockchain Lead',
        icon: `team/ravi.jpg`,
        href: 'https://www.linkedin.com/in/ravitejabandreddy/',
        credibility: 'MERN Stack Blockchain Development Lead. 4+ years of experience in web and blockchain development.'
    },
    {
        id: 8,
        name: 'Chen Jiao',
        description: 'Blockchain Developer',
        icon: `team/Chen.JPG`,
        href: 'https://www.linkedin.com/in/chen-jiao-49aa76223',
        credibility: 'Specialist in React, Ethereum smart contracts and advanced blockchain technology'
    },
]

const advisors = [
    {
        name: 'Eric Su',
        description: 'Founder @ Ex- Network',
        icon: `eric.png`,
        href: 'https://www.linkedin.com/in/ericsu',
        credibility: ''
    },
    {
        name: 'Anuj Kodam',
        description: 'Founder @ Wall.app',
        icon: `30K5Azeq_400x400.png`,
        href: 'https://www.linkedin.com/in/anuj-kumar-kodam-07ba83102',
        credibility: ''
    }
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
                            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            justifyItems: 'center'
                        }}
                    >
                        {FOUNDATION_LIST.map((item) => (
                            <ComponentCard item={item} key={item.name} />
                        ))}
                        <Box sx={{ margin: 'auto' }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                size="large"
                                // href={`/about-us#team`}
                                component={RouterLink}
                                to="/about-us#team"
                                handleClick={() => { }}
                                endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={24} height={24} />}
                                sx={{ mx: 'auto', mt: 3 }}
                            >
                                View all team members
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* 
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
                </Box> */}

                <Typography variant="h3" sx={{ textAlign: 'center', pt: 5, pb: 5 }}>
                    Advisors
                </Typography>
                <Grid item xs={12} sm={6} alignItems={'center'} justifyItems={'center'} sx={{ margin: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            justifyItems: 'center'
                        }}
                    >
                        {advisors.map((item) => (
                            <ComponentCard key={item.name} item={item} />
                        ))}
                    </Box>
                </Grid>

                {/* <MotionInView variants={varFade().in}>
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
                        </Grid> */}


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
                {/* </Grid>
                </MotionInView> */}
                {/* {isDesktop ? <ImageStyle src="core-team.png" alt="" /> : <ImageStyle src="core-team-mob.png" alt="" />} */}
            </BoxStyle >
        </div >
    );
}
