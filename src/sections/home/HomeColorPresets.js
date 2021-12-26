import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
} from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

const PinItem = () => {
  return (<MotionInView variants={varFade().inDown}>
    <m.div animate={{ y: [-5, 10, -5] }} transition={{ duration: 5, repeat: Infinity }}>
      <Image
        disabledEffect
        alt="sidebar"
        src={`pin.png`}
      />
    </m.div>
  </MotionInView>)
}

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
}));

// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle>
      <Box sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 8 }}>
            Battle Map
          </Typography>
        </MotionInView>

        {isDesktop ?
          <Box sx={{ position: 'relative' }}>
            <Image
              disabledEffect
              alt="grid"
              src="island.webp"
            />

            <Box sx={{
              position: 'absolute',
              top: '28%',
              left: '39%'
            }}>
              <PinItem />
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '27%',
              left: '62%'
            }}>
              <PinItem />
              <Box sx={{
                width: '675px',
                minHeight: '300px',
                position: 'absolute',
                bottom: '100%',
                left: '0',
                backgroundColor: 'rgba(27,24,71,.72)',
                boxShadow: 'inset 0 0 20px rgb(133 155 193/9%)',
                padding: '30px 45px 30px 312px',
                borderRadius: '12px',
                transform: 'translate(-38px, -20px)',
                cursor: 'default',
                visibility: 'hidden',
                opacity: '0',
                transition: 'opacity,.5s',
                '&:hover': {
                  opacity: '1',
                  visibility: 'visible',
                },
                '&:before': {
                  content: '""',
                  borderLeft: '24px solid transparent',
                  borderRight: '24px solid transparent',
                  borderTop: '34px solid rgba(27,24,71,.72)',
                  position: 'absolute',
                  left: '55px',
                  top: '100%'
                },
                '&:after': {
                  content: '""',
                  width: '100%',
                  height: '310px',
                  position: 'absolute',
                  bottom: '-42px',
                  left: '0',
                  background: 'url(case-arrow.png) 0 0 no-repeat',
                  zIndex: '3'
                }
              }}>
                <img src="chest.png" alt="chest" />
                <Typography variant="h2">
                  Competitive Edge
                </Typography>
              </Box>
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '48%'
            }}>
              <PinItem />
            </Box>

          </Box> :
          <Box sx={{ position: 'relative', mb: 7 }}>
            <img src="island-mob.webp" alt="" />
          </Box>}
      </Box>
    </RootStyle >
  );
}
