import {useContext} from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PizzasContext } from '../context/PizzaProvider';

function CardPizza() {

    const {pizzas, agregarAlCarrito} = useContext(PizzasContext);
    const navigate = useNavigate();

  return (
    <Container className='mt-5'>
    <Row className='pt-3'>
    {pizzas.map((pizza, index)=>(
        <Col className='p-3' key={index}>
        <Card key={pizza.id} style={{ width: '18rem' }} className='shadow rounded'>
          <Card.Img variant="top" src={pizza.img}/>
        <Card.Body>
            <Card.Title className='fw-bolder'>{pizza.name}</Card.Title>
            <Card.Text>
              Ingredientes:
            </Card.Text> 
            <ul variant="list">
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}> {ingredient}</li>
                ))}
              </ul>
        </Card.Body>
            
        <Card.Footer className="py-4 text-center ">
        <h3 className="fw-bolder pb-3">$ {pizza.price.toLocaleString()}</h3>
                <Button
                className="m-3 btn"
                variant="primary"
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
                >
                Ver Más
                </Button>

                <Button
                className="m-3 btn"
                variant="danger"
                onClick={() => agregarAlCarrito(pizza)}
                >
                Añadir
                </Button>
            </Card.Footer>
            
          
        </Card>
        </Col>
         ))};
    </Row>
    </Container>
  )
}

export default CardPizza