import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <h1>Welcome to Cogniverse</h1>
        <p>Discover a World of High-Quality Courses at Unbeatable Prices</p>
      </div>
      <div className="container">
        <div className="left">
          <img
            src="src\assets\about.webp"
            alt="Your Image"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="right">
          <h1 className="r">Benefits About Online Learning Expertise</h1>
          <div className="card">
            <h2>Wide Range of Courses</h2>
            <p>
              Explore our extensive library of courses covering diverse topics
              such as programming, data science, business management, creative
              arts, and more. Whatever your passion or interest, we have
              something for everyone.
            </p>
          </div>
          <div className="card">
            <h2>Expert Instructors</h2>
            <p>
              Learn from industry experts and seasoned professionals who are
              passionate about sharing their knowledge and expertise. Our
              instructors bring real-world experience and insights to the
              virtual classroom, ensuring that you receive high-quality
              education.
            </p>
          </div>
          <div className="card">
            <h2>Flexible Learning Options</h2>
            <p>
              Study at your own pace and on your schedule. Whether you're a
              busy professional, a student, or a lifelong learner, our flexible
              learning options allow you to balance your education with your
              other commitments.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
