// App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthState } from "./context/Auth/authState"; 
import RegistrationPage from "./components/RegistrationPage";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import { RecruitementPage } from "./components/RecruitementPage";
import AdmissionForm from "./components/AdmissionForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registerstudent" element={<RegistrationPage />} />
          <Route path="/loginstudent" element={<LoginPage />} />
          <Route path="/admissionform" element={<AdmissionForm />} />
          <Route path="/recruitment" element={<RecruitementPage />} />
        </Routes>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
