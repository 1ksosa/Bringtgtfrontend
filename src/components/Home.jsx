import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = window.sessionStorage.getItem("token");
      try {
        const response = await axios.get("https://your-backend-api.com/users", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setUsers(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  const deleteUser = async (userId) => {
    const token = window.sessionStorage.getItem("token");
    try {
      await axios.delete(`https://your-backend-api.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = (userId) => {
    navigate(`/update/${userId}`);
  };

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => updateUser(user.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
