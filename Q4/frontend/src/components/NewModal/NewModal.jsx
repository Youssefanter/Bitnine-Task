import React, { useState } from 'react';

import {
  Button, Form, Modal, InputGroup,
} from 'react-bootstrap';

function NewModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create a Graph
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Graph</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Graph Name</Form.Label>
              <Form.Control type="email" placeholder="Enter you graph name" />
              <InputGroup className="mt-2">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <InputGroup.Text>DROP graph if exists</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-between">
              <Button variant="primary">Upload Nodes</Button>
              <Button variant="primary">Upload Edges</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="warning" onClick={handleClose}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewModal;
