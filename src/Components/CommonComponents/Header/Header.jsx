import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/jin-logo.png";
import Button from "../LogoutBtn/Button";

const Header = () => {
    const navbardata = [
        {
            id: 1,
            title: "Home",
            link: "/home",
        },
        {
            id: 2,
            title: "About The Author",
            link: "/about",
        },
        {
            id: 3,
            title: "Books",
            link: "/books",
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact",
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("ovr-hiddn");
        document.body.classList.toggle("overflw");
    };
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("ovr-hiddn");
            document.body.classList.remove("overflw");
        };
    }, []);

    return (
        <div className="headers-wrapper">
            <div className="upper-header-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className={`menu ${menuOpen ? "open" : ""}`}>
                                <ul>
                                    {navbardata.map((data) => (
                                        <li key={data.id}>
                                            <Link to={data.link}>{data.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mobile-view">
                                    <div className="accounts-wrap-cart">
                                        <div className="accounts-wrap">
                                            <Button />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="accounts-wrap-cart">
                                <div className="cart-wrap">
                                    <Link>
                                        <i class="fa fa-search"></i>
                                    </Link>
                                </div>
                                <div className="cart-wrap">
                                    <Link>
                                        <i className="fa fa-shopping-cart"></i>
                                    </Link>
                                </div>
                                <div className="accounts-wrap">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper">
                <div className="container">
                    <div
                        className={`menu-Bar ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`menu ${menuOpen ? "open" : ""}`}>
                                <ul>
                                    {navbardata.map((data) => (
                                        <li key={data.id}>
                                            <Link to={data.link}>{data.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mobile-view">
                                    <div className="accounts-wrap-cart">
                                        <div className="accounts-wrap">
                                            {/* <div>
                        <i className="fa fa-user user-icon"></i>
                        <Link to="/login">Login</Link>
                      </div>
                      <div>
                        <Link to="/register">Register</Link>
                      </div> */}
                                            <Button />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
