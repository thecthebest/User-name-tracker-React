import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
    const addUserHandler = (event) => {
      event.preventDefault();
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
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
        name: enteredUsername,
        age: enteredAge,
        id: Math.random().toString()
      };
      props.onAddUser(UserData);
      setEnteredUsername('');
      setEnteredAge('');
    }; 
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };
    const errorHandler =() => {
      setError(null);
    };

  return (
    <div>
      {error && <ErrorModal title={error.title} onConfirm={errorHandler} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
          <label htmlFor="userage">Age</label>
          <input id="userage" value={enteredAge} onChange={ageChangeHandler} type="number" />
          <Button type="submit" onChange={ageChangeHandler}>Add USer</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
