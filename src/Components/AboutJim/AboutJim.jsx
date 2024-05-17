import React from "react";
import "./aboutjim.scss";
import scottmiller from "../../assets/images/home-scott-img.png";
import dots from "../../assets/images/dots.png";
import signImg from "../../assets/images/signature.png";
import { Link } from "react-router-dom";

const AboutScott = () => {
    return (
        <div className="aboutscott-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="dots-img ">
                            <img src={dots} alt="" className="float" />
                        </div>
                        <div className="scott-miller-img">
                            <img src={scottmiller} alt="" />
                        </div>
                        <div className="dots-img2">
                            <img src={dots} alt="" className="float" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-lg-7">
                        <div className="scott-miller-content">
                            <h4>About The Author</h4>
                            <h2>Jim West <span>was born in Texas, raised in a small town in the Texas panhandle, and continues to live in the great state of Texas.</span></h2>
                            <p>
                                Of all things one can say of him, it is that he is truly a Texan. Following several failed attempts at finishing his education after high school, he served in the U.S. Navy as a photographic intelligence analyst during the Vietnam War. Using the GI Bill, he returned to college, back in Texas, and completed his bachelor’s degree in business. After graduation, he joined the U.S. Air Force and began pilot training immediately following Officer Training School (OTS). Following his retirement from the armed services, he joined American Airlines and flew both domestic and international routes for over sixteen years. He retired as a captain in 2005 and began his next career, writing.
                            </p>
                            <div className="scott-btn-wrapper">
                                <Link to="#" className="btn">
                                    Learn More
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-8"></div>
                                <div className="col-md-4 col-4">
                                    <div className="sign-img">
                                        <img src={signImg} alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-1 col-0"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutScott;
