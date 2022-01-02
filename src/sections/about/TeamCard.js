import PropTypes from 'prop-types';
// @mui
import { Typography, Box, Avatar, Card } from '@mui/material';
// components
import { MotionInView, varFade } from '../../components/animate';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

TeamCard.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        credibility: PropTypes.string,
    }),
};

export default function TeamCard({ item }) {
    const { name, icon, description, href, credibility } = item;
    const getHeight = () => credibility === '' ? '330px' : '425px'

    return (
        <MotionInView variants={varFade().in}>
            <Card key={name} sx={{
                padding: '15px', width: '290px', height: getHeight(), bgcolor: '#0000002e', boxShadow: '0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%)', textAlign: 'center'
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
                    {name} <SocialsButton sx={{ color: '#8270b6' }} links={{ 'linkedin': href }} />
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', fontWeight: 'normal' }}>
                    {description}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontSize: '13px', color: '#b3abab' }}>
                    {credibility}
                </Typography>
                {/* <Stack alignItems="center" sx={{ mt: 2, mb: 1 }}>
                    <SocialsButton sx={{ color: 'white' }} />
                </Stack> */}
            </Card>
        </MotionInView >
    );
}
