import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./features/Navigation/Navigation";
import "./App.scss";

function App() {
  return (
    <div className="outer-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
