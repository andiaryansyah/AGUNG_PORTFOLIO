import React from "react";

import { SocialMedia } from '../../components';
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="uk-background-default uk-container uk-container-large" style={{paddingBottom:"70px"}}>
      <div className="uk-flex uk-flex-middle uk-padding-small uk-animation-fade">
        <img src={images.logo} alt="logo" style={{ height: "60px" }} className=""/>
        <h4 className="uk-margin-small-left uk-align-center uk-text-bold">
          Portfolio
        </h4>
      </div>
      <div className="uk-flex uk-margin-medium-left uk-align-center">
      <div>
          <span className="uk-position-top-right">
            <img
              src={images.ellipse02}
              style={{ height: "230px" }}
              alt="ellipse02"
            />
          </span>
          <span className="uk-position-center-left">
            <img
              src={images.ellipse01}
              style={{ height: "370px" }}
              alt="ellipse01"
            />
          </span>
          <span className="uk-position-center uk-margin-xlarge-left uk-animation-fade">
            <img src={images.decor01} alt="decoration01" className="uk-margin-xlarge-left"/>
          </span>
          <div
            className="uk-position-right uk-margin-large-right uk-animation-slide-right-small" 
            >
          <img
            src={images.profile}
            alt="profile"
            style={{ height: "100vh" }}
            />
          </div>
        </div>
        <div className="uk-position-z-index uk-animation-slide-left-medium">
          <h1 className="uk-text-bold ">
            Agung Azhari
            <h1 className="uk-text-bold uk-heading-small">UI/UX Designer</h1>
          </h1>
          <p className="uk-width-1-2 uk-margin-medium-top">
            I'm interested in visuals that look simple and more white space and
            a priority the functional of application product. I have
            approximately more than 3 years of experience as graphic design
            dealing with digital products, especially on user interfaces.
          </p>
          <p className="uk-text-bold uk-margin-large-top">Follow Me On</p>
           <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Header;
