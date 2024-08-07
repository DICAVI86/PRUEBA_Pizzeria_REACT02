import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PizzasContext } from '../context/PizzaProvider';
import { useContext } from 'react';


function NavbarMamma() {

    const {carrito} = useContext(PizzasContext);

    const precioTotal = carrito.reduce(
        (total, pizza) => total + pizza.price * pizza.count,
        0
      );

      

  return (
        <Navbar
        bg="info"
        variant="secondary"
        expand="lg"
        className="navbar ps-5 pe-5 fixed-top"
        >
            <Container>
                <Navbar.Brand className='fs-3'>🍕 Pizzeria Mamma Mia!</Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to={"/"}>🏠 Home</Nav.Link>
                    <Nav.Link as={NavLink} to={"/carrito"}>🛒 Carro: $ {precioTotal.toLocaleString()}</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
  )
}

export default NavbarMamma