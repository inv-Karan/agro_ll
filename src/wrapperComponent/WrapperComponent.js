import React from 'react';
import Header from '../HeaderComponent/HeaderContainer';
import Footer from '../FooterComponent/FooterContainer'
import {pages} from '../data';

const wraperComponent = (props) => {
    let pathname = window.location.pathname
    let details = {}
    if(pathname === '/about') {
        details = pages[0]  
    } else if(pathname === '/service') {
        details = pages[1]
    } else if(pathname === '/feature') {
        details = pages[2]
    } else if(pathname === '/contact') {
        details = pages[3]
    } else {
        details = pages[0]
    }
    
  let { header, subHeader, description, imageUrl } = details
  return (
      <>
      <Header
        header={header}
        subHeader={subHeader}
        description={description}
        imageUrl={imageUrl}
      />
      {props.children}
      <Footer />
      </>
  );
}

export default wraperComponent;
