import React, { createElement } from 'react';
import CarouselBox from '../components/CarouselBox ';
import { Container } from 'react-bootstrap';
import "./home.css"
import logo from '../image/world.svg'
import medal from '../image/medal.svg' 
import safety from '../image/safety.svg'
import shed from '../image/shed.svg'
import price from '../image/price.svg'






const Home = () => {
  return (
    <div>
       <h1><b>Говорите смело на любом языке</b>
        <br />
          с репетиторами Tutor </h1>
        <CarouselBox />


        <div className="category">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action">English</button>
          <button type="button" class="list-group-item list-group-item-action"></button>
          <button type="button" class="list-group-item list-group-item-action"></button>
        </div>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action"></button>
          <button type="button" class="list-group-item list-group-item-action" ></button>
          <button type="button" class="list-group-item list-group-item-action" ></button>
        </div>

        </div>


          <section>
            <img 
            id='first'
            src={logo} 
            alt="" 
            />
            <h1><b>Сделайте весь мир своей зоной комфорта</b></h1>
            <h2>Занимайтесь с Tutor и с лучшими репетиторами нашей компании</h2>
            <div className="container">
              <div className="block">
                  <img
                  id='world'
                  src={medal} 
                  alt="" />
                  <h2>Опытные репетиторы</h2>
                  <p>Занимайтесь с носителями языка и профессиональными преподавателями</p>
              </div>
              <div className="block">
                  <img
                  id='world'
                  src={safety} 
                  alt="" />
                  <h2>Безопасное общение</h2>
                  <p>Мы проверяем каждого репетитора в нашей компании для вашей безопасности</p>
              </div>
              <div className="block">
                  <img
                  id='world'
                  src={shed} 
                  alt="" />
                  <h2>Гибкий <br /> график</h2>
                  <p>Занимайтесь в своем темпе, выбирая удобное время для уроков</p>
              </div>
              <div className="block">
                  <img
                  id='world'
                  src={price} 
                  alt="" />
                  <h2>Доступные цены</h2>
                  <p>В нашей компании вы найдете репетитора на любой бюджет</p>
              </div>
        </div>
        
        </section>
    </div>
  )
}
export default Home;

