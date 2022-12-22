import React, { useState } from 'react'
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Addbook from './Addbook';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';


const Book = () => {
  const [bookId,setBookId]=useState("");
  const getBookIdHandler = (id)=> {
    console.log("the ID of document to be edited",id)
    setBookId(id)
  }
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
            <Addbook  id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList  getBookId={getBookIdHandler}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Book