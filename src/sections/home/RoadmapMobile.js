import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
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
        description: <ul>
            <li>Idea assessment</li>
            <li>Team Building</li>
            <li>Project Planning</li>
            <li>Character Development</li>
            <li>Entity Structuring</li>
        </ul>
    },
    {
        id: 2,
        title: 'Sep - Oct 2021',
        description: <ul>
            <li>Whitepaper</li>
            <li>Website</li>
            <li>Building Game</li>
            <li>Asset development</li>
        </ul>
    },
    {
        id: 3,
        title: 'Nov - Dec 2021',
        description: <ul>
            <li>Website Launch</li>
            <li>Whitepaper Launch</li>
            <li>Partnerships & Marketing</li>
        </ul>
    },
    {
        id: 4,
        title: 'Dec-Jan 2022',
        description: <ul>
            <li>Seed and Private sales</li>
        </ul>
    },
    {
        id: 5,
        title: 'Jan-Feb 2022',
        description: <ul>
            <li>MOBA(P2E) Announcement</li>
            <li>Metaverse Testnet</li>
            <li>Staking & Swap Launch</li>
            <li>Neko Experiment Launch</li>
            <li>NFT Mint & IDO launch</li>
            <li>EA to Nekotopia</li>
        </ul>
    },
    {
        id: 6,
        title: 'Feb- March 2022',
        description: <ul>
            <li>MOBA Dev logs</li>
            <li>Nekotopia Patchwork</li>
            <li>MOBA Early Access</li>
        </ul>
    },
    {
        id: 7,
        title: 'March-April 2022',
        description: <ul><li>Alpha Release of MOBA</li></ul>
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
        id: PropTypes.number,
        description: PropTypes.string,
    }),
};
function CarouselItem({ item }) {
    const { id, title, description } = item;
    return (
        <Grid container spacing={2} alignItems={'center'} justifyContent={'center'} key={id}>
            <Grid item xs={6}>
                <Image alt={title} src={`road-map/road-map${id}.png`} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>{title}</Typography>
                <Typography variant='p' sx={{ fontSize: '12px' }}>{description}</Typography>
            </Grid>
        </Grid>
    )
}