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
            onClick={() => changeCategory("mens")}
            className="Navbar-links"
            to="/home"
          >
            HOME
          </NavLink>
        </li>
        <li className="Navbar-item">
          <NavLink
            onClick={() => changeCategory("womens")}
            className="Navbar-links"
            to="/home"
          >
            NITHITEX OFFER'S
          </NavLink>
        </li>
        <li className="Navbar-item">
          <NavLink
            onClick={() => changeCategory("kids")}
            className="Navbar-links"
            to="/home"
          >
            BECOME A SELLER
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
          <NavLink onClick={handleClose} className="Navbar-links" to="/cart">
            <i className="fas fa-shopping-cart icon"></i>
            <div>Cart</div>
          </NavLink>
        </li>
      </div>
      <NavLink onClick={handleClose} to="/cart">
        <i className="fas fa-shopping-cart icon-cart"></i>
      </NavLink>
    </nav>
  );
}
