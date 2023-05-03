import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import S from "../../components/styles/admin.module.css"


function Item(i) {
    const [users, setUsers] = useState([]);
 
    const getApiData = async () => {
        const response = await fetch(
          `http://16.16.149.51/${i}/`
        ).then((response) => response.json());   
        setUsers(response);
    };
    
    useEffect(() => {
        getApiData();
    }, []);

   return (
    <div>
    {setUsers && (
        <table className={S.table}>
            <tbody>
                <tr>
                    <th className={S.name}>Имя:</th>
                    <th>Возраст:</th>
                    <th>Стаж работы:</th>
                    <th>Прайс:</th>
                    <th>Язык:</th>
                </tr>
                {users &&
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.experience}</td>
                        <td>{user.rate}</td>
                        <td>{user.course}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
    </div>
    
   ) 
}
export default Item