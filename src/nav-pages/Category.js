
import React, { useState, useEffect } from "react";


const Category = () => {
  const [users, setUsers] = useState([]);
  
  const getApiData = async () => {
    const response = await fetch(
      "http://16.16.149.51/mentor/"
    ).then((response) => response.json());   
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
          {users.map((user) => (
          <div key={user.avatar} className="item-container">
            <h1>{user.course}</h1>
          </div>
        ))}
    </div>
  )
}
export default Category;
