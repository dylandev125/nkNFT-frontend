// @mui
import React from 'react'
import { useSnackbar } from 'notistack';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Box } from '@mui/material';
// routes
// components
import Button from '../../components/Button'
import Image from '../../components/Image';
import axios from '../../utils/axios';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
  width: '100%'
}));

const AnchorStyle = styled('a')(() => ({
  textDecoration: 'none',
  color: '#8270b6',
  '&:hover': {
    color: 'transparent',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  }
}));

const AnchorImageStyle = styled('a')(() => ({
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    color: 'common.white'
  }
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = React.useState('')

  const handleRegister = async () => {
    if (email) {
      try {
        await axios.post('https://website-backend-app-mtk2p.ondigitalocean.app/v1/register', { "email": email });
        setEmail('')
        enqueueSnackbar('Request Submitted!');
      } catch (e) {
        setEmail('')
        enqueueSnackbar('Error while submitting!', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Please fill email', { variant: 'error' });
    }
  }

  return (
    <RootStyle>
      <img src="images/footer/footer-line.svg" alt="" style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      }} />

      <Container sx={{ pt: 5 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "0 35px"
          }}>
          <img src="images/logo/nekotopia-white.png" alt="Nekotopia Logo" width={"250"} height={"100"} />
        </div>


        <div style={{ marginTop: '40px', textAlign: 'center', }}>
          <Typography
            component="subtitle1"
            variant="subtitle2"
            color="common.white"
            sx={{
              mt: 50,
              pb: 5,
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            Are you ready to start your journey?
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
              mb: 4
            }}
          >
            <TextField type="email" size="small" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' />
            <Button handleClick={() => { handleRegister() }} sx={{ ml: 1, height: '40px', borderRadius: '8px' }}> Register</Button>
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <AnchorImageStyle href="https://www.instagram.com/nekotopiaworld/">
            <Image src="images/footer/insta.svg" alt="insta-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://twitter.com/nekotopiaworld">
            <Image src="images/footer/twitter.svg" alt="twitter-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://discord.com/invite/a3DypjssRZ">
            <Image src="images/footer/discord.svg" alt="discord-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://t.me/nekotopiaworld">
            <Image src="images/footer/telegram.png" alt="discord-share" style={{ width: '27px', height: '28px' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://medium.com/@nekotopiaworld">
            <Image src="images/footer/medium.png" alt="discord-share" style={{ width: '30px', height: '32px' }} />
          </AnchorImageStyle>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <Typography
            component="subtitle1"
            variant="subtitle1"
            color="#8270b6"
            sx={{
              mt: 5,
              pb: 5,
              fontSize: 13,
              fontWeight: 'normal'
            }}
          >
            <AnchorStyle href="#" target="_blank">
              TERMS & CONDITIONS
            </AnchorStyle> /
            <AnchorStyle href="#" target="_blank">
              PRIVACY POLICY </AnchorStyle>/
            <AnchorStyle href="#" target="_blank">
              DISCLAIMER
            </AnchorStyle>
          </Typography>
        </div>

      </Container>
    </RootStyle >
  );
}
