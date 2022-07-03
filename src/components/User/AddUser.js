import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { useState, Fragment, useRef } from "react";
// Render form to add user
function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

    const addUserHandler = (event) => {
      event.preventDefault();

      const enteredName= nameInputRef.current.value;
      const enteredAge= ageInputRef.current.value;

      if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values)."
        });
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: "Invalid age",
          message: "Please enter a valid name and age (non-empty values)."
        });
        return;
      }
      const UserData = {
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString()
      };
      props.onAddUser(UserData);
    }; 

    const errorHandler =() => {
      setError(null);
    };

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} onConfirm={errorHandler} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}/>
          <label htmlFor="userage">Age</label>
          <input id="userage" type="number" ref={ageInputRef}/>
          <Button type="submit">Add USer</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
