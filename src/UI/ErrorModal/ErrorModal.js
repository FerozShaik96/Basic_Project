import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import calsses from "./ErrorModal.module.css";
const Backdrop = (props) => {
  return <div className={calsses.backdrop} onClick={props.onConfirm} />;
};
const ModalOverLay = (props) => {
  return (
    <Card className={calsses.modal}>
      <header className={calsses.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={calsses.content}>
        <p>{props.message}</p>
      </div>
      <footer className={calsses.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
