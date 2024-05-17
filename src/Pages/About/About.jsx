import React from "react";
import "./about.scss";
import aboutbannerimg from "../../assets/images/about-banner-book.png";
import middlesec from "../../assets/images/bef-book.png";
import scottabout from "../../assets/images/scott-ab.png";
import Header from "../../Components/CommonComponents/Header/Header";
import JimBestSelling from "../../Components/JimBestSelling/JimBestSelling";
import GalleryHome from "../../Components/GalleryHome/GalleryHome";
import HomeTestimonials from "../../Components/HomeTestimonials/HomeTestimonials";
import BlogsHome from "../../Components/BlogsHome/BlogsHome";
import Footer from "../../Components/CommonComponents/Footer/Footer";

const About = () => {
    return (
        <>
            <Header />

            <section className="scott-best-selling">
                <JimBestSelling />
            </section>
            <section className="gallery-about">
                <GalleryHome />
            </section>

            <section className="blogs-about">
                <BlogsHome />
            </section>
            <Footer />
        </>
    );
};

export default About;
