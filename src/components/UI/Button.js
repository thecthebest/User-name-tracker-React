import classes from "./Button.module.css";
// Render reusable button
function Button(props) {

  return (
      <button 
      className={classes.button} 
      type={props.type || 'button'}
      onClick={props.onClick}
      >{props.children}</button>
  );
}

export default Button;