import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

// Render modal
function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onClick={props.onConfirm}
          title={props.title}
          message={props.message}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
