import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Books from "../Pages/Books/Books";
import { login } from '../../store/actions/authAction'; // Import the login function

export default function Navigation() {

  const userRole = {
    role: "client",
  };

  const isLoggedIn = () => {
    const user_found = localStorage.getItem("token");
    if (user_found) {
      return true;
    } else {
      return false;
    }
  };

  const isRouteAllowed = (role, path) => {
    // Define the allowed routes for each role
    const roleRoutes = {
      admin: [
        "/",
        "/signup",
        "/forgotpassword",
        "/dashboard",
        "/college",
      ],
      client: ["/", "/signup", "/home", "/about", "/books"],
    };

    return roleRoutes[role] && roleRoutes[role].includes(path);
  };

  const ProtectedRoute = ({ element, path }) => {
    return isLoggedIn() && isRouteAllowed(userRole.role, path) ? (
      element
    ) : (
      <Navigate to="/" replace state={{ from: path }} />
    );
  };
  const RedirectIfLoggedIn = ({ element }) => {
    return isLoggedIn() ? <Navigate to="/home" replace /> : element;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RedirectIfLoggedIn element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<RedirectIfLoggedIn element={<Signup />} />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} path="/home" />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute element={<About />} path="/about" />}
        />
        <Route
          path="books"
          element={<ProtectedRoute element={<Books />} path="/books" />}
        />
        {/* <Route
          path="/accounts"
          element={<ProtectedRoute element={<AccountsPage />} path="/accounts" />}
        /> */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}
