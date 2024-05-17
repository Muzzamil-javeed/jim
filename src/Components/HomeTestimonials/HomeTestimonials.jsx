import React, { useRef, useState } from "react";
import "./hometestimonials.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import testiomanialpic from "../../assets/images/testimonial-person.png";

const HomeTestimonials = () => {
    return (
        <div className="testimonials-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-head">
                            <h4>Testimonials</h4>
                        </div>
                    </div>
                </div>
                <Swiper

                    rewind={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={10}


                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="testimonial-wrap">
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={testiomanialpic} alt="person" />
                                    <p>
                                        “ Auteur is a monthly book review
                                        publication distributed to 400,000 avid
                                        readers through subscribing bookstores &
                                        public libraries.”
                                    </p>
                                </div>
                                <div className="testimonial-name">
                                    <h4>Vladimir Nabokov</h4>
                                    <p>Reporter</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrap">
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={testiomanialpic} alt="person" />
                                    <p>
                                        “It was a dark night, with only occasional
                                        scattered lights, glittering like stars on the
                                        plain. It flashed upon me suddenly: they
                                        were going to shoot me!”
                                    </p>
                                </div>
                                <div className="testimonial-name">
                                    <h4>Savanna Walker</h4>
                                    <p>/ Reporter</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrap">
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={testiomanialpic} alt="person" />
                                    <p>
                                        “It was a dark night, with only occasional
                                        scattered lights, glittering like stars on the
                                        plain. It flashed upon me suddenly: they
                                        were going to shoot me!”
                                    </p>
                                </div>
                                <div className="testimonial-name">
                                    <h4>Savanna Walker</h4>
                                    <p>/ Reporter</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeTestimonials;
