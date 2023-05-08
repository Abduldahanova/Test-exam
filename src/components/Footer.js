import React from 'react';
import "../components/styles/footer.css"
import LogoSvg from './images/svg/Tutor.svg'
import MapSvg from './images/svg/map.svg'
import EmailSvg from './images/svg/email.svg'
import ChatSvg from './images/svg/chat.svg'
import VacationSvg from './images/svg/Vacation.svg'


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
            <img className="logo-svg" src={LogoSvg} alt="#" />
            <div className="footer-working-hours">
                <h2 className='subtitle'>Рабочие часы:</h2>
            <ul>
                <li>Понедельник-Пятница
                    <p className='work-time'>08:00 - 21:00</p>
                </li>
                <li>Суббота
                    <p className='work-time'>08:00 - 15:00</p>
                </li>
                <img className="vacation-svg" src={VacationSvg} alt="#" />
            </ul>
            </div>
            <div className='footer-form'>
                <h2 className='subtitle'>Наши контакты:</h2>
                    <div className="footer-list">
                    <img src={MapSvg} />
                        <div className='footer-detail'>
                        <h3>Наш адрес :</h3>
                            <p>город Бишкек, 7 микрорайон, дом 26/7.</p>
                        </div>
                    </div>
                    <div className="footer-list">
                    <img src={EmailSvg} />
                        <div className='footer-detail'>
                        <h3>Email адрес :</h3>
                            <p>cdy-info@sword-group.com</p>
                        </div>
                    </div>
                    <div className="footer-list">
                    <img src={ChatSvg} />
                        <div className='footer-detail'>
                        <h3>Контакты :</h3>
                            <p> 0500 431 430 </p>
                        </div>
                    </div>
            </div>
            </div>
        <div className='footer-row'>
            <span className='footer-end'>Copyright © 2023 TUTOR. All Rights Reserved.</span>
        </div>
        </div>
    
    )
}
export default Footer;