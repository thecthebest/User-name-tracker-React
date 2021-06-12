import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) => {
      event.preventDefault();
      setEnteredUsername('');
      setEnteredAge('');
    }; 
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };

  return (
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler}/>
          <label htmlFor="userage">Age</label>
          <input id="userage" type="number" />
          <Button type="submit" onChange={ageChangeHandler}>Add USer</Button>
        </form>
      </Card>
  );
}

export default AddUser;
