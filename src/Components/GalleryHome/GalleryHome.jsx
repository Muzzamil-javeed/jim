import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./galleryhome.scss";

import sliderbook1 from "../../assets/images/slider-book1.png";
import sliderbook2 from "../../assets/images/slider-book2.png";
import sliderbook3 from "../../assets/images/slider-book3.png";
import sliderbook4 from "../../assets/images/slider-book4.png";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const GalleryHome = () => {
    const GalleryImages = [
        {
            id: 1,
            image: sliderbook1,
        },
        {
            id: 2,
            image: sliderbook2,
        },
        {
            id: 3,
            image: sliderbook3,
        },
        {
            id: 4,
            image: sliderbook4,
        },
        {
            id: 5,
            image: sliderbook1,
        },
        {
            id: 6,
            image: sliderbook2,
        },
    ]
    return (
        <div className="galleryhome-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="galleryhome-head">
                        </div>
                        <Swiper
                             slidesPerView={6}
                             spaceBetween={10}
                             pagination={{
                                 clickable: true,
                             }}
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
                                     slidesPerView: 4,
                                     spaceBetween: 50,
                                 },
                             }}
                             rewind={true}
                             navigation={true}
                             modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                GalleryImages.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img src={item.image} />
                                        </SwiperSlide>
                                    );
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryHome;
