import React from 'react'
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Addbook from './Addbook';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';


const Book = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Addbook  />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Book