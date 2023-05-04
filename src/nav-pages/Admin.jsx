import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { MentorsTable } from "../components/tables/mentors";
import { CategoriesTable } from "../components/tables/categories";
import { StudentsTable } from "../components/tables/students";
import S from "../components/styles/admin.module.css"

const AdminPage = () => {

    const [data, setData] = useState([]);
    const { tab } = useParams()
    
    //mentor, students, category
    const getApiData = async () => {
        const response = await fetch( `http://16.16.149.51/${tab}/`)
        const data = await response.json()
        setData(data);
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

            <div  className={S.list}>
                <NavLink to='/Profile/mentors'>
                    mentors
                </NavLink>
                <NavLink to='/Profile/students'>
                students
                </NavLink>
                <NavLink to='/Profile/categories'>
                    categories
                </NavLink>
            </div>

            {tab === 'mentor' && <MentorsTable data={data} />}
            {tab === 'students' && <StudentsTable data={data} />}
            {tab === 'categories' && <CategoriesTable data={data} />}
            
          
        </div>
    )
}

export default AdminPage;