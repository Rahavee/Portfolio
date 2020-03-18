import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalBody,
} from "reactstrap";
import "./styles.css";

export default function MyCard(props) {
  console.log("I am here");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  

  return (
    <div>
      
        <Card id="card" onClick={toggle}>
          <img
            alt="penguins"
            id="card-image"
            src={props.picture}
          />
          <div id="card-filler" />
          <CardBody id="card-body">
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
          </CardBody>
        </Card>
      

      <Modal isOpen={modal} onClick={toggle} toggle={toggle} centered="true" id="pop-up">
        <h2 toggle={toggle} id="pop-up-header">{props.title}</h2>
        <ModalBody id="pop-up-body">
          <img
          alt="pen"
          id="modal-picture"
          src={props.picture}
          />
          <p style={{color:"red"}}>Made with:  {props.tech}</p>
          {props.content}
        </ModalBody>
        
      </Modal>
    </div>
  );
}
