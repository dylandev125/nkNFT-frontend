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

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
}));

const CaseStyle = styled('div')(() => ({
  width: '550px',
  minHeight: '233px',
  position: 'absolute',
  bottom: '100%',
  left: '0',
  backgroundColor: 'rgba(27, 24, 71, .72)',
  boxShadow: 'inset 0 0 20px rgb(133 155 193/9%)',
  padding: '15px 45px 15px 200px',
  borderRadius: '12px',
  transform: 'translate(-38px, -20px)',
  cursor: 'default',
  visibility: 'hidden',
  opacity: '0',
  transition: 'opacity, .5s',
  '&:before': {
    content: '""',
    borderLeft: '24px solid transparent',
    borderRight: '24px solid transparent',
    borderTop: '34px solid rgba(27, 24, 71, .72)',
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
    background: 'url(case-arrow.png) 0 0 no- repeat',
    zIndex: 3
  }
}
));


const PinItem = () => <MotionInView variants={varFade().inDown}>
  <m.div animate={{ y: [-5, 10, -5] }} transition={{ duration: 5, repeat: Infinity }}>
    <Image
      disabledEffect
      alt="sidebar"
      src={`pin.png`}
    />
  </m.div>
</MotionInView>


const CaseItem = (item) => {
  const { caseClass, title, description } = item
  return (
    <CaseStyle className={caseClass}>
      <Image src="chest.png" alt=""
        sx={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '-50px',
          left: '-82px',
          zIndex: 5,
          pointerEvents: 'none'
        }} />
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p" sx={{ mt: 3, fontSize: '13px' }}>{description}</Typography>
    </CaseStyle>
  )
}

// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  const isDesktop = useResponsive('up', 'lg');
  // const handleMouseOver = () => {
  //   console.log(document)
  //   const elements = document.getElementsByClassName('case');
  //   console.log(elements)
  // }
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
              // disabledEffect
              alt="grid"
              src="image.png"
              style={{
                width: '80%',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '100%',
                marginBottom: '40px',
                borderRadius: '42px'
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: '28%',
                left: '39%',
                zIndex: '2',
                cursor: 'pointer',
                transition: 'opacity,.5s',
                '&:hover .case1': {
                  visibility: 'visible',
                  opacity: '1'
                }
              }}
            >
              <PinItem />
              <CaseItem caseClass="case1" title="Earn Pcash" description="Crush your opponents to earn PCASH, which you can use to trade within the metaverse!" />
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '27%',
              left: '62%',
              zIndex: '2',
              cursor: 'pointer',
              transition: 'opacity,.5s',
              '&:hover .case2': {
                visibility: 'visible',
                opacity: '1'
              }
            }}>
              <PinItem />
              <CaseItem caseClass="case2" title="Competitive Edge" description="Explore competitive edge and live operations, such as e-sports, events and tournaments, boss battles, mystery box and treasure chests, and professional team tie-ups." />
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '48%',
              zIndex: '2',
              cursor: 'pointer',
              transition: 'opacity,.5s',
              '&:hover .case3': {
                visibility: 'visible',
                opacity: '1'
              }
            }}>
              <PinItem />
              <CaseItem caseClass="case3" title="Gain Psi functions" description="During battle, players defeat contending Nekos or neutral NPCs and gain Psi Functions. Using Psi Functions, players can equip their Neko characters with potential new items & cosmetics that enable powerful new skills & evolutions" />
            </Box>

          </Box> :
          <Box sx={{ position: 'relative', pb: 7, width: '100%', margin: 'auto' }}>
            <Image src="island.webp" alt="" width="100%" />
          </Box>}
      </Box>
    </RootStyle >
  );
}
