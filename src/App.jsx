import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="outer-container">
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo">
            <img src="./logo.svg" alt="logo" className="header__logoImage" />
            <h1 className="header__logoText">Habbits</h1>
          </div>
          <ul className="header__list">
            <li className="header__listItem">Home</li>
            <li className="header__listItem">App</li>
            <li className="header__listItem">About Us</li>
          </ul>
        </nav>
      </header>

      <Home />
    </div>
  );
}

export default App;
