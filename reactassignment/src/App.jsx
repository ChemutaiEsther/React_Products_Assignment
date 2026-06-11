import { BrowserRouter,  Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import "./index.css";

import "./App.css";
import Products from "./Pages/Products.jsx";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };
  return (
   

  <BrowserRouter>
    <div className="app-container">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
   
  );
}

export default App;