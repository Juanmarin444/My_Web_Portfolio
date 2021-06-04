import React from 'react';
// import styled from 'styled-components';
// import logo from "../../../images/logo.svg";
import logo from "../../../images/MainLogo_2.svg";
import './styles.css';

const Logo = () => {
  return (
    // <LogoWrapper>
    //   <LogoImg><img src={logo} alt="logo"/></LogoImg>
    //   <LogoText>Web Developer</LogoText>
    // </LogoWrapper>
    <div className="logoWrapper">
      <div className="logo-img">
        <img rel="preload" as="image" src={logo} alt="Juan Marin's Logo" width="200" height="100"/>
        {/* <img rel="preload" as="image" src={logo} alt="Juan Marin's Logo"/> */}
      </div>
      <h2 className="logo-txt">WEB DEVELOPER</h2>
    </div>
  )
}

export default Logo;
