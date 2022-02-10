// @mui
import { Box, Typography } from '@mui/material';
// components
// import Image from '../../components/Image';
import { styled } from '@mui/material/styles';
// import { MotionInView, varFade } from '../../components/animate';
// import Button from '../../components/Button'

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)(() => ({
    width: '66.44px',
    height: '66.44px',
    background: '#231447',
    borderRadius: '13px',
    transform: 'matrix(0.71, 0.71, 0.71, -0.71, 0, 0)',
    position: 'relative',
    marginBottom: '12px',
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '74px',
        height: '74px',
        top: '50%',
        left: '50%',
        zIndex: 2,
        backgroundBorder: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
        transform: 'translate(-50%, -50%) matrix(0.71, 0.71, 0.71, -0.71, 0, 0)',
        // WebkitMask: 'url("data:image/svg+xml,%3Csvg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0.707107" y="2.98023e-08" width="58.397" height="58.397" rx="12.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -4.81242 36.4805)" fill="transparent" stroke="black"/%3E%3C/svg%3E") center no-repeat',
        // mask: 'url("data:image/svg+xml,%3Csvg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="0.707107" y="2.98023e-08" width="58.397" height="58.397" rx="12.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -4.81242 36.4805)" fill="transparent" stroke="black"/%3E%3C/svg%3E") center no-repeat',
    },
    '&:hover': {
        background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)'
    }
}));

const TextStyle = styled(Typography)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%) rotate(-135deg) scaleX(-1)',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '140%'
}));

const PriceStyle = styled(Typography)(() => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '140%',
    marginBottom: '8px',
    '&:hover': {
        color: 'transparent',
        background: 'linear-gradient(110.52deg, #FF7C03 13.88%, #FFD500 123.38%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text'
    }
}));

const CountStyle = styled(Typography)(() => ({
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '140%',
    textAlign: 'center',
    color: '#ffaf02',
    marginBottom: '10px'
}));

const RewardStyle = styled(Typography)(() => ({
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '140%',
    color: '#fff',
    padding: '0 7px'
}));

const HeadingStyle = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '140%',
    textAlign: 'center',
    fontFeatureSettings: '"salt" on, "liga" off',
    color: '#fff',
    marginBottom: '65px'
}));


const MileStoneItem = (item) => {
    const { id, price, count } = item
    return (
        <Box sx={{
            textAlign: 'center', width: { xs: '70px' }, margin: '15px'
        }}>
            <BoxStyle>
                <TextStyle>{id}</TextStyle>
            </BoxStyle>
            <PriceStyle>{price}</PriceStyle>
            <CountStyle>{count}</CountStyle>
            <RewardStyle> Gem <br />Rewards</RewardStyle>
        </Box >
    )
}


const mileStones = [
    {
        id: 1,
        price: '$200K',
        count: '8,000'
    },
    {
        id: 2,
        price: '$500K',
        count: '10,000'
    },
    {
        id: 3,
        price: '$1M',
        count: '15,000'
    },
    {
        id: 4,
        price: '$1.75M',
        count: '22,000'
    },
    {
        id: 5,
        price: '$3M',
        count: '35,000'
    },
    {
        id: 6,
        price: '$5M',
        count: '50,000'
    },
    {
        id: 7,
        price: '$7.5M',
        count: '60,000'
    },
    {
        id: 8,
        price: '$10M',
        count: '75,000'
    }
]

export default function YourRewards() {
    return (
        <Box sx={{ marginTop: '-89px', marginBottom: '200px' }}>
            <HeadingStyle>Milestone Rewards</HeadingStyle>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {mileStones.map((item, idx) => <MileStoneItem item={item} key={idx} />)}
            </Box>
        </Box>
    );
}
