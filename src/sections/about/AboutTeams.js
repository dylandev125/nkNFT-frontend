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

const MANAGEMENT_LIST = [
    {
        name: 'VK Samhith',
        description: 'CEO',
        icon: `team/SamhithBW.png`,
        href: 'https://www.linkedin.com/in/vksamhith/',
        credibility: 'Game Developer, 25+ RMG Games, 3Million users. Partnered with MPL, Jio, Paytm Games. Running an Indie Game Studio in India'
    },
    {
        id: 4,
        name: 'Omrum Cetin',
        description: 'CTO',
        icon: `team/OmrumCetin.jpg`,
        href: 'https://www.linkedin.com/in/omrumcetin/',
        credibility: '8+ Years Unreal Engine and Software Development experience, innovative algorithm and game developer, designer. Database enthusiast'
    },
    {
        name: 'JP Reddy',
        description: 'Community Head',
        icon: `team/JPReddy.jpeg`,
        href: 'https://www.linkedin.com/in/jp-reddy-bornmonkie/',
        credibility: 'Growth Hacker & Gamer, Public & Publisher Relations, Digital marketing for the company.'
    },
    {
        id: 5,
        name: 'Ssaulgoodmann',
        description: 'Design and Lore',
        icon: `team/Bharath.png`,
        href: '',
        credibility: 'Delivering narrative & identity building as a service for emerging internet technologies'
    },
    {
        id: 2,
        name: 'Tetsuo420',
        description: 'Ecosystem and Strategy',
        icon: `team/Rohan.jpg`,
        href: '',
        credibility: 'Serial entrepreneur specialising emerging industries such as Crypto & Cannabis.'
    },
]

const PRODUCT_LIST = [
    {
        name: 'Sowmya Yarlagadda',
        description: 'Game Producer',
        icon: `team/Sowmya_Yarlagadda.jpg`,
        href: 'http://linkedin.com/in/sowmya-yarlagadda-50641a25',
        credibility: 'Game Producer and QA across game generes. Ex - EA - NFS, FIFA, MOH-Airborne, and Interactive RPG, Hyper Casual games'
    },
    {
        name: 'Revanth Sama',
        description: 'Game Producer',
        icon: `team/Revanth_Sama.JPG`,
        href: 'https://www.linkedin.com/in/revanth-reddy-2229351b7/',
        credibility: 'Worked on multidisciplinary  projects such as board games, UX design, space design, AR/VR design and made 4-5 mini games on my own  the tools which I use the most are figma,sketch,sketch up ,unity ,vuforia'
    },
    {
        name: 'Sai Rakesh A',
        description: 'Game Producer',
        icon: `team/rakesh.png`,
        href: 'https://www.linkedin.com/in/sairakeshakaremsetti/',
        credibility: 'Ex- Barclays, Ex- Microsoft, Designer and ASO for Chef Story and iron kill, Producer for Train Simulator, Mega Ramp, office runner. core team member for an upcoming travel and real estate based NFT project'
    },
]

const DESIGN_LIST = [
    {
        name: 'Suresh Pitla',
        description: 'Lead 3D Generalist',
        icon: `team/Suresh_Pitla.jpg`,
        href: 'https://www.linkedin.com/in/suresh-pitla-5aa7a4137/',
        credibility: '3D Generalist - Ex- DRDO Projects, Byjus, Famous Indian TV Series, Animated Russian Movies and E-Learning apps'
    },
    {
        name: 'Robert Berrier',
        description: 'Art Director',
        icon: `team/Robert-Berrier-006.png`,
        href: 'https://www.linkedin.com/in/robertberrier',
        credibility: 'Delivering quality 3D game art with a clear production process for games, VR and simulation.'
    },
    {
        name: 'Valerii Sendetskyi',
        description: 'Creative Director',
        icon: `team/Valerii_Sendetskyi.jpg`,
        href: 'https://www.linkedin.com/in/valurik',
        credibility: '3d Generalist with focus on modeling and texturing - Game Art'
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
        name: 'Akhil Pulla',
        description: '3D Animator',
        icon: `team/akhil.jpg`,
        href: 'https://www.linkedin.com/in/akhil-akhi-29a3bb104',
        credibility: ''
    },
    {
        name: 'Canvassio',
        description: '2D Pixel Artist',
        icon: `team/DigitalDark_walk 1.png`,
        href: '',
        credibility: ''
    },
    {
        name: 'Ashish Cornelius',
        description: 'Concept Artist',
        icon: `team/ashish.png`,
        href: 'https://www.linkedin.com/in/ashish-cornelius-225905230',
        credibility: ''
    },
    {
        name: 'Chaman Kumar',
        description: 'Unreal Engine VFX Artist',
        icon: `team/chaman.png`,
        href: '',
        credibility: ''
    },
    {
        name: 'Samuel Jacob',
        description: 'Concept Artist',
        icon: `team/samuel.png`,
        href: 'https://www.linkedin.com/in/samuel-jacob-135075113/',
        credibility: ''
    },
    {
        name: 'Aparajita',
        description: '3D Artist',
        icon: `team/aprajita.png`,
        href: 'https://www.linkedin.com/in/aparajita-singh12',
        credibility: ''
    },
]

const ENGINEERING_LIST = [
    {
        name: 'Ravi Teja',
        description: 'Blockchain Lead',
        icon: `team/ravi.jpg`,
        href: 'https://www.linkedin.com/in/ravitejabandreddy/',
        credibility: 'MERN Stack Blockchain Developer. 4+ years of experience in web and blockchain development'
    },
    {
        name: 'Chen Jiao',
        description: 'Blockchain Developer',
        icon: `team/Chen.png`,
        href: 'https://www.linkedin.com/in/chen-jiao-49aa76223',
        credibility: 'Specialist in React, Ethereum smart contracts and advanced blockchain technology'
    },
    {
        name: 'Aryama I',
        description: 'Blockchain Architect',
        icon: `team/aryama.jfif`,
        href: 'https://www.linkedin.com/in/aryama-i-40364117a/',
        credibility: 'Blockchain Developer with expertise in DeFi, SSI and private blockchains'
    },
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
    {
        name: 'Jatin Pandey',
        description: 'Junior Gameplay Programmer',
        icon: `team/Jatin_Pandey.jpg`,
        href: 'http://linkedin.com/in/jatinpandey87',
        credibility: ''
    },
    {
        name: 'Sriharan S',
        description: 'Junior Gameplay Programmer',
        icon: `team/srihan.png`,
        href: '',
        credibility: ''
    },
    {
        name: 'Godzoid',
        description: 'Full Stack Developer',
        icon: `Space Neko.png`,
        href: '',
        credibility: ''
    },
]

const Cards = ({ list }) => {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <>
            {list.length > 0 &&
                <Grid item xs={12} sm={12} alignItems={'center'} justifyItems={'center'}>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                            alignItems: 'stretch',
                            justifyContent: 'center',
                            justifyItems: 'center'
                        }}
                    >
                        {list.map((item) => (
                            <TeamCard key={item.name} item={item} />
                        ))}
                    </Box>
                </Grid>}
        </>
    )
}


export default function AboutTeams() {
    return (
        <>
            <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                Team
            </Typography>

            <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                Management
            </Typography>
            <Cards list={MANAGEMENT_LIST} />

            <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                Product
            </Typography>
            <Cards list={PRODUCT_LIST} />

            <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                Design
            </Typography>
            <Cards list={DESIGN_LIST} />

            <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3, pb: 5, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
                ENGINEERING
            </Typography>
            <Cards list={ENGINEERING_LIST} />

        </>
    );
}
