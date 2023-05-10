import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import eng from "../components/images/jpg/english.jpg"
import spain from "../components/images/jpg/spain.jpg"
import deut from "../components/images/jpg/deutish.jpg"
import italic from "../components/images/jpg/italic.jpg"
import france from "../components/images/jpg/france.jpg"
import china from "../components/images/jpg/china.jpg"

import "./styles/swiper.css";


import { Autoplay, EffectCube, Pagination } from "swiper";

export default function CarouselBox() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={eng} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spain} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deut} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={italic} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={france} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={china} />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}


