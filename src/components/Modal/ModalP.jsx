import React from 'react'
import { Modal,Button, Form } from 'react-bootstrap'
import './modalP.css'

const ModalP = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Change skill category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label>Category</label>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <label>Speciality</label>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Button onClick={props.onHide}>Cancel</Button>
            <Button onClick={props.onHide}>Save</Button>

          </Modal.Body>
          
         
        </Modal>
      )
}

export default ModalP