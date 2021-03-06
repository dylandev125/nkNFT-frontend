// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat } from '../sections/about';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  width: '100%',
  overflowX: 'hidden',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
    backgroundSize: 'cover',
    backgroundImage: "url(images/backgrounds/About.jpg)",
    backgroundRepeat: 'no-repeat'
  },
}));

// ----------------------------------------------------------------------

export default function About() {


  return (
    <Page title="About us">
      <RootStyle >
        <AboutHero />

        <AboutWhat />

        {/* <AboutWhat />

        <AboutVision />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

        <AboutTeam />

        <AboutTestimonials /> */}
      </RootStyle>
    </Page>
  );
}
