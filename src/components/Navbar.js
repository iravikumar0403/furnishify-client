import { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../context/filter-context";
import { useAuth } from "../context/auth-context";
import logo from "../assets/furnishify.png";
import { logout } from "../services";
import { useProducts } from "../context/product-context";
import { useTheme } from "../context/theme-context";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { searchQuery, dispatch: filterDispatch } = useFilter();
  const { cart, wishlist } = useProducts();
  const { pathname } = useLocation();
  const { user, dispatch: authDispatch } = useAuth();
  const dropdownRef = useRef();
  const { theme, toggleTheme } = useTheme();
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (pathname !== "/products") {
      setQuery("");
    }
  }, [pathname]);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const id = setTimeout(() => {
      filterDispatch({
        type: "SEARCH",
        payload: query,
      });
      if (pathname !== "/products" && query) navigate("/products");
    }, 500);

    return () => clearTimeout(id);
  }, [filterDispatch, navigate, pathname, query]);

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-menu-item mx-1">
            <NavLink to="products">Shop Now</NavLink>
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
            <button
              className={`btn icon-only ${
                theme === "dark" ? "text-light" : ""
              }`}
            >
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
              <div className="dropdown" ref={dropdownRef}>
                <button
                  className={`btn icon-only ${
                    theme === "dark" ? "text-light" : ""
                  }`}
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
          <li className="nav-menu-item mr-1" onClick={toggleTheme}>
            {theme === "dark" ? (
              <button
                className={`btn icon-only ${
                  theme === "dark" ? "text-light" : ""
                }`}
              >
                <BsFillSunFill className="fs-1" />
              </button>
            ) : (
              <button
                className={`btn icon-only ${
                  theme === "dark" ? "text-light" : ""
                }`}
              >
                <BsFillMoonFill className="fs-1" />
              </button>
            )}
          </li>
        </ul>
        <div className="nav-menu-resp">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
