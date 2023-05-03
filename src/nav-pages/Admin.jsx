import React, { useState, useEffect } from "react";
import S from "../components/styles/admin.module.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json());   
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return(
    <div className={S.container}>
      <div className={S.list}>
        <button>Студенты</button>
        <button>Репетиторы</button>
        <button>Категории языков</button>
      </div>
      <div className={S.card}>
        <div className={S.form}>
          <img src="" alt="#" />
          <div className={S.info}>
            <h2 className={S.name}>Name</h2>
            <span className={S.course}>English</span>
            <p className={S.exp}>Graduate form Univestity</p>
            <p className={S.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rem quas, quod magnam ea et harum hic, dolorum, illo dolore obcaecati consectetur! Aliquam consequuntur quasi nisi facere neque consequatur sunt?</p>
          </div>
          <div className={S.rate}>
            <div>
              <p className={S.price}></p>
              <img src="" alt="#" />
            </div>
            <button className={S.message}>Message</button>    
          </div>
        </div>

        {users.map((user) => (
          <div key={user.id} className="item-container">
            Id: {user.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
