import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // false closes the menu
  const closeMobileMenu = () => setClick(false);
  // function to display button or remove depending on
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  // loads button only once so it does not reappear
  useEffect(() => {
    showButton();
  }, []);
  // when screen is re-sized button should be shown
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LOGO
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* hamburger menu, opens on click. */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* when clicked nav menu disappears */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {/* && (if true return => ...) */}
          {/* if btn--outline is not set it will use btn--primary because of function set above */}
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
