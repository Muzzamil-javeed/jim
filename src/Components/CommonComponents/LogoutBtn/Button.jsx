import React, { useState } from "react";
import axios from "axios";
import "./button.scss";
import { Link, useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          const token = localStorage.getItem("token");
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          await axios.post(
            "https://stage642.devdesignbuild.com/api/auth/logout",
            null,
            config
          );
          localStorage.removeItem("token");
          navigate("/");
        } catch (error) {
          console.error("Logout error:", error);
        }
      };
  return (
    <>
      <div class="navigation" onClick={handleLogout}>
        <span class="button" href="">
          <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" />

          <div class="logout">LOGOUT</div>
        </span>
      </div>
    </>
  );
};

export default Button;
