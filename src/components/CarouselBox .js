import '../components/styles/style.css'
import React from 'react';
import Carousel  from 'react-bootstrap/Carousel'

import  eng  from './images/jpg/english.jpg'
import  chin  from './images/jpg/china.jpg'
import  spain  from './images/jpg/spain.jpg'
import  italy  from './images/jpg/italic.jpg'
import  deut from './images/jpg/deutish.jpg'
import  france  from './images/jpg/france.jpg'



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
