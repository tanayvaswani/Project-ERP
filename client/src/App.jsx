import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import Home from "./Home";
import LoginPage from "./LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
