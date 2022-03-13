import { useState } from "react";
import logo from "../assets/furnishify.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-section left">
        <div className="nav-logo">
          <img loading="lazy" src={logo} alt="logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item mx-1">Home</li>
          <li className="nav-menu-item mx-1">Shop Now</li>
        </ul>
      </div>
      <div className="nav-section right">
        <ul className="nav-menu">
          <div className="input-icon">
            <input className="input" type="text" placeholder="Search" />
            <button className="btn icon-only text-light">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <li className="nav-menu-item mx-1">
            <div className="badge-container">
              <i className="fs-2 fa-solid fa-heart"></i>
              <div className="badge top right bg-primary">2</div>
            </div>
          </li>
          <li className="nav-menu-item mx-1">
            <div className="badge-container">
              <i className="fs-2 fa fa-cart-shopping"></i>
              <div className="badge top right bg-primary">5</div>
            </div>
          </li>
          <div className="dropdown">
            <button
              className="btn text-light icon-only"
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              <i className="fs-2 fa-solid fa-user"></i>
            </button>
            <ul
              className="dropdown-menu"
              style={isOpen ? { display: "block", right: 0 } : {}}
            >
              <li className="dropdown-item">Account</li>
              <li className="dropdown-item">Logout</li>
            </ul>
          </div>
        </ul>
        <div className="nav-menu-resp">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
