import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../pages/HomePage/HomePage.module.css"  ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import achievement from "../image/achievement.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider(){
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.three_details_slider}>
          <img src={achievement} alt="images" />
          <h2>Diverse courses of choice</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            sodales non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className={styles.three_details_slider}>
          <img src={achievement} alt="images" />
          <h2>Quality lessons with designated journeys</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            sodales non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className={styles.three_details_slider}>
          <img src={achievement} alt="images" />
          <h2>Fun and intuitive ways of learning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            sodales non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className={styles.three_details_slider}>
          <img src={achievement} alt="images" />
          <h2>Flexible</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            sodales non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
      </Slider>
    </div>
  );
}
export default SimpleSlider
