import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Paper, Typography, CardActionArea, Box } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade, varHover, varTranHover } from '../../components/animate';
// import useResponsive from '../../hooks/useResponsive';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

ComponentCard.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        credibility: PropTypes.string,
        id: PropTypes.number,
    }),
};

export default function ComponentCard({ item }) {
    // const isDesktop = useResponsive('up', 'lg');

    const { name, icon, description, href, credibility } = item;
    return (
        <MotionInView variants={varFade().in} sx={{ width: '280px', }}
        // style={{
        //     gridColumnEnd: isDesktop && id && id === 5 ? -3 : 0
        // }}
        >
            {/* <a href={href} target="_blank" underline="none" rel="noreferrer" style={{ textDecoration: 'none' }}> */}
            <Paper variant="outlined" sx={{ p: 1, bgcolor: 'transparent', border: '0px solid rgba(145, 158, 171, 0.24)' }}>
                <CardActionArea
                    component={m.div}
                    whileHover="hover"
                    sx={{
                        p: 3,
                        borderRadius: 1,
                        color: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center'
                        // backgroundImage: 'url(core-bg.png)'
                    }}
                >
                    <m.div variants={varHover(1.2)} transition={varTranHover()}>
                        <Image src={icon} alt={name} effect="black-and-white" sx={{ borderRadius: '100%', width: '130px', height: '130px' }} />
                    </m.div>
                </CardActionArea>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ mt: 1, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {name}{href !== '' && <SocialsButton sx={{ color: '#8270b6' }} links={{ 'linkedin': href }} />}
                    </Typography>
                    <Typography variant="p" sx={{ mt: 1, p: 1, fontSize: '14px', color: '#fff' }}>
                        {description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, fontSize: '13px', color: '#b3abab' }}>
                        {credibility}
                    </Typography>
                </Box>
            </Paper>
            {/* </a> */}
        </MotionInView >
    );
}
