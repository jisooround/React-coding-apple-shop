import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './images/bg.jpg';
import data from './data.js';
import { Rautes, Route, Link } from 'react-router-dom'

function App() {
let [shoes, setShoes] = useState(data)
  return (
    <div className="App">
      <Navbar className="header">
        <Container className="inner">
          <Navbar.Brand href="#home" className="logo">mudes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="category">Home</Nav.Link>
            <Nav.Link href="#features" className="category">All</Nav.Link>
            <Nav.Link href="#pricing" className="category">Bag</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')' }}></div>

      <div className="container">
        <div className="row">
            {
            shoes.map(function(a, i) {
              return (
                <Item shoes={shoes[i]} i={i+1}/>
              )
            })
            }
        </div>
      </div>
  </div>
  );
}

function Item(props) {
  return (
            <div className="col-md-4">
                <img src={'https://codingapple1.github.io/shop/shoes' + (props.i) + '.jpg'} width="80%" />
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.price}</p>
            </div>
  )
}

export default App;
