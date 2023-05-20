import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import calsses from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default ErrorModal;
