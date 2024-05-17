import React from "react";
import "./about.scss";
import aboutbannerimg from "../../assets/images/about-banner-book.png";
import middlesec from "../../assets/images/bef-book.png";
import scottabout from "../../assets/images/scott-ab.png";
import Header from "../../Components/CommonComponents/Header/Header";
import ScottBestSelling from "../../Components/ScottBestSelling/ScottBestSelling";
import GalleryHome from "../../Components/GalleryHome/GalleryHome";
import HomeTestimonials from "../../Components/HomeTestimonials/HomeTestimonials";
import SubscribeFormHome from "../../Components/SubscribeFormHome/SubscribeFormHome";
import BlogsHome from "../../Components/BlogsHome/BlogsHome";
import Footer from "../../Components/CommonComponents/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />

      <section className="scott-best-selling">
        <ScottBestSelling />
      </section>
      <section className="gallery-about">
        <GalleryHome />
      </section>

      <section className="blogs-about">
        <BlogsHome />
      </section>
      <section className="subscribe-form-about">
        <SubscribeFormHome />
      </section>
      <Footer />
    </>
  );
};

export default About;
