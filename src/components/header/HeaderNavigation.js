import { useState } from "react";
import siteLogo from "../../assets/icon/site_logo.png";
import { Button } from "../common/Button";

export const HeaderNavigation = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <nav className="header-nav">
      <ul className="menu">
        <li className="show-mobile">
          <button
            onClick={() => {
              setBurgerMenuOpen(true);
            }}
            className="hamburger-btn"
          >
            <i className="icon-menu" />
          </button>
        </li>
        <li className="hide-mobile">
          <a href="#">Home</a>
        </li>
        <li className="hide-mobile">
          <a href="#">About</a>
        </li>
        <li className="hide-mobile">
          <a href="#">Features</a>
        </li>
      </ul>

      <div className="site-logo">
        <a href="#">
          <img src={siteLogo} alt="Logo" />
        </a>
      </div>

      <ul className="menu">
        <li className="hide-mobile">
          <a href="#">Screenshot</a>
        </li>
        <li className="hide-mobile">
          <a href="#">Blog</a>
        </li>
        <li>
          <Button>Download</Button>
        </li>
      </ul>

      {burgerMenuOpen && (
        <div className="burger-menu">
          <button
            onClick={() => {
              setBurgerMenuOpen(false);
            }}
            className="burger-menu-close"
          >
            x
          </button>
          <div className="site-logo">
            <a href="#">
              <img src={siteLogo} alt="Logo" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Screenshot</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
