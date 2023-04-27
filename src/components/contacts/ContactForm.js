import "../contacts/contactForm.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MapSvg from './image/icons/map.svg'
import EmailSvg from './image/icons/email.svg'
import ChatSvg from './image/icons/chat.svg'
import TopImg from './image/font-img/top-img.jpg'


function GroupCards() {
  return (
        <CardGroup>
      <div className="front">
        <Card.Img id="top-img" src={TopImg} />
    </div>
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
            cdy-info@sword-group.com.
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
    </CardGroup>
  );
}

export default GroupCards;