// @mui
import React from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack';
import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography, TextField, Stack } from '@mui/material';
import DecorationSVG from './DecorationSVG'
import { MotionInView, varFade } from '../../components/animate';
import Button from '../../components/Button';
import useResponsive from '../../hooks/useResponsive';
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
    animation: `${animate} 1s linear infinite`,
    width: '100%'
}));


// ----------------------------------------------------------------------

export default function Contact() {
    const isDesktop = useResponsive('up', 'lg');
    const { enqueueSnackbar } = useSnackbar();
    const [formDetails, setFormDetails] = React.useState({ name: '', email: '', subject: '', message: '' })


    const handleSubmit = async () => {
        if (formDetails.name && formDetails.email && formDetails.subject) {
            try {
                await axios.post('https://website-backend-app-mtk2p.ondigitalocean.app/v1/contactus', formDetails);
                setFormDetails({ name: '', email: '', subject: '', message: '' })
                enqueueSnackbar('Request Submitted!');
            } catch (e) {
                setFormDetails({ name: '', email: '', subject: '', message: '' })
                enqueueSnackbar("Error submitting form!", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Please fill all the details", { variant: 'error' })
        }
    }

    return (
        <>
            <RootStyle>
                <Typography variant="h6" sx={{ marginBottom: '72px', fontFamily: 'Akira Expanded', letterSpacing: '2px', }}>Feel free to contact us at <TextStyle>meow@nekotopia.co</TextStyle> or fill the below form</Typography>
                {isDesktop && <BoxStyle>
                    <ImageStyle>
                        <DecorationSVG />
                    </ImageStyle>
                </BoxStyle>}

                <Stack spacing={5} sx={{ width: { md: '30%', xs: '80%' }, margin: 'auto' }}>
                    <Stack spacing={3}>
                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Name" value={formDetails.name} onChange={e => setFormDetails(prev => ({ ...prev, name: e.target.value }))} />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Email" value={formDetails.email} onChange={e => setFormDetails(prev => ({ ...prev, email: e.target.value }))} />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Subject" value={formDetails.subject} onChange={e => setFormDetails(prev => ({ ...prev, subject: e.target.value }))} />
                        </MotionInView>

                        <MotionInView variants={varFade().inUp}>
                            <TextField fullWidth label="Enter your message here." multiline rows={4} value={formDetails.message} onChange={e => setFormDetails(prev => ({ ...prev, message: e.target.value }))} />
                        </MotionInView>
                    </Stack>

                    <MotionInView variants={varFade().inUp}>
                        <Button size="large" variant="contained" handleClick={() => { handleSubmit() }}>
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
