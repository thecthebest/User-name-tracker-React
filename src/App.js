import { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevstate) => {
      return [...prevstate, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
