import React, { useState, useEffect } from "react";

import CarouselBox from '../components/CarouselBox ';
import "../components/styles/home.css"
import logo from '../components/images/svg/world.svg'
import medal from '../components/images/svg/medal.svg' 
import safety from '../components/images/svg/safety.svg'
import shed from '../components/images/svg/shed.svg'
import price from '../components/images/svg/price.svg'
import { NavLink } from 'react-router-dom'





const Home = () => {
  const [data, setData] = useState([]);
  
  const getApiData = async () => {
    const response = await fetch( `http://16.16.149.51/course/`)
    const data = await response.json()
    console.log(data)
    setData(data);
};

useEffect(() => {
    getApiData();
}, []);


  return (
    <div>
    <h1 className='main_bg'><b>Говорите смело на любом языке</b>
     <br />с репетиторами Tutor </h1>
     <CarouselBox />
     

     <div className="catalog">
      { data.map((data) => (
        <NavLink className="list-group-item list-group-item-action" to={`/category/${data.id}`} key={data}>
          {data.name}
        </NavLink>
      ))}
    </div>

    
       <section>
        <div className="logos">
         <img 
         id='first'
         src={logo} 
         alt="" 
         />
         </div>
         <div className="subtitle">
         <h2><b>Сделайте весь мир своей зоной комфорта</b></h2>
         <h2>Занимайтесь с Tutor и с лучшими репетиторами нашей компании</h2>
         </div>
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
               <h2>Доступные <br /> цены</h2>
               <p>В нашей компании вы найдете репетитора на любой бюджет</p>
           </div>
     </div>
     
     </section>
 </div>
  )
}
export default Home;

