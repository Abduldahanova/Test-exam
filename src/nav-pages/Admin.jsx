import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import S from "../components/styles/admin.module.css"

const AdminPage = () => {
    const [users, setUsers] = useState();
    const getApiData = async () => {
        const response = await fetch(
          "http://16.16.149.51/mentor/"
        ).then((response) => response.json());   
        setUsers(response);
      };
      useEffect(() => {
        getApiData();
      }, []);
    return(
        <div className={S.container}>
          <div className={S.btn}>
              <button className={S.Add}>Добавить</button>
              <button className={S.edit}>Редактировать</button>
              <button className={S.delete}>Удалить</button>
              </div>  
            <div className={S.list}>
                <button>Студенты</button>
                <button>Репетиторы</button>
                <button>Категории языков</button>
            </div>
            <table className={S.table}>
              <td className={S.name}>
                <th>Имя:</th>
                <tr>{users &&
                    users.map((user) => (
                    <div className={S.title}>{user.name}</div>
                   ))}</tr>
              </td>
              <td>
                <th>Возраст:</th>
                <tr>{users &&
                    users.map((user) => (
                    <div className={S.age}>{user.age}</div>
                   ))}</tr>
              </td>
              <td>
                <th>Стаж работы:</th>
                <tr>{users &&
                    users.map((user) => (
                    <div className={S.exp}>{user.experience}</div>
                   ))}</tr>
              </td>
              <td>
                <th>Прайс:</th>
                <tr>{users &&
                    users.map((user) => (
                    <div className={S.exp}>{user.rate}</div>
                   ))}</tr>
              </td>
              <td>
                <th>Язык:</th>
                <tr>{users &&
                    users.map((user) => (
                    <div className={S.exp}>{user.course}</div>
                   ))}</tr>
              </td>
              </table>
              
            </div>
    )
}
export default AdminPage