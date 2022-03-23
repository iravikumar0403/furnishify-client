import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../context/filter-context";
import { useAuth } from "../context/auth-context";
import logo from "../assets/furnishify.png";
import { logout } from "../services";
import { useProducts } from "../context/product-context";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { dispatch: filterDispatch } = useFilter();
  const { cart, wishlist } = useProducts();
  const { pathname } = useLocation();
  const { user, dispatch: authDispatch } = useAuth();

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
        <div className="nav-logo">
          <Link to="/">
            <img loading="lazy" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-menu-item mx-1">
            <Link to="products">Shop Now</Link>
          </li>
        </ul>
      </div>
      <div className="nav-section right">
        <ul className="nav-menu">
          <div className="input-icon mr-1">
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
              <li className="nav-menu-item mx-1">
                <span className="badge-container">
                  <Link to="wishlist">
                    <i className="fs-2 fa-solid fa-heart"></i>
                    <span className="badge top right bg-primary text-light">
                      {wishlist.length}
                    </span>
                  </Link>
                </span>
              </li>
              <li className="nav-menu-item mx-1">
                <span className="badge-container">
                  <Link to="cart">
                    <i className="fs-2 fa fa-cart-shopping"></i>
                    <span className="badge top right bg-primary text-light">
                      {cart.length}
                    </span>
                  </Link>
                </span>
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
                  <li className="dropdown-item">
                    <Link to="account">Account</Link>
                  </li>
                  <li className="dropdown-item" onClick={handleLogoutClick}>
                    Logout
                  </li>
                </ul>
              </div>
            </Fragment>
          ) : (
            <li className="nav-menu-item mx-1">
              <button
                className="btn primary"
                onClick={() =>
                  navigate("/login", { state: { from: pathname } })
                }
              >
                Login
              </button>
            </li>
          )}
        </ul>
        <div className="nav-menu-resp">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
