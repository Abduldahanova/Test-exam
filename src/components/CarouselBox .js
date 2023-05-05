import { Swiper, SwiperSlide } from "swiper/react";

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


import { EffectCube, Pagination } from "swiper";

export default function CarouselBox() {
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
        pagination={true}
        modules={[EffectCube, Pagination]}
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
      </Swiper>
    </>
  );
}


