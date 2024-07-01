import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './App.css';
import { useState } from "react";


function AddPost() {
const [name,setName] =useState("")
const [email,setEmail] =useState("")
const [phone,setPhoneNumber] =useState("")
const [feedback,setFeedback] =useState("")

const cancelForm = (e) => {
  alert ("Just Click The Ok Button, Then Your Respone will be Cancelled!")
  try {
    
  } catch (error) {
    
  }finally{
    setName("")
    setEmail("")
    setPhoneNumber("")
    setFeedback("")
  }
  
}

const onSubmitHandler = async(e) => {
  e.preventDefault()

  if(!name){
    alert("Please Enter Your Full Name!");
    return;
  }
  if(!email){
    alert("Please Enter Your Email!");
    return;
  }
  if(!phone){
    alert("Please Enter Your Phone Number!");
    return;
  }
  if(!feedback){
    alert("Please Write Your Feedback!");
    return;
  }
  else{
    alert("Your Feedback Submited Successfully!")
  }

 try {

  const response = await fetch("http://localhost:4000/api/feedback",{
    method : "POST",
    headers: {
      "content-type" : "application/json"
    },
    body:JSON.stringify({name,email,phone,feedback})
  })
  if(response.ok){
    console.log(response)
  }
 } catch (error) {

 }finally{
    setName("")
    setEmail("")
    setPhoneNumber("")
    setFeedback("")
 }

  
}



  const myStyle={
    fontFamily:"'Times New Roman', Times, serif",
    fontWeight:"500",
    fontSize:"18px",
  }
  
  return (
  <div className="bg pb-3" style={myStyle}>
    <Container className="pt-3 pb-3" >
      
      <Row>
        <Col
        xs={{ span: 9 , offset: 2 }}
        md={{ span: 8 }}
        lg={{ span: 4, offset: 4 }}
      >
        
          <h1 className="display-6 text-center mb-3">Feedback Form</h1>

          <Form className="pt-1" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                placeholder="Enter Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                value={phone}
                onChange={(e) => {setPhoneNumber(e.target.value)}}
                placeholder="Enter Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                type="feedback"
                placeholder="Write your Feedback..."
                rows={4}
                value={feedback}
                onChange={(e) => {setFeedback(e.target.value)}}
              />
            </Form.Group>

            <Button variant="dark" type="button" className="mb-0" onClick={cancelForm}>
              
                Cancel
              
            </Button>

             
              <Button type="submit" className="mx-2 mb-0">
                Submit
              </Button>
            
          </Form>
        </Col>
      </Row>
    
    </Container>
  </div>
  );
}

export default AddPost;