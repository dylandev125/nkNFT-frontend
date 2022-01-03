// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
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



// ----------------------------------------------------------------------

export default function Contact() {

    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
    return (
        <>
            <RootStyle>
                <Typography variant="h3" sx={{ marginBottom: '72px' }}>SCHEDULE A MEETING WITH US</Typography>
                <BoxStyle>
                    <img src="arrow-line.svg" alt="" />
                </BoxStyle>
                <BoxStyle>
                    <div className="calendly-inline-widget"
                        data-url="https://calendly.com/nekotopia?hide_landing_page_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '550px', paddingBottom: '21px' }} />
                    {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                    </div> */}
                </BoxStyle>
                {/* <BoxStyle>
                    <Button handleClick={(e) => { }}>Coming Soon!</Button>
                </BoxStyle> */}
            </RootStyle>
        </>
    );
}
