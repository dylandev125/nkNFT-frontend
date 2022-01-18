import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Divider, Card, CardHeader, CardContent, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';
import Button from '../../components/Button'
import AboutTeams from './AboutTeams'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  // paddingTop: theme.spacing(),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const AccordionStyle = styled('p')(() => ({
  fontWeight: '500',
  fontSize: '30px',
  lineHeight: '140%',
  color: 'transparent',
  fontFamily: 'Akira Expanded',
  background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
  backgroundClip: 'text',
  marginBottom: '10px',
  // marginTop: '40px',
  textTransform: 'uppercase',
  WebkitBackgroundClip: 'text'
}))

const AccordionTitleStyle = styled("Typography")(() => ({
  color: '#8270b6',
  fontSize: '20px',
  '&:hover, &:active': {
    color: 'transparent',
    fontSize: '20px',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  }
}))

// const CardStyle = styled("Card")(() => ({
//   background: 'rgba(35, 20, 71, .57)',
//   borderRadius: '12px',
//   padding: '33px 48px 28px'
// }))

const AnchorStyle = styled("a")(() => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#fff',
  '&:hover': {
    color: 'transparent',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  }
}))

const TypographyNavStyle = styled(Typography)(() => ({
  padding: '5px 15px',
  '&:hover': {
    color: 'transparent',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  }
}))


// ----------------------------------------------------------------------

