import "./Navbar.scss";

import {Link} from "react-router-dom";
import iconCart from "@assets/icon-cart.svg";
import avatar from "@assets/image-avatar.png";
import logo from "@assets/logo.svg";
import iconMenu from "@assets/icon-menu.svg";
import iconClose from "@assets/icon-close.svg";
import Cart from "@components/Cart/Cart";

import {useVisibility} from "@/hooks/useVisibility";
import {useCart} from "@/hooks/useCart";

const Navbar = () => {
  const cart = useVisibility();
  const sidebar = useVisibility();
  const {itemCount} = useCart();

  return (
    <>
      {cart.isVisible && <Cart />}
      {sidebar.isVisible && (
        <div className="sidebar" id="sidebar">
          <div className="sidebar-menu">
            <div className="close-icon" onClick={sidebar.toggleVisibility}>
              <img alt="Close Menu" src={iconClose} />
            </div>
            <div className="sidebar-menu-item">
              <Link to="/collections" onClick={sidebar.toggleVisibility}>
                Collections
              </Link>
            </div>
            <div className="sidebar-menu-item">
              <Link to="/men" onClick={sidebar.toggleVisibility}>
                Men
              </Link>
            </div>
            <div className="sidebar-menu-item">
              <Link to="/women" onClick={sidebar.toggleVisibility}>
                Women
              </Link>
            </div>
            <div className="sidebar-menu-item">
              <Link to="/about" onClick={sidebar.toggleVisibility}>
                About
              </Link>
            </div>
            <div className="sidebar-menu-item">
              <Link to="/contact" onClick={sidebar.toggleVisibility}>
                Contact
              </Link>
            </div>
          </div>
          <div className="backdrop" />
        </div>
      )}
      <header>
        <div className="left">
          <div className="sidebar-toggle" data-toggle="sidebar" onClick={sidebar.toggleVisibility}>
            <img alt="Icon Menu" src={iconMenu} />
          </div>
          <Link className="logo" to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="right">
          {itemCount > 0 && <span className="icon-cart-quantity">{itemCount}</span>}
          <img alt="Cart" src={iconCart} onClick={cart.toggleVisibility} />
          <img alt="My Profile" className="avatar" src={avatar} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
