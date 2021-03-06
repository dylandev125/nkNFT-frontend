import React from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { Box, Stack } from '@mui/material';
// components
//
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------
// const MainFooter = lazy(() => import('./MainFooter'))

export default function MainLayout() {
  // const { pathname } = useLocation();
  // const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet sx={{
        scrollPaddingTop: '40px',
      }} />

      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
      {/* {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo
              // sx={{ mb: 1, mx: 'auto' }}
              width="150px"
              height="90px" />

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="https://minimals.cc/">minimals.cc</Link>
            </Typography>
          </Container>
        </Box>
      )} */}
    </Stack>
  );
}
