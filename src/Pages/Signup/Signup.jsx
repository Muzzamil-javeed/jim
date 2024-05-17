import React,{useState} from "react";
import "./signup.scss";
import signupbook from "../../assets/images/signup-book.png";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/actions/authAction";
import google from "../../assets/images/google-img.png"
import cowBoy from "../../assets/images/cow-boy.png"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const authError = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { name, email, password, password_confirmation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await dispatch(signup(formData, navigate));
        console.log(res.data.message);
        toast.success(res.data.message);
      } catch (error) {
        toast.error("Sign up failed");
      }
    }
  };

  return (
    <div className="signup-wrapper">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="signup-head">
              <h3>Get Yourself Registered With</h3>
              <h2>JIM WEST BOOK</h2>
            </div>
            <div className="signup-img">
              <img src={cowBoy} alt="" className="float" />
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-lg-5">
            <div className="signup-form">
              <h2>Create your account</h2>
              {authError && (
                <div className="error-message">{authError}</div>
              )}
              <form onSubmit={onSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="name"
                    className="col-sm-12 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onChange}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="email"
                    className="col-sm-12 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="password"
                    className="col-sm-12 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="password_confirmation"
                    className="col-sm-12 col-form-label"
                  >
                    Confirm Password
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password_confirmation"
                      name="password_confirmation"
                      value={password_confirmation}
                      onChange={onChange}
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="agree-terms">
                  <input type="checkbox" />
                  <p>
                    I have read and agree to the{" "}
                    <Link to="#">Terms of Service</Link>
                  </p>
                </div>
                <button type="submit" className="signup-btn">
                  Sign Up
                </button>
                <p>or</p>
                <button className="signup-with-google">
                  <img src={google} alt="" />
                  <p>Sign Up with Google</p>
                </button>
              </form>
            </div>
            <div className="sign-in-wrap">
              <Link to="/">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
