import React from "react";

import { images } from "../../constants";

const Project = () => {
  return (
    <div
      className="uk-padding-large"
      style={{  background: "#F1F7FC" }}
    >
      <p className="uk-text-muted uk-text-bold uk-animation-slide-left-small">Juli 2022</p>
      <div className="uk-flex uk-flex-between uk-margin-small-bottom">
        <div className="uk-width-3-5 uk-animation-slide-left-small">
          <h2 className="uk-text-bold">PT. Bumi Makmur Mandiri Utama</h2>
          <p className="change-font">
            BUMA BRV (Bisa Ruang Vokasi) merupakan aplikasi LMS (Learning
            Management Sistem) yang betujuan untuk meningkatkan kualiatas
            kompetensi lulusan SMK/SMA sederajat agar sesuai dengan kebutuhan
            perusahaan sehingga tenaga kerja lulusan SMK/SMA sederajat mempu
            terserap dengan baik oleh pasar kerja.
          </p>
        </div>
        <div className="uk-width-1-4 uk-animation-slide-right-small">
          <span className="uk-align-right ">
            <p>Tools</p>
            <img src={images.figma} alt="figma" width="40px" />
          </span>
        </div>
      </div>

      <div className="uk-transition-toggle">
        <img src={images.project01} alt="project01" className="uk-transition-scale-down uk-transition-opaque"/>
      </div>

      <div className="uk-margin-large-top">
        <h2 className="uk-text-bold">Aplikasi BRV</h2>
      </div>

      <div className="uk-margin-xlarge-bottom uk-transition-toggle">
        <img src={images.project02} alt="project02" className="uk-transition-scale-down uk-transition-opaque"/>
      </div>
    </div>
  );
};

export default Project;
