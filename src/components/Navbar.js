import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useHistory, useLocation } from "react-router-dom";
function Navbar(props) {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    navigate.push("/login");
  }, [navigate]);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      {pathname === "/login" ? (
        <div>{props.children}</div>
      ) : (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                CovidCheckup
                <i class="fab fa-typo3" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Почетна
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/novosti"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Новости
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/calendar"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Календар
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Прекини сесија
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {props.children}
        </>
      )}
    </>
  );
}

export default Navbar;
