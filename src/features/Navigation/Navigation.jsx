import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <>
      <header className="header container">
        <nav className="header__nav">
          <div className="logo__container">
            <Link to="/">
              <img src="./logo.svg" alt="logo" className="logo__image" />
            </Link>
            <Link to="/">
              <h1 className="logo__text">Habbits</h1>
            </Link>
          </div>
          <ul className="header__list">
            <Link className="header__link" to="/">
              <li className="header__listItem">Home</li>
            </Link>
            <Link className="header__link" to="/app">
              <li className="header__listItem">App</li>
            </Link>
            <Link className="header__link" to="/about">
              <li className="header__listItem">About Us</li>
            </Link>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navigation;
