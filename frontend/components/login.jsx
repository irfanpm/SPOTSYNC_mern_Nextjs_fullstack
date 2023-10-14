'use client'
import React, { useState } from 'react';
import  {Button, Card, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
   
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ borderRadius:"100px"}}
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <div>
         <br />
          <form className="d-flex flex-column " >
            <Form.Label>Email or username</Form.Label>
            <Form.Control
              type="Text"
              className=" border border-secondary "
              placeholder=" email or username"
              id="email"
              style={{ height: "50px" }}
            />
            <br />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="pwd"
              className=" border border-secondary "
              style={{ height: "50px" }}
            />
            <br />
            <Button variant="primary" type="submit" style={{ backgroundColor:"#060640"}}>
              Submit
            </Button>
          </form>
          <br />
          <br />
          <div className="text-center">
            
          </div>
      </div>
      
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Login;
