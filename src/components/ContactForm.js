import '../components/styles/contactForm.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MapSvg from './images/svg/map.svg'
import EmailSvg from './images/svg/email.svg';
import ChatSvg from './images/svg/chat.svg';


const handleButtonClick = () => {
  window.location.reload();
};

function GroupCards() {
  return (
    <CardGroup>
        <div className="bg-img"></div>
        <div className="form">
      <Card>
        <Card.Img src={MapSvg} />
        <Card.Body>
          <Card.Title>Наш адрес:</Card.Title>
          <Card.Text>
            город Бишкек, 7 микрорайон, дом 26/7.
          </Card.Text>
          <Card.Text>
            город Бишкек, улица Исанова, дом 105/3.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={EmailSvg} />
        <Card.Body>
          <Card.Title>Email адрес:</Card.Title>
          <Card.Text>
            cdy-info@sword-group.com
            </Card.Text>
          <Card.Text>
            https://dev.codifylab.com/
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={ChatSvg} />
        <Card.Body>
          <Card.Title>Контакты:</Card.Title>
          <Card.Text>
          0500 431 430 
          </Card.Text>
          <Card.Text>
          0312590711
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      <div className="contact-menu">
        <h4>Свяжитесь с нами</h4>
        <h2>Оставьте заявку</h2>
        <div className="input-menu">
          <input type="text" name="name" placeholder="Имя"/>
          <input type="email" name="email" placeholder="Email адрес"/>
          <input type="tel" name="phone" placeholder="Номер телефона"/>
        </div>
          <input className="text-subject" type="text" name="subject" placeholder="Тема"/>
          <textarea className="text-message" name="message" placeholder="Сообщение"></textarea>
          <button onClick={handleButtonClick}>Отправить</button>
      </div>
    </CardGroup>
  );
}

export default GroupCards;