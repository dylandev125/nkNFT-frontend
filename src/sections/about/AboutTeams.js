// @mui
// import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
// components
import useResponsive from '../../hooks/useResponsive';
import TeamCard from './TeamCard';

// ----------------------------------------------------------------------

// const BoxStyle = styled('div')(({ theme }) => ({
//     maxWidth: '85%',
//     width: '1518px',
//     height: 'auto',
//     margin: '0 auto 200px',
//     borderRadius: '46px',
//     position: 'relative',
//     padding: '1px',
//     zIndex: '5'
// }));

// ----------------------------------------------------------------------

const FOUNDATION_LIST = [
    {
        name: 'VK Samhith',
        description: 'CEO',
        icon: `team/SamhithBW.png`,
        href: 'https://www.linkedin.com/in/vksamhith/',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users.  Ex - MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        name: 'Tetsuo420',
        description: 'Co-Founder',
        icon: `MechaLight_walk.png`,
        href: '',
        credibility: 'Serial entrepreneur specialising emerging industries such as Crypto & Cannabis.'
    },
    {
        name: 'Buzzkill77',
        description: 'Co-Founder',
        icon: `SpaceDark_walk.png`,
        href: '',
        credibility: 'Crypto champion & investor since 2016'
    },
    {
        name: 'Omrum Cetin',
        description: 'CTO',
        icon: `team/OmrumCetin.jpg`,
        href: 'https://www.linkedin.com/in/omrumcetin/',
        credibility: 'Software Developer in multicultural environment, multiple languages, developing algorithms which are being used worldwide'
    },
    {
        name: 'Ssaulgoodmann',
        description: 'Cheif - Product & Design',
        icon: `team/Bharath_Chaganty.png`,
        href: '',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        name: 'JP Reddy',
        description: 'Community Head',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/in/jp-reddy-bornmonkie/',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
    {
        name: 'Sowmya Yarlagadda',
        description: 'Game Producer',
        icon: `team/Sowmya_Yarlagadda.jpg`,
        href: 'http://linkedin.com/in/sowmya-yarlagadda-50641a25',
        credibility: 'Game Producer and QA across game generes. Ex - EA - NFS, FIFA, MOH-Airborne, and Interactive RPG, Hyper Casual games'
    },
    {
        name: 'Suresh Pitla',
        description: 'Lead 3D Generalist',
        icon: `team/Suresh_Pitla.jpg`,
        href: 'https://www.linkedin.com/in/suresh-pitla-5aa7a4137/',
        credibility: '3D Generalist - Ex- DRDO Projects, Byjus, Famous Indian TV Series, Animated Russian Movies and E-Learning apps'
    },
    {
        name: 'Raviteja Bandreddy',
        description: 'Blockchain Lead',
        icon: `team/ravi.jpg`,
        href: 'https://www.linkedin.com/in/ravitejabandreddy/',
        credibility: 'MERN Stack Blockchain Developer. 4+ years of experience in web and blockchain development'
    },
    {
        name: 'Aryama I',
        description: 'Blockchain Architect',
        icon: `team/aryama.jfif`,
        href: 'https://www.linkedin.com/in/aryama-i-40364117a/',
        credibility: ''
    },
    {
        name: 'Chen',
        description: 'Blockchain Developer',
        icon: `team/Chen.png`,
        href: '',
        credibility: ''
    },
    {
        name: 'Revanth Sama',
        description: 'Game Producer',
        icon: `team/Revanth_Sama.JPG`,
        href: 'https://www.linkedin.com/in/revanth-reddy-2229351b7/',
        credibility: ''
    },
    // {
    //     name: 'Idir Belaid',
    //     description: 'Gameplay Programmer',
    //     icon: `team/Idir_Belaid.jpg`,
    //     href: 'https://www.linkedin.com/home',
    //     credibility: ''
    // },
    {
        name: 'Ashish Polaki',
        description: 'Gameplay Programmer',
        icon: `team/Ashish_Polaki.jpg`,
        href: 'https://www.linkedin.com/in/ashish-polaki-550a761aa',
        credibility: ''
    },
    {
        name: 'Davinder Singh',
        description: 'Gameplay Programmer',
        icon: `team/Davinder_Singh.jpg`,
        href: 'http://linkedin.com/in/davinder-singh-0401a2112',
        credibility: ''
    },
    {
        name: 'Nikhil Ghode',
        description: 'Junior Gameplay Programmer',
        icon: `team/Nikhil_Ghode.jpg`,
        href: 'https://www.linkedin.com/in/nikhil-ghode-837129109/',
        credibility: ''
    },
    {
        name: 'Madhav Gojiya',
        description: 'Junior Gameplay Programmer',
        icon: `team/Madhav_Gojiya.jpg`,
        href: 'https://www.linkedin.com/in/madhav-gojiya-977a8a181',
        credibility: ''
    },
    // {
    //     name: 'Sriharan S',
    //     description: 'Junior Gameplay Programmer',
    //     icon: `Space Neko.png`,
    //     href: 'https://www.linkedin.com/in/sri-haran-s/',
    //     credibility: ''
    // },
    {
        name: 'Jatin Pandey',
        description: 'Junior Gameplay Programmer',
        icon: `team/Jatin_Pandey.jpg`,
        href: 'http://linkedin.com/in/jatinpandey87',
        credibility: ''
    },
    {
        name: 'Robin Kamboj',
        description: '3D Environment Artist',
        icon: `team/Robin_kamboj.jpeg`,
        href: 'https://www.linkedin.com/in/robin-kamboj-6b87751b6/',
        credibility: ''
    },
    {
        name: 'Sangam Sharma',
        description: '3D Character Artist',
        icon: `team/Sangam_Sharma.jpg`,
        href: 'https://www.linkedin.com/in/sangam-sharma-679295194/',
        credibility: ''
    },
    {
        name: 'Lalit Dhawane',
        description: '3D Artist',
        icon: `team/Lalit_Dhawane.jpg`,
        href: 'https://www.linkedin.com/in/yesiamchaos/',
        credibility: ''
    },
    {
        name: 'Sourav Passi',
        description: '3D Artist',
        icon: `team/Sourav_Passi.jpg`,
        href: 'https://www.linkedin.com/in/sourav-passi-04aa85187/',
        credibility: ''
    },
    {
        name: 'Rehyansh Verma',
        description: '3D Artist',
        icon: `team/Rehyansh_Verma.jpg`,
        href: 'https://www.linkedin.com/in/rehyanshverma/',
        credibility: ''
    },
    {
        name: 'Prakriti Sharma',
        description: '3D Animator',
        icon: `team/Prakriti_Sharma.jpg`,
        href: 'https://www.linkedin.com/in/prakriti-sharma-407457141/',
        credibility: ''
    },
    {
        name: 'Akhil Pulla',
        description: '3D Animator',
        icon: `team/akhil.jpg`,
        href: 'https://www.linkedin.com/in/akhil-akhi-29a3bb104',
        credibility: ''
    },
    // {
    //     name: 'Spandana Taruvu',
    //     description: 'Junior 2D Artist',
    //     icon: `team/Spandana_Taruvu.jpeg`,
    //     href: 'https://www.linkedin.com/home',
    //     credibility: ''
    // },
    {
        name: 'Anonymous Pixel Artist',
        description: '2D Pixel Artist',
        icon: `team/DigitalDark_walk 1.png`,
        href: '',
        credibility: ''
    },
    {
        name: 'Anonymous Developer',
        description: 'Full Stack Developer',
        icon: `Space Neko.png`,
        href: '',
        credibility: ''
    },
    // {
    //     name: 'Anonymous Full Stack',
    //     description: 'Full Stack Developer',
    //     icon: `Space Neko.png`,
    //     href: '',
    //     credibility: ''
    // },
    // {
    //     name: 'Sai Rakesh',
    //     description: 'Game Producer',
    //     icon: `Space Neko.png`,
    //     href: 'https://www.linkedin.com/in/sairakeshakaremsetti/',
    //     credibility: ''
    // }
]
export default function AboutTeams() {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <>
            <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5 }}>
                Team
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
        </>
    );
}
