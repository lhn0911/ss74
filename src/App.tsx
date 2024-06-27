import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Show from "./components/Main/Show";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
export default function App() {
  return (
    <Router>
      <div>
        {/* <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/product/:id" element={<Show />} />
        </Routes>
        <Footer /> */}
        {/* <Login></Login> */}
        <Register></Register>
      </div>
    </Router>
  );
}
