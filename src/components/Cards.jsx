import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function Cards({ title, recipe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src="../public/sarma.jpeg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="textCard">{recipe}</div>
          <Button onClick={handleShow} variant="primary">
            Open
          </Button>{" "}
        </Card.Body>
      </Card>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipe}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cards;
