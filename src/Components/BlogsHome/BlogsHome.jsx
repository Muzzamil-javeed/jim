import React from "react";
import "./blogshome.scss";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const BlogsHome = () => {
    const BlogContent=[
        {
            id: 1,
            image: blog1,
            title: "What books you should read in 2020?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
            },
            {
            id: 2,
            image: blog2,
            title: "What books you should read in 2020?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
            },
            {
            id: 3,
            image: blog3,
            title: "What books you should read in 2020?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
        }
    ]
  return (
    <div className="blogshome-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blogshome-head">
              <h4>Blog</h4>
              <h2>Blogs & Articles</h2>
              <p>
                Want to know more? Check out Scott’s blog for everything from
                upcoming releases, <br /> shenanigans, updates, Scott’s
                thoughts, and more!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            {
                BlogContent.map((blog, index) => {
                    return (
                        <div className="col-lg-4" key={index}>
                            <div className="blog-card">
                                <div className="blog-card-img">
                                    <img
                                        src={blog.image}
                                        alt=""
                                    />
                                </div>
                                <div className="blog-card-head">
                                    <h4>{blog.title}</h4>
                                </div>
                                <div className="blog-card-content">
                                    <p>
                                        {blog.content}
                                    </p>
                                    <div className="btn-wrap">
                                        <a href="#" className="btn">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
          {/* <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-card-img">
                <img
                  src={blog1}
                  alt=""
                />
              </div>
              <div className="blog-card-head">
                <h4>What books you should read in 2020?</h4>
              </div>
              <div className="blog-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore...
                </p>
              <div className="btn-wrap">
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogsHome;
