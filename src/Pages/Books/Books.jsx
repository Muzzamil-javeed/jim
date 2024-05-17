import React, { useState, useEffect } from "react";
import "./books.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../../store/actions/userInfoAction";
import bookimage1 from "../../assets/images/book3.png";
import Header from "../../Components/CommonComponents/Header/Header";
import GalleryHome from "../../Components/GalleryHome/GalleryHome";
import HomeTestimonials from "../../Components/HomeTestimonials/HomeTestimonials";
import BlogsHome from "../../Components/BlogsHome/BlogsHome";
import Footer from "../../Components/CommonComponents/Footer/Footer";

const Books = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.userInfo);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    console.log(user)

    const booksell = [
        {
            id: 1,
            title: "Interrogation",
            tag: "E-Book",
            imgSrc: bookimage1,
            description:
                "Mitchell Adams, a confident Ph.D. social worker in St. Louis, has his life shattered when his girlfriend is murdered, and he becomes the prime suspect. The killer may be one of his clients in therapy and Mitch must navigate a maze of suspects from his practice.",
            wittenby: "Scott Miller",
            publisher: "Printarea Studios",
            year: "2019",
            rating: "4.0",
            reviews: "235",
            insertPrice: "$ 54.78",
            delPrice: "$70.00"
        },

        {
            id: 2,
            title: "Interrogation",
            tag: "E-Book",
            imgSrc: bookimage1,
            description:
                "Mitchell Adams, a confident Ph.D. social worker in St. Louis, has his life shattered when his girlfriend is murdered, and he becomes the prime suspect. The killer may be one of his clients in therapy and Mitch must navigate a maze of suspects from his practice.",
            wittenby: "Scott Miller",
            publisher: "Printarea Studios",
            year: "2019",
            rating: "4.0",
            reviews: "235",
            insertPrice: "$ 54.78",
            delPrice: "$70.00"
        },

        {
            id: 3,
            title: "Interrogation",
            tag: "E-Book",
            imgSrc: bookimage1,
            description:
                "Mitchell Adams, a confident Ph.D. social worker in St. Louis, has his life shattered when his girlfriend is murdered, and he becomes the prime suspect. The killer may be one of his clients in therapy and Mitch must navigate a maze of suspects from his practice.",
            wittenby: "Scott Miller",
            publisher: "Printarea Studios",
            year: "2019",
            rating: "4.0",
            reviews: "235",
            insertPrice: "$ 54.78",
            delPrice: "$70.00"
        },

    ];
    return (
        <>
            <Header />
            <div className="about-banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-banner">
                                <h3>Get The Book You Love</h3>
                                <h2>Scott Miller Books</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="books-containing-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {booksell.map((item) => {
                                return (
                                    <div className="book-info">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="book-info-img">
                                                    <img src={item.imgSrc} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="book-tags">
                                                    <p>{item.tag}</p>
                                                </div>
                                                <div className="book-info-content">
                                                    <h3>{item.title}</h3>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="book-bottom-desc">
                                                    <div>
                                                        <h4>Written By:</h4>
                                                        <p>{item.wittenby}</p>
                                                    </div>
                                                    <div>
                                                        <h4>Publisher</h4>
                                                        <p>{item.publisher}</p>
                                                    </div>
                                                    <div>
                                                        <h4>Year</h4>
                                                        <p>{item.year}</p>
                                                    </div>
                                                    <div className="stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <div className="rating">
                                                        <p>{item.rating}</p>
                                                        <span> {item.reviews} Reviews</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="book-info-right">
                                                    <button className="promo">See 2+ promos</button>
                                                    <div className="price-cart-wrapper">
                                                        <p>
                                                            {" "}
                                                            <ins>{item.insertPrice}</ins> <del>{item.delPrice}</del>
                                                        </p>
                                                        <div className="cart-fav-wrap">
                                                            <button className="add-to-cart">Add to Cart</button>
                                                            <button className="add-to-fav">
                                                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery-about">
                <GalleryHome />
            </section>
            <section className="about-testimonial">
                <HomeTestimonials />
            </section>
            <section className="blogs-about">
                <BlogsHome />
            </section>

            <Footer />
        </>
    );
};

export default Books;
