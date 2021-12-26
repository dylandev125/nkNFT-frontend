import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import Button from '../../components/Button'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    backgroundImage:
        'url(core-team-mob.png)',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%',
    height: '960px',
    [theme.breakpoints.up('md')]: {
        backgroundSize: 'cover',
        width: '100%',
        padding: '100px 30px 30px 30px',
        height: '650px',
        backgroundPosition: 'center',
        backgroundImage:
            'url(core-team.png)',
        position: 'relative',
        borderRadius: '46px',
        // padding: theme.spacing(10, 0),
        minHeight: 300,
        margin: '0 auto 200px'
    }
}));

// ----------------------------------------------------------------------

export default function HomeCoreTeam() {
    return (
        <Box sx={{ padding: '15px' }}>
            <RootStyle />
        </Box>
    );
}
