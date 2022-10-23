import React from "react";

import { images } from "../../constants";

const ProductDesign = () => {
  return (
    <>
        <span className="uk-position-absolute uk-margin-large-top uk-margin-medium-left ">
            <img src={images.decor02} alt="decor02" style={{height: "110px"}}/>
        </span>
    <div
      className="uk-background-secondary uk-padding-large"
      style={{ color: "#fff" }}
    >
      <div className="uk-flex uk-flex-between uk-margin-small-bottom uk-margin-medium-top">
        <div className="uk-width-3-5 uk-animation-slide-left-small">
          <h1 className="uk-text-bold" style={{ color: "#fff" }}>
            Product Design
          </h1>
          <a href="https://digitaldesa.id/" style={{ color: "#fff" }}>www.digitaldesa.id</a>
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

      <div className="uk-margin-large-top uk-transition-toggle">
        <img
          src={images.product01}
          alt="product01"
          className="uk-transition-scale-down uk-transition-opaque"
        />
      </div>

      <div className=" uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" uk-grid>
        <div className="uk-width-2xlarge uk-margin-small-right uk-transition-toggle">
          <img
            src={images.product02}
            alt="product02"
            className="uk-transition-scale-up uk-transition-opaque"
          />
        </div>
        <div className="uk-width-1-3 uk-transition-toggle">
          <img
            src={images.product03}
            alt="product03"
            className="uk-transition-scale-up uk-transition-opaque"
          />
        </div>
      </div>

      <div className="uk-background-default uk-padding-large uk-margin-medium-top uk-margin-xlarge-bottom uk-transition-toggle">
        <img
          src={images.product04}
          alt="product04"
          className="uk-transition-scale-down uk-transition-opaque"
        />
      </div>
    </div>
      </>
  );
};

export default ProductDesign;
