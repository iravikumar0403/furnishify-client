import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-context";
import { useAuth } from "../context/auth-context";
import logo from "../assets/furnishify.png";
import { logout } from "../services";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { dispatch: filterDispatch } = useFilter();
  const {
    state: { user },
    dispatch: authDispatch,
  } = useAuth();

  useEffect(() => {
    const id = setTimeout(() => {
      filterDispatch({
        type: "SEARCH",
        payload: query,
      });
    }, 500);

    return () => clearTimeout(id);
  }, [filterDispatch, query]);

  const handleLogoutClick = () => {
    setIsOpen(false);
    logout(authDispatch);
  };

  return (
    <nav>
      <div className="nav-section left">
        <Link to="/">
          <div className="nav-logo">
            <img loading="lazy" src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="nav-menu">
          <Link to="/">
            <li className="nav-menu-item mx-1">Home</li>
          </Link>
          <Link to="products">
            <li className="nav-menu-item mx-1">Shop Now</li>
          </Link>
        </ul>
      </div>
      <div className="nav-section right">
        <ul className="nav-menu">
          <div className="input-icon">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn icon-only text-light">
              <i className="fa fa-search"></i>
            </button>
          </div>
          {user ? (
            <Fragment>
              <Link to="wishlist">
                <li className="nav-menu-item mx-1">
                  <div className="badge-container">
                    <i className="fs-2 fa-solid fa-heart"></i>
                    <div className="badge top right bg-primary">2</div>
                  </div>
                </li>
              </Link>
              <Link to="cart">
                <li className="nav-menu-item mx-1">
                  <div className="badge-container">
                    <i className="fs-2 fa fa-cart-shopping"></i>
                    <div className="badge top right bg-primary">5</div>
                  </div>
                </li>
              </Link>
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
                  <Link to="account">
                    <li className="dropdown-item">Account</li>
                  </Link>
                  <li className="dropdown-item" onClick={handleLogoutClick}>
                    Logout
                  </li>
                </ul>
              </div>
            </Fragment>
          ) : (
            <Link to="login">
              <li className="nav-menu-item mx-1">
                <button className="btn primary">Login</button>
              </li>
            </Link>
          )}
        </ul>
        <div className="nav-menu-resp">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
