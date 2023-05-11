import "../components/styles/about.css"

import React from 'react';
import about from '../components/images/jpg/about.jpg'
import test from '../components/images/gif/giphy.gif'
import chat from '../components/images/gif/chat.gif'
import privat from '../components/images/gif/privat.gif'

import team from '../components/images/jpg/about/team.jpg'
import img1 from '../components/images/jpg/about/img1.jpg'
import img2 from '../components/images/jpg/about/img2.jpg'
import img3 from '../components/images/jpg/about/img3.jpg'
import img4 from '../components/images/jpg/about/img4.jpg'



const About = () => {
  return (
    <div className="text-container">
      
      {/* <img className="w-100" src={about} alt="#" /> */}
      <img className="img" src={team} alt="" />
      <div className="about-text">
        <h1>Tutor :</h1>
      <img src={img1} alt="" />
      <p>Мы- профессиональное сообщество частных репетиторов, которые занимаются обучением людей и помогают им развивать свои языковые навыки. Наша миссия заключается в том, чтобы помочь людям достичь лучшего качества общения и более глубокого понимания мира, используя свои языковые навыки.</p>
      <img src={img2} alt="" />
      <p>Язык и общение являются фундаментальными элементами человеческого бытия. Они помогают нам выражать наши мысли и чувства, обмениваться идеями и знаниями, и создавать связи с другими людьми. Без языка и общения мы не могли бы добиваться больших успехов в обществе и даже в нашей личной жизни.
        Наша компания считает, что каждый человек заслуживает возможности для развития своих языковых навыков.</p>
      <img src={img3} alt="" />
      <p>Мы предлагаем широкий спектр курсов и уроков по различным языкам, которые позволяют нашим студентам расширять свой словарный запас, улучшать грамматические навыки и практиковать свои разговорные умения. Наша цель - помочь каждому студенту достигнуть своих языковых целей и стать уверенным и эффективным коммуникатором.
        Компания является важным звеном в обществе, потому что мы помогаем людям развивать свои языковые навыки. Наши услуги особенно важны для тех, кто планирует переезд в другую страну или работу в международной компании. </p>
      <img src={img4} alt="" />
      <p>Также мы помогаем студентам, которые изучают языки в школе или вузе, улучшить свои оценки и подготовиться к экзаменам.
        Наша компания гордится тем, что мы делаем мир лучше, помогая людям развиваться и становиться лучшими версиями самих себя. Мы верим, что языковое образование и обучение общению - это ключевой фактор в нашем мире, который помогает нам лучше понимать друг друга и создавать более гармоничное и справедливое общество.</p>
      </div>

      <section>
      <h2>Как работает Tutor :</h2>
        <div className="info">
       
          <div className="item">
          <img 
          id="test"
          src={test} 
          alt="" />
          <h2>Оставьте заказ</h2>
          <h3>Мы отправим вам на почту все важные вопросы, чтобы вам было проще описать задачу.</h3>
          </div>
          <div className="item">
          <img 
          id="test"
          src={chat} 
          alt="" />
          <h2>Наши специалисты напишут сами</h2>
          <h3>Покажем заказ подходящим профи. Они напишут, если готовы помочь.</h3>
          </div>
          <div className="item">
          <img 
          id="test"
          src={privat} 
          alt="" />
          <h2>Выберите подходящего</h2>
          <h3>Обо всех деталях договаривайтесь со специалистом и платите ему напрямую.</h3> 
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;
