import React from "react";

const Navbar = () => {
  return (
    <div className="uk-section-light uk-preserve-color">
      <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">
        
        <nav className="uk-navbar-container uk-navbar-center">
         
          <div className="uk-navbar-left">
            <h4>LOGO</h4>
          </div>
         
          <div className="uk-container uk-container-expand">
            <div uk-navbar>
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a href="#Action">Active</a>
                </li>
                <li>
                  <a href="#Action">Parent</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#Action">Active</a>
                      </li>
                      <li>
                        <a href="#Action">Item</a>
                      </li>
                      <li>
                        <a href="#Action">Item</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#Action">Item</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
