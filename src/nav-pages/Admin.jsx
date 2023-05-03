import React from "react";
import Item from './components/table-items'
import { useState } from "react";
import S from "../components/styles/admin.module.css"


const AdminPage = () => {
  const [set, setSet] = useState("");
   const ff = (text)=>{
    console.log(set)
    setSet(text)
  }

    return(
        <div className={S.container}>
            <div className={S.btn}>
                <button className={S.Add}>Добавить</button>
                <button className={S.edit}>Редактировать</button>
                <button className={S.delete}>Удалить</button>
            </div>  
            <div className={S.list}>
                <button onClick={() =>ff("Студенты")}>Студенты</button>
                <button onClick={() =>ff("Репетиторы")}>Репетиторы</button>
                <button onClick={() =>ff("Категории")}>Категории</button>
            </div>
           <Item />
        </div>
    )
}

export default AdminPage;
