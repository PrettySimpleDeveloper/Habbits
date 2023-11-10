import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./features/Navigation/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";

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
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
