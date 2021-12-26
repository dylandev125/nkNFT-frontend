import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string
};

export default function Logo({ disabledLink = false, sx, width, height }) {
  return <RouterLink to="/"><img src="logo/NekoLogo.png" alt="Nekotopia Logo" sx={sx} width={"165"} height={"56"} /></RouterLink>;
}
