
import React, { useState, useEffect } from "react";


const Category = () => {
  const [users, setUsers] = useState([]);
  
  const getApiData = async () => {
    const response = await fetch(
      "http://16.16.149.51/course/id"
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
            <>{user.avatar}</>

          </div>
        ))}
    </div>
  )
}
export default Category;
