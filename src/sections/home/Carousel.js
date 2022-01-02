import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
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

export default function Carousel({ carouselsExample, ratio }) {
    console.log(carouselsExample)
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
            {carouselsExample.length > 0 &&
                <CarouselArrows
                    filled
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
                        {carouselsExample.map((item) => (
                            <CarouselItem key={item.id} item={item} ratio={ratio} />
                        ))}
                    </Slider>
                </CarouselArrows>}
        </RootStyle>
    );
}
// ----------------------------------------------------------------------
CarouselItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        ratio: PropTypes.string
    }),
};
function CarouselItem({ item, ratio }) {
    const { image, title } = item;
    return <Image alt={title} src={image} ratio={ratio || '21/9'} />;
}