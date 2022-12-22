import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataservice from '../services/book.services'

const Addbook = ({ id,setBookId}) => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [status,setStatus]= useState("Available")
    const [flag,setFlag] = useState(true)
    const [message,setMessage] = useState({error: false,msg:""})

    // var date1 = new Date();
    // const formatDate=date1.getFullYear()+'-'+ (date1.getMonth() + 1) +'-'+date1.getDate();
    // var today= new Date(formatDate)
    // var date2 = new Date("2022-11-26");
    // var Difference_In_Time = Math.abs(today.getTime() - date2.getTime());

    // var Difference_In_Days =Math.ceil( Difference_In_Time / (1000 * 3600 * 24));
    // console.log("Total number of days between dates  <br>"
    //            + date1 + "<br> and <br>" 
    //            + date2 + " is: <br> " 
    //            + Difference_In_Days);


    const handleSubmit = async(e) =>{
        e.preventDefault()
        setMessage("")
        if(title === "" || author === ""){
            setMessage({error:true, msg: "all fields are madatory!"})
            return;
        }
        const newBook = {
            title,
            author,
            status
        }
        console.log(newBook)
        try{
         if(id !== undefined && id !== ""){
          await BookDataservice.updateBook(id,newBook)
          setBookId("")
          setMessage({error: false,msg: "Updated successfully"})

         }else {
          await BookDataservice.addBooks(newBook)
          setMessage({error: false,msg: "New Book added successfully"})
         }
        } catch(err){
          setMessage({error:true, msg: err.message})
        }
        setTitle("")
        setAuthor("")

    }

    const  editHander = async() =>{
      setMessage("")
      try{
        const docSnap = await BookDataservice.getBook(id)
        console.log("the record is:",docSnap.data)
        setTitle(docSnap.data().title)
        setAuthor(docSnap.data().author)
        setStatus(docSnap.data().status)

      }catch(err){
        setMessage({error: true, msg:err.message})
      }
    }
    useEffect(()=>{
      console.log("The id here is :", id)
      if(id !== undefined && id !== ""){
        editHander()
      }

    },[id])
    return (
        <>
        <div className="p-4 box">
          {message?.msg && (
            <Alert 
                variant={message?.error ? "danger" : "success"} 
                dismissible 
                onClose={()=>setMessage("")}
           >
            {message?.msg}

            </Alert>)}
          
                
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBookTitle">
                <InputGroup>
                  <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    
                  />
                </InputGroup>
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBookAuthor">
                <InputGroup>
                  <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Book Author"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    
                  />
                </InputGroup>
              </Form.Group>
              <ButtonGroup aria-label="Basic example" className="mb-3">
                <Button
                  
                  variant="success"
                  
                >
                  Available
                </Button>
                <Button
                  variant="danger"
                  
                >
                  Not Available
                </Button>
              </ButtonGroup>
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Add/ Update
                </Button>
              </div>
            </Form>
          </div>
        </>
      );
}

export default Addbook