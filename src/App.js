import { useState, Fragment } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
// Render Add user and users list
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevstate) => {
      return [...prevstate, user];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
