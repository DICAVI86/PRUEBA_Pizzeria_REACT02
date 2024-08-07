import React from 'react'
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzasContext } from '../context/PizzaProvider'
import { Button, Card, Col, Row } from "react-bootstrap";

function PizzaDetalle() {

    const { pizzas, agregarAlCarrito } = useContext(PizzasContext);
    const { id } = useParams();
    const navigate = useNavigate();
  
    const pizza = pizzas[pizzas.findIndex((pizzas) => pizzas.id === id)];

  return (
    <Card className="p-5">
      <Row className="g-0">
        <Col md={5} className="p-3">
          <Card.Img src={pizza.img} />
        </Col>
        <Col md={7} className="p-3">
          <Card.Body>
            <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
            <hr />
            <Card.Text>{pizza.desc}</Card.Text>
            <Card.Text>Ingredientes:</Card.Text>
            <ul variant="flush">
              {pizza.ingredients.map((ingredient, i) => (
                <li className="text-capitalize" key={i}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer className="py-3">
            <h2>Precio: ${pizza.price.toLocaleString()}</h2>
            <Button variant="danger" className="m-1 btn" onClick={() => agregarAlCarrito(pizza)}>
              Añadir
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

export default PizzaDetalle