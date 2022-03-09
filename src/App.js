import { useState, useEffect } from "react";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Social Cards</h1>
      
      <div className="cards-container">

      {users.map((user, id) => (
        <ListOfUsers key={id} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
