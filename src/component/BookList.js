import React, { useState } from 'react'
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

const BookList = () => {
    
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" >
          Refresh List 
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
            
              <tr>
                <td>id</td>
                <td>title</td>
                <td>author</td>
                <td>status</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                   
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                
                  >
                    Delete
                  </Button>
                </td>
              </tr>
           
         
        </tbody>
      </Table>
    </>
  )
}

export default BookList