import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "@assets/logo.svg";
import Cart from "@components/Cart/Cart";
import iconCart from "@assets/icon-cart.svg";
import avatar from "@assets/image-avatar.png";
import iconMenu from "@assets/icon-menu.svg";
import iconClose from "@assets/icon-close.svg";

import {useCart} from "@/hooks/useCart";
import "./Navbar.scss";

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showCart = () => setCart(!cart);

  const showSidebar = () => setSidebar(!sidebar);

  const {itemCount} = useCart();

  return (
    <>
      {cart && <Cart />}
      {sidebar && <div className="backdrop" onClick={showSidebar} />}
      <nav className={sidebar === true ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-menu">
          <li className="close-icon" onClick={showSidebar}>
            <img alt="Close Menu" src={iconClose} />
          </li>
          <li className="sidebar-menu-item">
            <Link to="/collections" onClick={showSidebar}>
              Collections
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/men" onClick={showSidebar}>
              Men
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/women" onClick={showSidebar}>
              Women
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/about" onClick={showSidebar}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <header>
        <div className="left">
          <div className="sidebar-toggle" onClick={showSidebar}>
            <img alt="Icon Menu" src={iconMenu} />
          </div>
          <Link className="logo" to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="right">
          {itemCount > 0 && (
            <span className="icon-cart-quantity" onClick={showCart}>
              {itemCount}
            </span>
          )}
          <img alt="Cart" className="cart-icon" src={iconCart} onClick={showCart} />
          <img alt="My Profile" className="avatar" src={avatar} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
