import React from "react";

import { images } from "../../constants";

const DesignWeb = () => {
  return (
    <>
      <span className="uk-position-absolute uk-margin-xlarge-top uk-margin-medium-left ">
        <img
          src={images.decor02}
          alt="decor02"
          style={{ height: "110px" }}
          className="uk-margin-small-top"
        />
      </span>
      <div
        className="uk-padding-large"
        style={{ color: "#fff", background: "#1C2A3D" }}
      >
        <div className="uk-flex uk-flex-between uk-margin-small-bottom uk-margin-small-top">
          <div className="uk-width-3-5 uk-animation-slide-left-small">
            <h1 className="uk-text-bold" style={{ color: "#fff" }}>
              Design Website
            </h1>
          </div>
          <div className="uk-width-1-4 uk-animation-slide-right-small">
            <span className="uk-align-right">
              <p>Tools</p>
              <span>
                <img
                  src={images.figma}
                  alt="figma"
                  width="35px"
                  className="uk-margin-small-right"
                />
                <img
                  src={images.ai}
                  alt="figma"
                  width="40px"
                  className="uk-margin-small-right"
                />
                <img src={images.photoshop} alt="figma" width="40px" />
              </span>
            </span>
          </div>
        </div>

        <div className="uk-margin-small-top uk-transition-toggle">
          <img
            src={images.designweb01}
            alt="designweb01"
            className="uk-transition-scale-down uk-transition-opaque"
          />
        </div>

        <div className="uk-margin-medium-top uk-transition-toggle">
          <img
            src={images.designweb02}
            alt="designweb02"
            className="uk-transition-scale-down uk-transition-opaque"
          />
        </div>

        <div className="uk-background-default uk-padding-large uk-margin-medium-top uk-margin-xlarge-bottom uk-inline-clip uk-transition-toggle">
          <img
            src={images.designweb03}
            alt="designweb03"
            className="uk-transition-scale-down uk-transition-opaque"
          />
          <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default uk-text-center">
                <a href="https://bdms.co.id/" className="uk-h4 uk-margin-remove">Go to Website</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default DesignWeb;
