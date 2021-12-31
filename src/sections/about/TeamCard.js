import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Paper, Typography, CardActionArea, Box, Avatar, Stack, Grid, Card } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade, varHover, varTranHover } from '../../components/animate';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

TeamCard.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string,
        name: PropTypes.string,
    }),
};

export default function TeamCard({ item }) {
    const { name, icon, description, href, credibility } = item;
    const getHeight = () => {
        return credibility === '' ? '330px' : '425px'
    }

    return (
        <MotionInView variants={varFade().in}>
            <Card key={name} sx={{
                padding: '15px', width: '290px', height: getHeight(), bgcolor: '#240E63', backdropFilter: 'blur(10px)', boxShadow: '0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%)', textAlign: 'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'center'
                }}>

                    <Avatar src={icon || 'eric.png'} sx={{
                        width: '180px', height: '180px',
                    }} />
                </Box>

                <Typography variant="h5" sx={{ mt: 2, mb: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {name} <SocialsButton sx={{ color: 'white' }} />
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontSize: '13px', color: 'text.secondary' }}>
                    {credibility}
                </Typography>
                {/* <Stack alignItems="center" sx={{ mt: 2, mb: 1 }}>
                    <SocialsButton sx={{ color: 'white' }} />
                </Stack> */}
            </Card>
        </MotionInView >
    );
}
