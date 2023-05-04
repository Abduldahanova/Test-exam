import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import S from "../components/styles/admin.module.css"

const AdminPage = () => {
    const [users, setUsers] = useState();
    const [showTutors, setShowTutors] = useState(false);
    const [showStudents, setShowStudents] = useState(true); // добавляем состояние для кнопки "Студенты"
    const [showLanguages, setShowLanguages] = useState(true); // добавляем состояние для кнопки "Категории языков"
    
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
                <button onClick={() => {
                    setShowTutors(false);
                    setShowStudents(true);
                    setShowLanguages(false);
                }}>Студенты</button>
                <button onClick={() => {
                    setShowTutors(true);
                    setShowStudents(false);
                    setShowLanguages(false);
                }}>Репетиторы</button>
                <button onClick={() => {
                    setShowTutors(false);
                    setShowStudents(false);
                    setShowLanguages(true);
                }}>Категории языков</button>
            </div>
            {showTutors && (
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
            {showStudents && <p>Список студентов</p>}
            {showLanguages && <p>Список категорий языков</p>}
        </div>
    )
}

export default AdminPage;