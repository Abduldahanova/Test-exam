import './style.css'
import React from 'react';
import Carousel  from 'react-bootstrap/Carousel'

import  eng  from '../image/english.jpg'
import  chin  from '../image/china.jpg'
import  spain  from '../image/spain.jpg'
import  italy  from '../image/italic.jpg'
import  deut from '../image/deutish.jpg'
import  france  from '../image/france.png'



const CarouselBox = () => {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
              <img
              className='d-block mx-auto'
              id='img'
               src={eng}
               alt="english" />
          </Carousel.Item>
          <Carousel.Item>
              <img 
              className='d-block mx-auto'
              id='img'
              src={spain}
               alt="english" />
          </Carousel.Item>
          <Carousel.Item>
              <img 
              className='d-block mx-auto'
              id='img'
              src={italy}
               alt="english" />
          </Carousel.Item>
          <Carousel.Item>
              <img 
              className='d-block mx-auto'
              id='img'
              src={france}
               alt="english" />
          </Carousel.Item>
          <Carousel.Item>
              <img 
              className='d-block mx-auto'
              id='img'
              src={deut}
               alt="english" />
          </Carousel.Item>
          <Carousel.Item>
              <img 
              className='d-block mx-auto'
              id='img'
              src={chin}
               alt="english" />
          </Carousel.Item>
        </Carousel>
    </div>
  );
}
export default CarouselBox
