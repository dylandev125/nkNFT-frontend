import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Button as MUIButton } from '@mui/material';

// ----------------------------------------------------------------------


const MUIButtonStyle = styled(MUIButton)({
    display: 'inline-flex',
    borderRadius: '15px',
    alignItems: 'center',
    height: '50px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    color: '#fff',
    padding: '0 20px',
    '&:hover,&:focus': {
        boxShadow: '0 2px 19px rgb(255 148 3 / 74%)'
    }
});

const Button = forwardRef(({ children, sx, handleClick, ...other }, ref) =>
    <MUIButtonStyle
        ref={ref}
        onClick={handleClick}
        sx={{
            ...sx,
        }}
        {...other}
    >
        {children}
    </MUIButtonStyle>
);

Button.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
    handleClick: PropTypes.func
};

export default Button;
