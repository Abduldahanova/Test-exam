import "../contacts/contactForm.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MapSvg from './image/icons/map.svg';
import EmailSvg from './image/icons/email.svg';
import ChatSvg from './image/icons/chat.svg';

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
        <h4>contact us</h4>
        <h2>Send Us Message</h2>
        <div className="input-menu">
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email Adress"/>
          <input type="tel" name="phone" placeholder="Phone Number"/>
        </div>
          <input className="text-subject" type="text" name="subject" placeholder="Subject"/>
          <textarea className="text-message" name="message" placeholder="Message"></textarea>
          <button>Send us message</button>
      </div>
    </CardGroup>
  );
}

export default GroupCards;