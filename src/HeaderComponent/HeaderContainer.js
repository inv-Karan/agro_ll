import React from 'react';
import Logo from './Logo';
import ToolBar from './ToolBar';
import image1 from '../img/top_bar_bg-1.jpg'

let sectionStyle = {
  backgroundColor: '#24292c',
  backgroundImage: `url(${image1})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom'
};

const headComp = (props) => <div>
  <header id="top-bar" className="top-bar top-bar--style-1">
    <div className="top-bar__bg" style={sectionStyle}></div>
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between no-gutters">
        <Logo />
        <div id="top-bar__inner" className="top-bar__inner">
          <ToolBar />
        </div>
      </div>
    </div>
  </header>
  <div id="hero" className="jarallax"
    data-speed="0.7" data-img-position="50% 80%" style={{ backgroundImage: `url(${props.imageUrl})` }}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-7">
          <h1 className="__title"><span>{props.header}</span> {props.subHeader}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  </div>
  {props.children}
</div>

export default headComp;