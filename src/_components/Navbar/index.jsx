import "./index.css";
import {  useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const changeCategory = (category) => {
    setOpen(false);
  };
  return (
    <nav className="Navbar">
      <i
        onClick={() => setOpen((state) => !state)}
        className="fas fa-bars icon-menu"
      ></i>
      <div>
        <NavLink className="Navbar-logo" to="/" onClick={handleClose}>
         NithiTex
        </NavLink>
      </div>
      <div
        className={`Navbar-items Navbar-items-left ${!isOpen ? "hidden" : ""}`}
      >
        <li className="Navbar-item">
          <NavLink
            onClick={() => changeCategory("Home")}
            className="Navbar-links"
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="Navbar-item">
          <NavLink
            onClick={() => changeCategory("Nithitex Offer's")}
            className="Navbar-links"
            to="/Product"
          >
            Nithitex Offer's
          </NavLink>
        </li>
        <li className="Navbar-item">
          <NavLink
            onClick={() => changeCategory("Become a seller")}
            className="Navbar-links"s
            to="/home"
          >
            Become a seller
          </NavLink>
        </li>
      </div>
      <div className="flex-grow" />
      <div
        className={`Navbar-items Navbar-items-right ${!isOpen ? "hidden" : ""}`}
      >
        <li className="Navbar-item">
          <a
            className="Navbar-links"
            href="/"
            style={{ cursor: "not-allowed" }}
            onClick={handleClose}
          >
            <i className="fas fa-user icon"></i>
            <div>Profile</div>
          </a>
        </li>
        <li className="Navbar-item">
          <NavLink
            onClick={handleClose}
            className="Navbar-links"
            to="/wishlist"
          >
            <i className="far fa-heart navbar-heart icon"></i>
            <div>Wishlist</div>
          </NavLink>
        </li>
        <li className={`Navbar-item ${isOpen ? "opac" : ""}`}>
          <NavLink onClick={handleClose} className="Navbar-links" to="/Cart">
            <i className="fas fa-shopping-cart icon"></i>
            <div>Cart</div>
          </NavLink>
        </li>
      </div>
      <NavLink onClick={handleClose} to="/Cart">
        <i className="fas fa-shopping-cart icon-cart"></i>
      </NavLink>
    </nav>
  );
}
