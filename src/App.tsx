import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FaqPage from "./pages/FaqPage/FaqPage";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/faq" element={<FaqPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
