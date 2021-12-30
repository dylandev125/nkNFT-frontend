import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@minimals.cc', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
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

const AnchorStyle = styled('a')(({ theme }) => ({
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

const AnchorImageStyle = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    color: 'common.white'
  }
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
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
          <img src="logo/logo-new.png" alt="Nekotopia Logo" width={"171"} height={"55"} />
        </div>


        <div style={{ marginTop: '40px', textAlign: 'center', }}>
          <Typography
            component="subtitle1"
            variant="subtitle1"
            color="common.white"
            sx={{
              mt: 50,
              pb: 5,
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            JOIN THE MOVEMENT!
          </Typography>

          <Typography
            component="p"
            variant="body2"
            sx={{
              pb: 5,
              fontSize: 16,
            }}
          >
            <AnchorStyle href="https://twitter.com/nekotopiaworld" target="_blank">#WEARENEKOTOPIA</AnchorStyle>
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <AnchorImageStyle href="https://www.instagram.com/nekotopiaworld/">
            <img src="insta.svg" alt="insta-share" />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://twitter.com/nekotopiaworld">
            <img src="twitter.svg" alt="twitter-share" />
          </AnchorImageStyle>
          <AnchorImageStyle href="https://discord.com/invite/a3DypjssRZ">
            <img src="discord.svg" alt="discord-share" />
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
