import React, {useState} from 'react'
import {Modal, Button} from "react-bootstrap";
import useFirestore from '../controllers/useFirestore'
const DeleteModal = ({props}) => {
    
    const {deleteAsteroid} = useFirestore();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='btn sky block circular'onClick={handleShow}>
          Remove
        </Button>
  
        <Modal show={show} onHide={handleClose} style= {{ top:'33%' , left: '8%'}}>
          <Modal.Header closeButton>
            <Modal.Title>Remove From Favourites</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove this from you favourites?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"className='btn gray block' onClick={handleClose}>
              Close
            </Button>
            <Button className='btn sky block ' onClick={()=>{handleClose(); deleteAsteroid(props)}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default DeleteModal; 
