import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  eng  from './images/jpg/english.jpg'
import  chin  from './images/jpg/china.jpg'
import  spain  from './images/jpg/spain.jpg'
import  italy  from './images/jpg/italic.jpg'
import  deut from './images/jpg/deutish.jpg'
import  france  from './images/jpg/france.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/swiper.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function CarouselBox() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={eng} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={france} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spain} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={italy} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deut} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chin} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


