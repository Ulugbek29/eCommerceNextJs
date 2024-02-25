import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./style.module.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { borderRadius } from "@mui/system";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={cls.rightSide}
      onClick={onClick}
    >
        <ChevronRightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={cls.leftSide}
      onClick={onClick}
    >
        <ChevronLeftIcon />
    </div>
  );
}

const SwipperData = [
  {
    id: 1,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
  {
    id: 2,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
  {
    id: 3,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
  {
    id: 4,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
  {
    id: 5,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
  {
    id: 6,
    title: "Смартфоны в рассрочку",
    bgImg: "/swipper_bg.png",
  },
];

function index() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => {
     return   <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "10px",
          }}
        >
          <ul>
          {dots.map((dot, index) => (
            <div
              key={index}
            >{dot}</div>
          ))}
            </ul>
        </div>
    },
      customPaging: (i) => {
       return <div
          style={{
                width: "30px",
                height: "15px",
                borderRadius: "1rem",
          }}
        >
        </div>
      }
    }
  
  return (
    <div className="slider-container bg-white rounded-lg">
      <Slider {...settings}>
        {SwipperData.map((swipper) => (
          <div
            key={swipper.id}
            style={{
              backgroundImage: `url(/swipper_bg.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center", 
            }}
            className={`w-full h-[400px]`}
            // style={{ backgroundImage: `url(${swipper.bgImg})`}}
          >
          {/* <img  src={swipper.bgImg}/> */}
            <div className="w-5/12 h-full flex flex-col justify-center items-start gap-6 px-14 py-4">
              <h3 className="text-5xl font-bold">{swipper.title}</h3>
              <p>Купить любимые смартфоны в рассрочку</p>
              <button className="py-2 px-6 bg-[#FF9910] rounded-lg text-white">
                Смотреть все
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default index;
