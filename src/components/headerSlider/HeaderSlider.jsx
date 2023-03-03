import React from "react";
import "./headerSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import Slide1 from "../../images/eko-slide1.jpg";
import Slide2 from "../../images/eko-slide4.jpg";
import Slide3 from "../../images/eko-slide3.jpg" */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { useState } from "react"; */
import { sliderImg } from "../../../Images";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

/* const images = [
  { id: 1, url: Slide1 },
  { id: 2, url: Slide2 },
  { id: 3, url: Slide3 },
]; */
const HeaderSlider = () => {
  /* const [sliderNumber, setSlideNumber] = useState(0);
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 2 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 2 ? 0 : sliderNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }; */
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="hSliderConatiner">
      <div className="hSlider">
        {/* <FontAwesomeIcon
          icon={faCircleArrowLeft}
          onClick={() => handleMove("l")}
          className="hSliderIcon1"
        /> */}
        <div className="hSliderWrapper">
          {/* <img src={images[sliderNumber].url} alt="" /> */}
          <Slider {...settings}>
            <div className="hSliderItem">
              <img src={sliderImg[0]} alt="" />
            </div>
            <div className="hSliderItem">
              <img src={sliderImg[1]} alt="" />
            </div>
            <div className="hSliderItem">
              <img src={sliderImg[2]} alt="" />
            </div>
          </Slider>
        </div>
        {/* <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => handleMove("r")}
          className="hSliderIcon2"
        /> */}
      </div>
    </div>
  );
};

export default HeaderSlider;
