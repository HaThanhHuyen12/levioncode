import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../pages/HomePage/HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotation from "../image/Vector 1.png";
import star from "../image/star.png";
import avt1 from "../image/avt1.png";
import avt2 from "../image/avt2.png";
import avt3 from "../image/avt3.png";

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

function SimpleSlider1() {
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
            <div className={styles.part_four_details_slider}>
              <div className={styles.fixed_content_slider}>
                <div className={styles.vote_slider}>
                  <div className={styles.vote_left_slider}>
                    <img src={quotation} alt="quotation"></img>&nbsp;
                    <img src={quotation} alt="quotation"></img>
                  </div>
                  <div className={styles.vote_right_slider}>
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>
                  </div>
                </div>
                <p>
                  As a Vietnamese learner, you might have realized that
                  pronunciation is not an easy task. I had very refreshing
                  pronunciation sessions with the course. It guided me step by
                  step in order to fix and correct several issues with my
                  Vietnamese pronunciations. Highly recommended!
                </p>
              </div>
              <div className={styles.card_name_slider}>
                <img src={avt3} alt="images" />
                <div className={styles.card_slider}>
                  <h4>Tariq</h4>
                  <p>Master Your Pronunciation Course</p>
                </div>
              </div>
            </div>
            <div className={styles.part_four_details_slider}>
              <div className={styles.fixed_content_slider}>
                <div className={styles.vote_slider}>
                  <div className={styles.vote_left_slider}>
                    <img src={quotation} alt="quotation"></img>&nbsp;
                    <img src={quotation} alt="quotation"></img>
                  </div>
                  <div className={styles.vote_right_slider}>
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>
                  </div>
                </div>
                <p>
                  It is amazing to see my progress even after so many lessons
                  and each one brings me forward! I am so glad that I found Gwen
                  to accompany me on this way with her patience, high energy,
                  and always having something to ask or say!
                </p>
              </div>
              <div className={styles.card_name_slider}>
                <img src={avt2} alt="images" />
                <div className={styles.card_slider}>
                  <h4>Konrad S.</h4>
                  <p>Master Your Pronunciation Course</p>
                </div>
              </div>
            </div>
            <div className={styles.part_four_details_slider}>
              <div className={styles.fixed_content_slider}>
                <div className={styles.vote_slider}>
                  <div className={styles.vote_left_slider}>
                    <img src={quotation} alt="quotation"></img>&nbsp;
                    <img src={quotation} alt="quotation"></img>
                  </div>
                  <div className={styles.vote_right_slider}>
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>&nbsp;&nbsp;
                    <img src={star} alt="star"></img>
                  </div>
                </div>
                <p>
                  Quyen - The instructor of the pronunciation course is a
                  fantastic teacher. She is very knowledgable. I took the 5-hour
                  pronunciation course, now we're working our way through the
                  beginner material and I'm definitely progressing faster than I
                  would have expected.
                </p>
              </div>

              <div className={styles.card_name_slider}>
                  <img src={avt1} alt="images" />
                <div className={styles.card_slider}>
                  <h4>Gina H.</h4>
                  <p>Master Your Pronunciation Course</p>
                </div>
              </div>
            </div>
      </Slider>
    </div>
  );
}
export default SimpleSlider1;
