import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import bannerside from "../../assets/images/cow-boy.png";
import bgbannerside from "../../assets/images/bg-cowboy.png";
import seepartner from "../../assets/images/seepartner.png";

import leftArrowImage from "../../assets/images/right-arrow.png";
import rightArrowImage from "../../assets/images/right-arrow.png";
// import rightArrowImage from "../../assets/right-arrow.png";
import "./homebanner.scss";


const HomeBanner = () => {
    return (
        <div className="homebanner-wrapper" >
            <div className="mainbanner" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                rewind={true}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[Navigation, Pagination]}

                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="slide-wrap">
                                        <div className="content-wrapper">
                                            <h1>
                                                <span>BEST SELLER</span>
                                                Jim West Books
                                            </h1>
                                            <h2>Think and Grow Rich</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            </p>
                                            <div className="row rates mt-5">
                                                <div className="col-md-4">
                                                    <h5>$9.5 <span> <strike>$12.0</strike> </span></h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4><span>20% OFF</span></h4>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <button className="buy-btn">Buy Now</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="buy-btn2">See Details</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="ourpart">Our Partner</h6>
                                                <img src={seepartner} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="slide-wrap">
                                        <div className="content-wrapper">
                                            <h1>
                                                <span>BEST SELLER</span>
                                                Jim West Books
                                            </h1>
                                            <h2>Think and Grow Rich</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            </p>
                                            <div className="row rates mt-5">
                                                <div className="col-md-4">
                                                    <h5>$9.5 <span> <strike>$12.0</strike> </span></h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4><span>20% OFF</span></h4>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <button className="buy-btn">Buy Now</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="buy-btn2">See Details</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="ourpart">Our Partner</h6>
                                                <img src={seepartner} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="slide-wrap">
                                        <div className="content-wrapper">
                                            <h1>
                                                <span>BEST SELLER</span>
                                                Jim West Books
                                            </h1>
                                            <h2>Think and Grow Rich</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            </p>
                                            <div className="row rates mt-5">
                                                <div className="col-md-4">
                                                    <h5>$9.5 <span> <strike>$12.0</strike> </span></h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4><span>20% OFF</span></h4>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <button className="buy-btn">Buy Now</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="buy-btn2">See Details</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h6 className="ourpart">Our Partner</h6>
                                                <img src={seepartner} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;
