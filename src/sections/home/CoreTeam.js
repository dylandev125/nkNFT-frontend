// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, } from '@mui/material';
// components
import { Link as RouterLink } from 'react-router-dom';
import Button from '../../components/Button'
import useResponsive from '../../hooks/useResponsive';
import ComponentCard from './ComponentCard'
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

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
        icon: `images/team/SamhithBW.png`,
        href: 'https://www.linkedin.com/in/vksamhith/',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users. Partnered with MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        id: 2,
        name: 'Tetsuo420',
        description: 'Ecosystem and Strategy',
        icon: `images/team/Rohan.jpg`,
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
        icon: `images/team/OmrumCetin.jpg`,
        href: 'https://www.linkedin.com/in/omrumcetin/',
        credibility: '8+ Years Unreal Engine and Software Development experience, innovative algorithm and game developer, designer. Database enthusiast'
    },
    {
        id: 5,
        name: 'Ssaulgoodmann',
        description: 'Design and Lore',
        icon: `images/team/Bharath.png`,
        href: '',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        id: 6,
        name: 'JP Reddy',
        description: 'Community Head',
        icon: `images/team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/in/jp-reddy-bornmonkie/',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
    {
        id: 7,
        name: 'Ravi Teja',
        description: 'Blockchain Lead',
        icon: `images/team/ravi.jpg`,
        href: 'https://www.linkedin.com/in/ravitejabandreddy/',
        credibility: 'MERN Stack Blockchain Development Lead. 4+ years of experience in web and blockchain development.'
    },
    {
        id: 8,
        name: 'Chen Jiao',
        description: 'Blockchain Developer',
        icon: `images/team/chen_jiao.jpg`,
        href: 'https://www.linkedin.com/in/chen-jiao-49aa76223',
        credibility: 'Specialist in React, Ethereum smart contracts and advanced blockchain technology'
    },
]

const advisors = [
    {
        name: 'Eric Su',
        description: 'Founder @ Ex- Network',
        icon: `images/team/advisors/eric.png`,
        href: 'https://www.linkedin.com/in/ericsu',
        credibility: ''
    },
    {
        name: 'Anuj K',
        description: 'Founder @ Wall.app',
        icon: `images/team/advisors/anuj.png`,
        href: 'https://www.linkedin.com/in/anuj-kumar-kodam-07ba83102',
        credibility: ''
    }
]


const partners = [
    {
        id: 'partners',
        name: 'Ex-Network',
        description: '',
        icon: `images/team/partners/ex.png`,
        href: '',
        credibility: ''
    },
    {
        id: 'partners',
        name: 'Wall.app',
        description: '',
        icon: `images/team/partners/wall.app.svg`,
        href: '',
        credibility: ''
    }
]

export default function CoreTeam() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <div style={{ backgroundImage: 'linear-gradient(to top, #240e63, #241161, #23135e, #23155c, #231759)' }}>
            <BoxStyle>
                <Typography variant="h3" sx={{ textAlign: 'center', mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
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

                <Typography variant="h3" sx={{ textAlign: 'center', pt: 5, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
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

                <Typography variant="h3" sx={{ textAlign: 'center', pt: 5, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                    Partners
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
                        {partners.map((item) => (
                            <ComponentCard key={item.name} item={item} />
                        ))}
                    </Box>
                </Grid>
            </BoxStyle >
        </div >
    );
}
