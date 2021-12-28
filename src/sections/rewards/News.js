// @mui
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
// routes
// import { PATH_PAGE } from '../../../../routes/paths';
// components
import Page from '../../components/Page';
// import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
import Carousel from './Carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(15),
    textAlign: 'center'
}));

export default function News() {
    return (
        <Page title="Rewards">
            <RootStyle>
                <Typography variant="h3" sx={{ mb: 10 }}> LOREM IPSUM DOLOR SIT</Typography>
                <Carousel />
            </RootStyle>
        </Page>
    );
}

