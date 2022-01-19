// @mui
import { useSnackbar } from 'notistack';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Box } from '@mui/material';
// routes
// components
import Button from '../../components/Button'
import Image from '../../components/Image';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  // padding: '30px 0 15px 0',
  // mask: 'url("data:image/svg+xml,%3Csvg width='1920' height='596' viewBox='0 0 1920 596' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.500042V595.5L1920 595.5V0.5C1920 0.5 1693.73 35.6549 1547.5 41.4952C1422.47 46.4888 1323.44 33.8937 1224.43 21.3014C1140.68 10.6497 1056.94 0 957.5 0C845.542 0 770.854 11.1052 698.753 21.8257C631.106 31.884 565.736 41.6037 474 41.4952C288.201 41.2755 0 0.500042 0 0.500042Z' fill='black'/%3E%3C/svg%3E%0A") center 0 no - repeat',
  // WebkitMask: `url("data:image/svg+xml,%3Csvg width='1920' height='596' viewBox='0 0 1920 596' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.500042V595.5L1920 595.5V0.5C1920 0.5 1693.73 35.6549 1547.5 41.4952C1422.47 46.4888 1323.44 33.8937 1224.43 21.3014C1140.68 10.6497 1056.94 0 957.5 0C845.542 0 770.854 11.1052 698.753 21.8257C631.106 31.884 565.736 41.6037 474 41.4952C288.201 41.2755 0 0.500042 0 0.500042Z' fill='black'/%3E%3C/svg%3E%0A") center 0 no - repeat`,
  // WebkitMask: 'url(footer-bg.svg) center 0 no-repeat',
  // borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
  // backgroundColor: theme.palette.background.default,
  // background: '#240e63 linear-gradient(174.49deg, rgba(44, 30, 130, 0.5) 13.81%, rgba(44, 30, 130, 0) 82.09%)',
  // display: 'flex',
  // textAlign: 'center',
  // alignItems: 'center',
  // alignSelf: 'center'
}));

const AnchorStyle = styled('a')(() => ({
  textDecoration: 'none',
  color: '#8270b6',
  '&:hover': {
    // color: 'common.white',
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
  return (
    <RootStyle>
      <img src="footer-line.svg" alt="" style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      }} />

      {/* <Divider /> */}
      <Container sx={{ pt: 5 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "0 30px"
          }}>
          <Image src="logo/logo-new.png" alt="Nekotopia Logo" sx={{ width: '171px', height: '55px' }} />
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
            <TextField type="email" size="small" placeholder='Email Address' />
            <Button handleClick={() => enqueueSnackbar('Request Submitted!')} sx={{ ml: 1, height: '40px', borderRadius: '8px' }}> Register</Button>
          </Box>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <AnchorImageStyle href="https://www.instagram.com/nekotopiaworld/">
            <Image src="insta.svg" alt="insta-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://twitter.com/nekotopiaworld">
            <Image src="twitter.svg" alt="twitter-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://discord.com/invite/a3DypjssRZ">
            <Image src="discord.svg" alt="discord-share" style={{ width: '100%', height: '100%' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://t.me/nekotopiaworld">
            <Image src="telegram1.png" alt="discord-share" style={{ width: '27px', height: '28px' }} />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://medium.com/@nekotopiaworld">
            <Image src="medium2.png" alt="discord-share" style={{ width: '30px', height: '32px' }} />
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
    </RootStyle>
  );
}
