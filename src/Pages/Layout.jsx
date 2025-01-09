import React from 'react'
import Header from "../material/Navbar";
import Footer from "../material/Footer";
import { Box } from '@mui/material';

export default function Layout({children}) {
  return (

    <Box>
      <Header />
      <main>{children}</main>
      <Footer/>
     
    </Box>

  )
}
