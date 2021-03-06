import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card } from '@mui/material';
// _mock_
// components
import Image from './Image';
import { CarouselArrowIndex } from './carousel';

// ----------------------------------------------------------------------

export default function CarouselBasic(item) {
    const { _carouselsExample } = item
    const theme = useTheme();
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? _carouselsExample.length - 1 : 0);

    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === 'rtl'),
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <Card>
            <Slider ref={carouselRef} {...settings}>
                {_carouselsExample && _carouselsExample.map((item) => (
                    <CarouselItem key={item.id} item={item} />
                ))}
            </Slider>

            <CarouselArrowIndex
                index={currentIndex}
                total={_carouselsExample.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </Card>
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
    const { image, title } = item;

    return <Image alt={"Nekotopia" + title} src={image} ratio="16/9" />;
}









