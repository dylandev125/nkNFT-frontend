import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Paper, Typography, CardActionArea, Box } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade, varHover, varTranHover } from '../../components/animate';

// ----------------------------------------------------------------------

ComponentCard.propTypes = {
    item: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string,
        name: PropTypes.string,
    }),
};

export default function ComponentCard({ item }) {
    const { name, icon, description, href } = item;

    return (
        <MotionInView variants={varFade().inRight} sx={{ width: '250px', }}>
            {/* <Link component={RouterLink} to={href} underline="none"> */}
            <Paper variant="outlined" sx={{ p: 1, bgcolor: 'transparent', border: '0px solid rgba(145, 158, 171, 0.24)' }}>
                <CardActionArea
                    component={m.div}
                    whileHover="hover"
                    sx={{
                        p: 3,
                        borderRadius: 1,
                        color: 'primary.main',
                        // backgroundImage: 'url(core-bg.png)'
                    }}
                >
                    <m.div variants={varHover(1.2)} transition={varTranHover()}>
                        <Image src={icon} alt={name} effect="black-and-white" />
                    </m.div>
                </CardActionArea>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ mt: 1, p: 1 }}>
                        {name}
                    </Typography>
                    <Typography variant="p" sx={{ mt: 1, p: 1, fontSize: '14px', color: '#7c80b9' }}>
                        {description}
                    </Typography>
                </Box>
            </Paper>
            {/* </Link> */}
        </MotionInView >
    );
}
