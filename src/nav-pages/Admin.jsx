import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { MentorsTable } from "../components/tables/mentors";
import { CategoriesTable } from "../components/tables/categories";
import { StudentsTable } from "../components/tables/students";
import M from "../components/styles/admin.module.css"

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
       
        <div className={M.container}>
            <div className={M.btn}>
                <button className={M.Add}>Добавить</button>
                <button className={M.edit}>Редактировать</button>
                <button className={M.delete}>Удалить</button>
            </div>  

            <div  className={M.list}>
                <NavLink to='/Profile/mentor'>
                    mentors
                </NavLink>
                <NavLink to='/Profile/student'>
                students
                </NavLink>
                <NavLink to='/Profile/course'>
                    categories
                </NavLink>
            </div>

            {tab === 'mentor' && <MentorsTable data={data} />}
            {tab === 'student' && <StudentsTable data={data} />}
            {tab === 'course' && <CategoriesTable data={data} />}
            
          
        </div>
    )
}

export default AdminPage;