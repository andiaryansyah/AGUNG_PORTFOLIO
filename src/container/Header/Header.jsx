import React from "react";
import { IoMdDownload } from "react-icons/io";

import { SocialMedia } from "../../components";
import { images } from "../../constants";

const Header = () => {

  return (
    <>
      <span className="uk-position-absolute" style={{ top: "100px" }}>
        <img
          src={images.ellipse01}
          style={{ height: "370px" }}
          alt="ellipse01"
        />
      </span>
      <div className="uk-container uk-container-large uk-width-1-1">
        <div className="uk-flex uk-flex-middle uk-padding-small uk-animation-fade">
          <img src={images.logo} alt="logo" style={{ height: "60px" }} />
          <h4 className="uk-margin-small-left uk-align-center uk-text-bold">
            Portfolio
          </h4>
        </div>

        <div className="uk-flex uk-margin-medium-left ">
          <div className="uk-position-z-index uk-animation-slide-left-medium uk-width-1-2 ">
            <h1
              className="uk-text-bold uk-heading-small"
              style={{ color: "#4585C5" }}
            >
              Agung Azhari
              <h2 className="uk-text-bold uk-margin-small-top">
                UI/UX Designer
              </h2>
            </h1>
            <p className="uk-margin-medium-top change-font" >
              I'm interested in visuals that look simple and more white space
              and a priority the functional of application product. I have
              approximately more than 3 years of experience as graphic design
              dealing with digital products, especially on user interfaces.
            </p>
            <p className="uk-text-bold uk-margin-large-top">Follow Me On</p>
            <div>
              <SocialMedia />
            </div>
            <div className="uk-margin-top">
                <a href="../../assets/CV-TERBARU-2022.pdf" download target='_blank'>
              <button
                className="uk-button uk-button-primary "
                style={{ borderRadius: "5px" }}
              >
                <IoMdDownload size={20} className="uk-margin-small-right" />{" "}
                Download CV
              </button>
                </a>
            </div>
          </div>

          <div className="uk-width-1-2">
            <span className="uk-position-top-right">
              <img
                src={images.ellipse02}
                style={{ height: "230px" }}
                alt="ellipse02"
              />
            </span>

            <span className="uk-position-center uk-margin-xlarge-left uk-animation-fade">
              <img
                src={images.decor01}
                alt="decoration01"
                className="uk-margin-large-left"
              />
            </span>
            <div className="uk-flex uk-animation-slide-right-small uk-flex-right uk-margin-large-right">
              <img
                src={images.profile}
                alt="profile"
                style={{ height: "530px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

