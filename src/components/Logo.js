import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
// import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  // disabledLink: PropTypes.bool,
  sx: PropTypes.any,
  // width: PropTypes.string,
  // height: PropTypes.string
};

export default function Logo({ sx }) {
  return <RouterLink to="/" style={{ textDecoration: 'none' }}>
    <img
      src="images/logo/nekotopia-white.png"
      alt="Nekotopia Logo"
      sx={sx}
      width="220px"
      height="50px"
    />
    {/* <Typography variant="h3" style={{
      fontFamily: 'Akira Expanded',
      color: '#fff'
    }}>Nekotopia</Typography> */}
  </RouterLink>;
}
