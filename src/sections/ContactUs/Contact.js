// @mui
import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography, TextField, Stack } from '@mui/material';
import DecorationSVG from './DecorationSVG'
import { MotionInView, varFade } from '../../components/animate';
import Button from '../../components/Button';

// components
// import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
// import Button from '../../components/Button'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
    paddingTop: '60px',
    paddingBottom: '60px',
    width: '100%',
    textAlign: 'center'
}));

const BoxStyle = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '55px',
}));

const TextStyle = styled('span')(() => ({
    color: 'transparent',
    background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
}));



const animate = keyframes`
from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -32px;
  }
`;

const ImageStyle = styled('div')(() => ({
    animation: `${animate} 1s linear infinite`
}));


// ----------------------------------------------------------------------

export default function Contact() {

    // const head = document.querySelector('head');
    // const script = document.createElement('script');
    // script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    // head.appendChild(script);
    return (
        <>
            <RootStyle>
                <Typography variant="h3" sx={{ marginBottom: '72px' }}>Feel free to contact us at <TextStyle>meow@nekotopia.co</TextStyle> or fill the below form</Typography>
                <BoxStyle>
                    <ImageStyle>
                        <DecorationSVG />
                    </ImageStyle>
                </BoxStyle>

                <Stack spacing={5} sx={{ width: '500px', margin: 'auto' }}>
                    {/* <MotionInView variants={varFade().inUp}>
                        <Typography variant="h3">
                            Feel free to contact us. <br />
                            We'll be glad to hear from you, buddy.
                        </Typography>
                    </MotionInView> */}

                    <Stack spacing={3}>
                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Name" />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Email" />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Subject" />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Enter your message here." multiline rows={4} />
                        </MotionInView>
                    </Stack>

                    <MotionInView variants={varFade().inUp}>
                        <Button size="large" variant="contained" handleChange={() => { }}>
                            Submit Now
                        </Button>
                    </MotionInView>
                </Stack>
                {/* <BoxStyle>
                    <div className="calendly-inline-widget"
                        data-url="https://calendly.com/nekotopia?hide_landing_page_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '550px', paddingBottom: '21px' }} />
                    {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                    </div> */}
                {/* </BoxStyle> */}
                {/* <BoxStyle>
                    <Button handleClick={(e) => { }}>Coming Soon!</Button>
                </BoxStyle> */}
            </RootStyle>
        </>
    );
}
