import React, { useState } from 'react';
import Footer from './Footer/Footer';
import NavBar from './Navbar/NavBar';
import MobileFooter from './Footer/MobileFooter';

function Layout({children ,handleSearch,searchQuery}) {
 
  return (
    <>
    <div className='bg-main text-white'>
        <NavBar handleSearch={handleSearch} searchQuery={searchQuery}/>
        {children}
        <Footer />
        {/* mobile footer */}
        <MobileFooter />
    </div>
    </>
  );
}

export default Layout;