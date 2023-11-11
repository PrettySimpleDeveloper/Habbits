import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./features/navigation/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Application from "./pages/Application";

function App() {
  return (
    <div className="outer-container">
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="app" element={<Application />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
