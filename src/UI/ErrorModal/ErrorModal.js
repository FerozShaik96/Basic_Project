import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import calsses from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={calsses.backdrop} onClick={props.onConfirm} />
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
    </div>
  );
};
export default ErrorModal;
