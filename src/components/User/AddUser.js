import classes from "AddUser.module.css";
import Card from "../UI/Card";
function AddUser() {
    const addUserHandler = (event) => {
        event.preventDefault();
    }; 

  return (
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="userage">Age</label>
          <input id="userage" type="number" />
          <button type="submit">Add USer</button>
        </form>
      </Card>
  );
}

export default AddUser;
