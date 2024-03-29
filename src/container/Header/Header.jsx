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
      <div className="uk-container uk-container-large uk-width-1-1" style={{background:"#212529"}}>
        <div className="uk-flex uk-flex-middle uk-margin-medium-top uk-animation-fade">
          <img src={images.logo} alt="logo" style={{ height: "60px" }} />
          <h4 className="uk-margin-small-left uk-align-center uk-text-bold" style={{color: "#fff"}}>
            Portfolio
          </h4>
        </div>

        <div className="uk-flex ">
          <div className="uk-position-z-index uk-animation-slide-left-medium uk-width-1-2 ">
            <h1
              className="uk-text-bold uk-heading-small"
              // style={{ color: "#4585C5" }}
              style={{color: "#fff"}}
            >
              Agung Azhari
              <h2 className="uk-text-bold uk-margin-small-top" style={{color: "#A4A4A4"}}>
                UI/UX Designer
              </h2>
            </h1>
            <p className="uk-margin-medium-top change-font" style={{color: "#fff"}}>
              I'm interested in visuals that look simple and more white space
              and a priority the functional of application product. I have
              approximately more than 3 years of experience as graphic design
              dealing with digital products, especially on user interfaces.
            </p>
            <p className="uk-text-bold uk-margin-large-top" style={{color: "#fff"}}>Follow Me On</p>
            <div>
              <SocialMedia />
            </div>
            <div className="uk-margin-top">
              <a
                href="https://drive.google.com/u/0/uc?id=161yFXdTcjg9OMdljE5uG_aUbXEQO0CfX&export=download"
                download="CV AGUNG AZHARI"
                target="_blank"
                rel="noreferrer"
                style={{textDecoration: "none"}}
              >
                <p
                  className="uk-p change-font downloadButton"
                  style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
                >
                  <IoMdDownload size={20} className="uk-margin-small-right" />{" "}
                  Download CV
                </p>
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

            <span className="uk-position-center uk-margin-xlarge-left uk-margin-small-top uk-animation-fade">
              <img
                src={images.decor01}
                alt="decoration01"
                className="uk-margin-large-left"
                style={{ height: "270px" }}

              />
            </span>
            <div className="uk-flex uk-animation-slide-right-small uk-flex-right uk-margin-large-right">
              <img
                src={images.profile}
                alt="profile"
                style={{ height: "730px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
