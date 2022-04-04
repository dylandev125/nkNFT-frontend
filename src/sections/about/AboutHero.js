// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import { MotionContainer } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  backgroundSize: 'cover',
  width: '100%',
  backgroundPosition: 'center',
  backgroundImage:
    'url(images/backgrounds/about-hero.jpg)',
  minHeight: 350,
  opacity: '.82',
  padding: 0,
  opactity: '.82',
  transition: 'filter, .5s',
  filter: 'blur(0)',
  '&:after': {
    content: `""`,
    height: '5px',
    width: '1412px',
    background: 'linear-gradient(90deg, rgba(246, 197, 32, 0) 0%, #F6C520 47.85%, rgba(246, 197, 32, 0) 99.4%)',
    position: 'absolute',
    top: '100%',
    left: '50%',
    zIndex: '2',
    transform: 'translate(-50%,-100%)'
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <>
      <RootStyle>
        <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }} />
      </RootStyle>
    </>
  );
}
