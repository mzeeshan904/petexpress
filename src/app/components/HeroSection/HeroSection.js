"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styles from "../../styles/components.module.scss";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    // nextArrow: <AiOutlineRight />,
    // prevArrow: <AiOutlineLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // nextArrow: <AiOutlineRight />,
          // prevArrow: <AiOutlineLeft />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // nextArrow: <AiOutlineRight />,
          // prevArrow: <AiOutlineLeft />,
        },
      },
    ],
  };

  return (
    <Slider {...settings} >
      <div >
        <Image
          src="/assets/img/slider/slider-2.webp"
          alt="Kitten 1"
          width={500}
          height={500}
          style={{ width: "100vw",height: '82vh'  }}
        />
        <div className={styles.hero_content}>
          <h3>We keep pets for pleasure.</h3>
          <h1>
            Standard Food & Vitamins <br />
            For all Pets
          </h1>
          <Link href='product-details.html' className={styles.slider_btn}>SHOP NOW</Link>
        </div>
      </div>

      <div>
        <Image
           src="/assets/img/slider/slider-3.webp"
          alt="Kitten 1"
          width={500}
          height={500}
          style={{ width: "100vw",height: '82vh'  }}
        />
        <div className={styles.hero_content}>
          <h3>We keep pets for pleasure.</h3>
          <h1>
            Standard Food & Vitamins <br />
            For all Pets
          </h1>
          <Link href='product-details.html' className={styles.slider_btn}>SHOP NOW</Link>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSection;
