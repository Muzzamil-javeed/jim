import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';

import wholeBook from "../../assets/images/whole-book.png";

import gmo1 from "../../assets/images/gmo1.png";
import gmo2 from "../../assets/images/gmo2.png";
import gmo3 from "../../assets/images/gmo3.png";
import gmo4 from "../../assets/images/gmo4.png";
import gmo5 from "../../assets/images/gmo5.png";
import gmo6 from "../../assets/images/gmo6.png";

import "./jimbestselling.scss";

const JimBestSelling = () => {
    const BookContent = [
        {
            id: 1,
            img: gmo1,
            title: "Take Out Tango",
            content: "SPORTS, DRAMA",
            star: 4,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 2,
            img: gmo2,
            title: "The Missadventure of..",
            content: "ADVANTURE, SURVIVAL",
            star: 3.5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 3,
            img: gmo3,
            title: "Seconds [PART 1]",
            content: "THRILLE, DRAMA, HORROR",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 4,
            img: gmo4,
            title: "The Missadventure of..",
            content: "ADVANTURE, SURVIVAL",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 5,
            img: gmo5,
            title: "Battle Drive",
            content: "THRILLE, DRAMA, HORROR",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 6,
            img: gmo6,
            title: "Take Out Tango",
            content: "THRILLE, DRAMA, HORROR",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 7,
            img: gmo1,
            title: "Take Out Tango",
            content: "SPORTS, DRAMA",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
        {
            id: 8,
            img: gmo2,
            title: "Take Out Tango",
            content: "SPORTS, DRAMA",
            star: 5,
            price: "$8.99",
            author: "Scott Smith",
        },
    ];
    return (
        <div className="bestsellingbooks-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="pell-books">
                            <img src={wholeBook} alt="" className="float" />
                        </div>
                    </div>
                </div>
                <div className="row sellbooks">
                    <div className="col-lg-12">
                        <div className="book-selling-wrapper">
                            <div>
                                <h6>Books on Sale</h6>
                            </div>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    425: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 50,
                                    },
                                }}
                                rewind={true}
                                navigation={true}
                                className="mySwiper"
                            >
                                {BookContent.map((book) => (
                                    <SwiperSlide>
                                        <div className="book-wrapper" key={book.id}>
                                            <div className="book-img">
                                                <img src={book.img} alt={book.title} />
                                            </div>
                                            <div className="book-content">
                                                <h4>{book.title}</h4>
                                                <h5>{book.content}</h5>
                                                <div className="rate-price">
                                                    <div>
                                                        <i class="fa fa-star"> $6.5</i>
                                                    </div>
                                                    <div>
                                                        <h4>$56.4 <span><strike>$98.4</strike></span></h4>
                                                    </div>

                                                </div>
                                                {/* <div className="book-star-wrapper">
                                                    {[...Array(5)].map((_, index) => (
                                                        <i
                                                            key={index}
                                                            className={`fa fa-star ${index < book.star ? "star" : "star-o"
                                                                }`}
                                                        ></i>
                                                    ))}
                                                </div> */}
                                                <p>{book.price}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JimBestSelling;
