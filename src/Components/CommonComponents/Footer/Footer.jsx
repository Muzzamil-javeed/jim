import React from "react";
import "./footer.scss";
import logoft from "../../../assets/images/logo.png";
import footerbottomimg from "../../../assets/images/footer-bottom-img.png";
import footerlogo from "../../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

import fb from "../../../assets/images/facebook.png";
import instaGram from "../../../assets/images/insta.png";
import linkdin from "../../../assets/images/link.png";
import youTube from "../../../assets/images/youtube.png";

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="container-fluid">
                    <div className="row footer-content">
                        <div className="col-lg-5">
                            <div className="footer-logo-wrapper">
                                <img src={footerlogo} alt="logo" />
                            </div>
                            <div className="footer-text">
                                <p>
                                    Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                                <div className="footer-social-icons">
                                    <a href="#"> <img src={fb} alt="" /></a>
                                    <a href="#"> <img src={instaGram} alt="" /></a>
                                    <a href="#"> <img src={linkdin} alt="" /></a>
                                    <a href="#"> <img src={youTube} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footerLinks">
                                <h6>Main Links</h6>
                                <ul>
                                    <li>
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="#">About the author</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Books</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footerLinks">
                                <h6>Main Links</h6>
                                <ul>
                                    <li>
                                        <Link to="#">Order Tracking</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Report</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Refund</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms & conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footerLinks">
                                <h6>Get in Touch With Us</h6>
                                <ul>
                                    <li>
                                        <Link to="#"><i class="fa fa-map-marker"></i> 832  Thompson Drive, San Fransisco CA 94107, United States</Link>
                                    </li>
                                    <li>
                                        <a href="tel:+123 345123 556"> <i class="fa fa-phone"></i> +123 345123 556</a>
                                    </li>
                                    <li>
                                        <a href="mailto:support@bookland.id"> <i class="fa fa-envelope"></i> support@bookland.id</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="footer-content">


                                <div className="footersocial-icons">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div> */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-12">
                            <div className="footer-bottom-content">
                                <p className="text-center">Jim West  -   © 2024 All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
