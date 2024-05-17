import React, { useState } from "react";
import "./login.scss";
import loginbook from "../../assets/images/login-book.png";
import google from "../../assets/images/google-img.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/actions/authAction";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const authError = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const loginResponse = useSelector((state) => state.auth.loginResponse);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(login(formData, navigate)); // Capture the response here
      toast.success("login successfull"); // Display the message from the response
    } catch (error) {
      toast.error("Login failed");
    }
  };
  return (
    <div className="login-wrapper">
       <ToastContainer />
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8">
            <div className="login-img">
              <img src={loginbook} alt="" className="float" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="login-form">
              <h2>Login to your account</h2>
              {authError && <div className="error-message">{authError}</div>}
              <form onSubmit={onSubmit}>
                <div class="form-group row">
                  <label for="input2" class="col-sm-12 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-12">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      value={email}
                      onChange={onChange}
                      id="input2"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="input3" class="col-sm-12 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <button type="submit" className="login-btn">
                  Login
                </button>
                <p>or</p>
                <button className="login-with-google">
                  <img src={google} alt="" />
                  <p>Sign Up with Google</p>
                </button>
              </form>
            </div>
            <div className="sign-in-wrap">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
