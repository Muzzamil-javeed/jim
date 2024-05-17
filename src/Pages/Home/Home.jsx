import React from "react";
import Header from "../../Components/CommonComponents/Header/Header";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import AboutJim from "../../Components/AboutJim/AboutJim";
import JimBestSelling from "../../Components/JimBestSelling/JimBestSelling";
import MitchAdam from "../../Components/MitchAdam/MitchAdam";
import GalleryHome from "../../Components/GalleryHome/GalleryHome";
import BlogsHome from "../../Components/BlogsHome/BlogsHome";
import Footer from "../../Components/CommonComponents/Footer/Footer";
import HomeTestimonials from "../../Components/HomeTestimonials/HomeTestimonials";

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className="banner">
                <HomeBanner />
            </div>
            <div className="home-about-section">
                <AboutJim />
            </div>
            <div className="scott-best-selling">
                <JimBestSelling />
            </div>
            <div className="mitchadam-series">
                <MitchAdam />
            </div>
            <div className="testimonial">
                <HomeTestimonials />
            </div>
            <div className="gallery-home">
                <GalleryHome />
            </div>

            {/* <div className="blogs-home">
        <BlogsHome />
      </div>
      <Footer /> */}
        </div>
    );
};

export default Home;
