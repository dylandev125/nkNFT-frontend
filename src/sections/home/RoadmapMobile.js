import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
// _mock_
// import { _carouselsExample } from '../../../../_mock';
// components
import Image from '../../components/Image';
import { CarouselDots, CarouselArrows } from '../../components/carousel';
// ----------------------------------------------------------------------
const RootStyle = styled(Box)(({ theme }) => ({
    position: 'relative',
    '& .slick-list': {
        boxShadow: theme.customShadows.z16,
        borderRadius: Number(theme.shape.borderRadius) * 2,
    },
}));
// ----------------------------------------------------------------------

const _carouselsExample = [
    {
        id: 1,
        title: 'Aug-Sep 2021',
        description: 'Idea assessment Team Building Project Planning Character Development Entity Structuring'
    },
    {
        id: 2,
        title: 'Sep - Oct 2021',
        description: 'Whitepaper Website building Game Asset development'
    },
    {
        id: 3,
        title: 'Nov - Dec 2021',
        description: 'Website Launch Whitepaper Launch Partnerships & Marketing'
    },
    {
        id: 4,
        title: 'Dec-Jan 2022',
        description: 'Seed and Private sales NFT Mint & IDO launch EA to Nekotopia Marketplace Launch'
    },
    {
        id: 5,
        title: 'Jan-Feb 2022',
        description: 'MOBA(P2E) Announcement Metaverse Testnet Staking & Swap Launch Neko Experiment Launch'
    },
    {
        id: 6,
        title: 'Feb- March 2022',
        description: 'MOBA Dev logs Nekotopia Patchwork MOBA Early Access'
    },
    {
        id: 7,
        title: 'March-April 2022',
        description: 'Alpha Release of MOBA'
    }
]

export default function RoadmapMobile() {
    const theme = useTheme();
    const carouselRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === 'rtl'),
        ...CarouselDots({
            rounded: true,
            sx: { mt: 3 },
        }),
    };
    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };
    const handleNext = () => {
        carouselRef.current?.slickNext();
    };
    return (
        <RootStyle>
            <CarouselArrows
                onNext={handleNext}
                onPrevious={handlePrevious}
                sx={{
                    '& .arrow': {
                        '&.left': { left: 16 },
                        '&.right': { right: 16 },
                    },
                }}
            >
                <Slider ref={carouselRef} {...settings}>
                    {_carouselsExample.map((item) => (
                        <CarouselItem key={item.id} item={item} />
                    ))}
                </Slider>
            </CarouselArrows>
        </RootStyle>
    );
}
// ----------------------------------------------------------------------
CarouselItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
    }),
};
function CarouselItem({ item }) {
    const { id, title, description } = item;
    return (
        <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={6}>
                <Image alt={title} src={`roadMap/road-map${id}.png`} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='p' sx={{ fontSize: '12px' }}>{description}</Typography>
            </Grid>
        </Grid>
    )
}