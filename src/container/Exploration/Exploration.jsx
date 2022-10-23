import React from "react";

import { images } from "../../constants";

const Exploration = () => {
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
      <div className="uk-background-default uk-padding-large uk-margin-large-bottom">
        <div className="uk-width-3-5 uk-animation-slide-left-small uk-margin-large-bottom uk-margin-small-top">
          <h1 className="uk-text-bold">Exploration Design</h1>
        </div>

        <div className=" uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" style={{ height: 380 }} uk-grid>
          <div
            className="uk-width-2xlarge uk-overflow-hidden uk-margin-small-right uk-transition-toggle"
          >
            <img
              src={images.exploration01}
              alt="exploration01"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
          <div className="uk-width-1-3 uk-overflow-hidden uk-transition-toggle">
            <img
              src={images.exploration02}
              alt="exploration02"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
        </div>

        <div className=" uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" style={{ height: 380 }} uk-grid>
          <div
            className="uk-width-1-3 uk-overflow-hidden uk-margin-small-right uk-transition-toggle"
          >
            <img
              src={images.exploration03}
              alt="exploration03"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
          <div className="uk-width-2xlarge uk-overflow-hidden uk-transition-toggle">
            <img
              src={images.exploration04}
              alt="exploration04"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
        </div>

        <div className="uk-background-default uk-margin-medium-top uk-transition-toggle">
          <img
            src={images.exploration10}
            alt="exploration10"
            className="uk-transition-scale-down uk-transition-opaque"
          />
        </div>

        <div className="uk-background-default uk-margin-medium-top uk-transition-toggle">
          <img
            src={images.exploration05}
            alt="exploration05"
            className="uk-transition-scale-down uk-transition-opaque"
          />
        </div>

        <div className=" uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" style={{ height: 380 }} uk-grid>
          <div
            className="uk-width-2xlarge uk-overflow-hidden uk-margin-small-right uk-transition-toggle"
          >
            <img
              src={images.exploration06}
              alt="exploration06"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
          <div className="uk-width-1-3 uk-overflow-hidden uk-transition-toggle">
            <img
              src={images.exploration07}
              alt="exploration07"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
        </div>

        <div className=" uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" style={{height:380}} uk-grid>
          <div
            className="uk-width-1-3 uk-overflow-hidden uk-margin-small-right uk-transition-toggle"
          >
            <img
              src={images.exploration08}
              alt="exploration08"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
          <div className="uk-width-2xlarge uk-overflow-hidden uk-transition-toggle">
            <img
              src={images.exploration09}
              alt="exploration09"
              className="uk-transition-scale-up uk-transition-opaque"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Exploration;
