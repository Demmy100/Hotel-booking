import React from "react";
import "./about.css";
import aboutImage from "../../images/home-about.jpg";
const About = () => {
  return (
    <div className="about">
      <h1>
        WELCOME TO <span>EKO HOTELS & SUITES</span>
      </h1>
      <div className="aboutLine">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div className="aboutSection">
        <div className="aboutImgWrapper">
          <img src={aboutImage} alt="" className="aboutImg" />
        </div>
       <div className="aboutTextsContainer">
       <div className="aboutTexts">
          <h3>ABOUT US</h3>
          <h2>The Most Preferred Hotel in West Africa</h2>
          <p className="aboutDesc1">
            Eko Hotels & Suites is the most preferred hotel in West Africa, and
            it is all about the right mix! Located in the heart of Victoria
            Island, we offer our clients a perfect blend of business & leisure
            amenities with dining and recreational options delicately infused in
            one amazing space. We crown all these with services that meet the
            highest international standards.
          </p>
          <p className="aboutDesc2">
            {" "}
            Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just
            a 10-minute drive to the City Centre and only 45minutes away from
            the Airport.
          </p>
          <p className="aboutDesc3">
            {" "}
            Our hotels are designed for your comfort and convenience. Your
            security is our primary concern and you will find our customer care
            second to none.
          </p>
          <button>LEARN MORE</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About;