export default function AboutWhat() {
  // const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  // const isLight = theme.palette.mode === 'light';
  // const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (isDesktop) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isDesktop]);


  const NavItem = (item) => {
    const { id, title } = item
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', padding: 1 }}>
        <img src="arrow.svg" alt="" />
        <AnchorStyle href={`#${id}`} >
          <Typography sx={{ padding: '0px 15px 0px 15px' }}>{title}</Typography>
        </AnchorStyle>
      </Box>
    )
  }

  const NavSubItem = (item) => {
    const { id, title } = item
    return (
      <li>
        <AnchorStyle href={`#${id}`}>
          <TypographyNavStyle >
            {title}
          </TypographyNavStyle>
        </AnchorStyle>
      </li>
    )
  }

  const AccordionItem = (item) => {
    const { id, title, description } = item
    return (
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <AccordionTitleStyle sx={{ textAlign: 'left' }}>{title}</AccordionTitleStyle>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', paddingLeft: '15px' }}>
          {description && description}
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <>
      <RootStyle>
        <Container sx={{ maxWidth: { lg: '1500px' } }}>
          <Grid container spacing={1} alignItems={'stretch'} justifyContent="space-evenly" sx={{ overflowY: 'hidden', overflowX: 'hidden' }}>
            {isDesktop && (
              <Grid item xs={12} md={3} lg={3} sx={{ pr: { md: 3 }, position: 'relative', marginTop: '70px' }}>
                <Grid item xs={12}>
                  <Box sx={{ position: 'absolute', top: `${scrollPosition > 400 ? scrollPosition - 400 : 0}px`, transition: 'top, .75s' }}>
                    <Card sx={{ width: '320px', padding: '10px' }}>
                      <CardHeader title="NAVIGATION" />
                      <Divider sx={{ paddingTop: 3 }} />
                      <CardContent sx={{ padding: '15px' }}>
                        <NavItem id="about" title="About" />
                        <NavItem id="team" title="Team" />
                        {/* <NavItem id="lifeAtNeko" title="Start your life in the Nekotopia" /> */}
                        <NavItem id="FAQ" title="Frequently asked questions" />

                        <Box sx={{ paddingLeft: '30px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', paddingLeft: 3 }}>
                            <ul>
                              <NavSubItem id="GeneralInformation" title="General Information" />
                              {/* <NavSubItem id="PresaleInfo" title=" Presale Info" /> */}
                              <NavSubItem id="Support" title="Support" />
                            </ul>
                          </Box>
                        </Box>

                        <Button to="/contact"
                          component={RouterLink}
                          handleClick={() => { }}
                          sx={{ width: '100%', marginTop: '5px' }}>
                          Contact Us
                        </Button>

                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            )}

            <Grid item xs={12} md={9} lg={8}>

              <Box id="about">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '70px' }}>
                  <Typography
                    variant="h3"
                    sx={{ mb: 3, color: 'common.white', fontFamily: 'Akira Expanded' }} >
                    About
                  </Typography>
                </MotionInView>


                <MotionInView variants={varFade().in} sx={{
                  color: 'common.white',
                }}>
                  <Typography sx={{ mt: 2 }}>
                    At the quantum level, matter is just a collection of possibilities. The point at which reality becomes “real” can’t be pinned down. Everything exists in a state of potential.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Enter the Nekoverse, where time, space, matter, and imagination collide to produce limitless possibilities. This top-down, open-ended social world is built on blockchain and maximizes the interactive and creative potential of the metaverse.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    Your mind-bending journey begins by minting your avatar, a Neko kitty inspired by Schrödinger’s cat, who teeters on an undefinable threshold between life and death.
                  </Typography>
                </MotionInView>
              </Box>

              <Box id="team">
                <MotionInView variants={varFade().in} sx={{
                  color: 'common.white',
                  paddingTop: '70px'
                }} >
                  <AboutTeams />
                </MotionInView>
              </Box>


              {/* <Box id="lifeAtNeko">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '50px' }}>
                  <Typography
                    variant="h3"
                    sx={{ mb: 3, mt: 10, color: 'common.white', fontFamily: 'Akira Expanded' }} >
                    Start your life in the Nekotopia
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFade().in} sx={{
                  color: 'common.white',
                }}>
                  <Typography sx={{ mt: 2 }}>
                    Take a quantum leap into a new, multi-dimensional world. Mint your Neko and start exploring life in the Nekotopia, an endlessly unfolding metaverse of limitless possibilities.
                  </Typography>
                </MotionInView>

              </Box> */}

              <Box id="FAQ">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '30px' }}>
                  <Typography
                    variant="h3"
                    sx={{ mb: 3, mt: 10, color: 'common.white', fontFamily: 'Akira Expanded' }} >
                    Frequently asked questions
                  </Typography>
                </MotionInView>
              </Box>

              <Box id="GeneralInformation">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '70px' }}>
                  <AccordionStyle
                    variant="p"
                  >
                    GENERAL
                  </AccordionStyle>
                  <AccordionItem
                    id="panel1"
                    title="What is Nekotopia?"
                    description={
                      <Typography varaint="p">
                        Nekotopia is a blockchain enabled 2D social world (metaverse) comprised of interactive Dapps & a primary Massive Online Battle Arena game. The Neko NFTs are the avatars/memberships for access to the metaverse that also double as playable characters within Nekoverse games.
                        <br /><br />
                        The metaverse is visualized as a top down "Stardew Valley" style open ended world. Social avatars interact with NPCs (DApps) to perform DEFI functions (staking, swapping), NFT evolutions and buying in-game assets.
                      </Typography>
                    }
                  />
                  <AccordionItem
                    id="panel2"
                    title="What is NEKO?"
                    description={
                      <Typography varaint="body2" >
                        NEKO is the native token for Nekotopian Metaverse.
                        <br />
                        NEKO is an ERC20/AVAX token on AVAX L1 Chain
                        <br />
                        <br />
                        NEKO Use-case

                        <ul>
                          <li> Secondary Market Purchases </li>
                          <li> Staking & Liquidity </li>
                          <li> Navigating realms/maps in the Nekotopian Metaverse </li>
                          <li>Governance</li>
                          <li>Upgrading NFT avatars & game characters</li>
                          <li>Purchase Mystery Boxes and battle Passes</li>
                        </ul>
                      </Typography>
                    } />
                  <AccordionItem
                    id="panel3"
                    title="What are the play-to-earn aspects of the game?"
                    description={
                      <Typography varaint="p">
                        When players win the MOBA game, they will be rewarded with $PCash. Player can earn by playing mini games in the metaverse as well.
                      </Typography>
                    } />
                </MotionInView>
              </Box>

              {/* <Box id="PresaleInfo">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '70px' }}>
                  <AccordionStyle
                    variant="p"
                  >
                    Presale info
                  </AccordionStyle>
                  <AccordionItem
                    id="panel4"
                    title="What is $PCASH?"
                    description={
                      <Typography variant='p' >
                        <strong>$PCash</strong> is a synthetic token mainly serving as in-game rewards & currency to buy game related items and consumables
                        <br /><br />
                        <strong>$PCash</strong> Usecases<br />
                        To buy Psi Functions ( Can be sold in secondary market for AVAX/ NEKO ) In game P2P item trading (Buying in game consumables)
                      </Typography>
                    }
                  />
                </MotionInView>
              </Box> */}

              <Box id="Support">
                <MotionInView variants={varFade().in} sx={{ paddingTop: '70px' }}>
                  <AccordionStyle
                    variant="p"
                  >
                    Support
                  </AccordionStyle>
                  <AccordionItem
                    id="panel7"
                    title="Is there a free-to-play aspect of the game?"
                    description={
                      <Typography variant='p' >
                        You will start out with a random base NFT that you will mint or buy from marketplace. What your Neko becomes is up to you (with a little help from quantum mechanics) in this “play to earn” social world.
                      </Typography>
                    } />
                  <AccordionItem
                    id="panel8"
                    title="Is the game playable on mobile?"
                    description={
                      <Typography variant='p'>
                        No, the game is primarily going to be launched on PC.
                      </Typography>
                    } />
                </MotionInView>
              </Box>

            </Grid>
          </Grid>
        </Container >
      </RootStyle >
    </>

  );
}

