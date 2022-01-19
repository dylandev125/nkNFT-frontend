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
  width: '330px',
  minHeight: '153px',
  position: 'absolute',
  bottom: '100%',
  left: '0',
  backgroundColor: 'rgba(27, 24, 71, 89%)',
  boxShadow: 'inset 0 0 20px rgb(133 155 193/9%)',
  padding: '15px 30px 15px 135px',
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
    height: '250px',
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
  const { caseClass, title, description, image } = item
  return (
    <CaseStyle className={caseClass}>
      <Image src={image} alt=""
        sx={{
          width: '180px',
          height: '180px',
          position: 'absolute',
          top: '-10px',
          left: '-23px',
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
          <Typography variant="h3" sx={{ mb: 8, fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>
            Battle Map
          </Typography>
        </MotionInView>

        {isDesktop ?
          <Box sx={{ position: 'relative' }}>
            <Image
              // disabledEffect
              alt="grid"
              src="https://website-static.sgp1.cdn.digitaloceanspaces.com/image.png"
              style={{
                width: '80%',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '100%',
                marginBottom: '10%',
                borderRadius: '42px'
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: '33%',
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
              <CaseItem caseClass="case1" title="Earn Bells" image="In-game activities.png" description="Fight creeps and destroy them to earn bells" />
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '35%',
              left: '73%',
              zIndex: '2',
              cursor: 'pointer',
              transition: 'opacity,.5s',
              '&:hover .case2': {
                visibility: 'visible',
                opacity: '1'
              }
            }}>
              <PinItem />
              <CaseItem caseClass="case2" title="Townhall" image="Upgrade v3.png" description="Spawn point for your team. generate health" />
            </Box>

            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '39%',
              zIndex: '2',
              cursor: 'pointer',
              transition: 'opacity,.5s',
              '&:hover .case3': {
                visibility: 'visible',
                opacity: '1'
              }
            }}>
              <PinItem />
              <CaseItem caseClass="case3" title="Towers" image="roadMap/road-map7.png" description="Destroy all enemy towers with the bells earned to win the game" />
            </Box>

          </Box> :
          <Box sx={{ position: 'relative', pb: 7, width: '80%', margin: 'auto' }}>
            <Image src="image.png" alt="" width="100%" style={{ borderRadius: '42px' }} />
          </Box>}
      </Box>
    </RootStyle >
  );
}
