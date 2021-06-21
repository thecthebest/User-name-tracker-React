import classes from "./Card.module.css";
// Render card
function Card(props) {
  return (
      <div className={`${classes.card} ${props.className}`}>
          {props.children}
      </div>
  );
}

export default Card;