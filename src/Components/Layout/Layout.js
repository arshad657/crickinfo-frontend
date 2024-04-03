import React from 'react'
import {Outlet } from 'react-router-dom';
import Header from '../AppBar/AppBar';
import { Box } from '@mui/material';
// import AppBar from 'components/Common/AppBar';
// import Footer from 'components/Common/Footer';

const Layout = () => {
    
    return (
      <>
        {/* <AppBar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[20px] w-full"/> */}
        <Header/>
        <Box sx={{ marginTop: '100px', width: '70%', mx: 'auto'}}> 
          <Outlet />
        </Box>
        {/* <Footer className="mb-0 bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full "  /> */}
        <footer style={{marginTop: 100}}>
            Footer
        </footer>
      </>
    );
  };

  export default Layout;