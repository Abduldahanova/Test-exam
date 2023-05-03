import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import eng from "../components/images/jpg/english.jpg"
import spain from "../components/images/jpg/spain.jpg"
import deut from "../components/images/jpg/deutish.jpg"
import italic from "../components/images/jpg/italic.jpg"
import france from "../components/images/jpg/france.jpg"
import china from "../components/images/jpg/china.jpg"

import "./styles/swiper.css";


import { EffectCoverflow, Pagination } from "swiper";

export default function CarouselBox() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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


