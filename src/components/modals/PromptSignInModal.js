import React, {useState} from 'react'
import {Modal, Button} from "react-bootstrap";

import SignIn from '../SignIn';



const PromptSignIn = () => {
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return  (
      
      <>
        <Button className='btn sky block circular'onClick={handleShow}>
          Add
        </Button>
  
        <Modal show={show} onHide={handleClose} style= {{ top:'33%' , left: '8%'}}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>Login with Google to save favourites</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"className='btn gray block' onClick={handleClose}>
              Close
            </Button>
          <SignIn/>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default PromptSignIn; 
