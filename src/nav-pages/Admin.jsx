import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { MentorsTable } from "../components/tables/mentors";
import { CategoriesTable } from "../components/tables/categories";
import { StudentsTable } from "../components/tables/students";
import M from "../components/styles/admin.module.css";
import MM from "../components/styles/modal.module.css";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const { tab, id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [rate, setRate] = useState("");
  const [user, setUser] = useState("");
  const [course, setCourse] = useState("");
  const [wrapperModal, setWrapperModal] = useState(MM.modalClose);

  console.log(tab);
  function handleSubmit(event) {
    event.preventDefault(); 
  
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const experience = document.querySelector('#experience').value;
    const rate = document.querySelector('#rate').value;
    const user = document.querySelector('#user').value;
    const course = document.querySelector('#course').value;
    fetch('http://16.16.149.51/mentor/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ course, name, age, experience, rate, user })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  

  const getApiData = async () => {
    const response = await fetch(`http://16.16.149.51/${tab}/`);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getApiData();
  }, [tab]);

  const handleAdd = () => {
    setWrapperModal(MM.modal);
  };

  const handleEditor = async () => {
    console.log("handleEditor function called");
    const response = await fetch(`http://16.16.149.51/${tab}/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        experience,
        rate,
        user,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
  };

  const handleClose = () => {
    setWrapperModal(MM.modalClose);
  };

  const handleDelete = async () => {
    console.log("handleDelete function called");
    const response = await fetch(`http://16.16.149.51/${tab}/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <div className={M.container}>
      <div className={M.btn}>
        <button onClick={handleAdd} className={M.Add}>
          Добавить
        </button>
        <button onClick={handleEditor} className={M.edit}>
          Редактировать
        </button>
        <button onClick={handleDelete} className={M.delete}>
          Удалить
        </button>
      </div>
      <div className={M.list}>
        <Link to="/Profile/mentor">Менторы</Link>
        <Link to="/Profile/student">Студенты</Link>
        <Link to="/Profile/course">Категории</Link>
      </div>

      {tab === "mentor" && <MentorsTable data={data} />}
      {tab === "student" && <StudentsTable data={data} />}
      {    tab === "course" && <CategoriesTable data={data} />
  }

  <div className={`${MM.wrapper} ${wrapperModal}`}>
    <div className={MM.modalBody}>
      <button onClick={handleClose} className={MM.closeBtn}>
        X
      </button>
      <form onSubmit={handleSubmit} className={MM.modalForm}>
        
        <h3>Добавить {tab === "mentor" ? "Ментора" : tab === "student" ? "Студента" : "Категорию"}</h3>
        <div className={MM.formItem}>
          <label htmlFor="course">Курс:</label>
          <input type="text" id="course" onChange={(event) => setCourse(event.target.value)} />
        </div>
        <div className={MM.formItem}>
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className={MM.formItem}>
          <label htmlFor="age">Возраст:</label>
          <input type="number" id="age" onChange={(event) => setAge(event.target.value)} />
        </div>
        <div className={MM.formItem}>
          {/* <label htmlFor="experience">Опыт:</label> */}
          <label htmlFor="experience">{tab === "mentor" ? "Опыт:" : tab === "student" ? "Курс:" : "Категорию"}</label>
          <input type="number" id="experience" onChange={(event) => setExperience(event.target.value)} />
        </div>
        <div className={MM.formItem}>
          <label htmlFor="rate">Прайс:</label>
          <input type="number" id="rate" onChange={(event) => setRate(event.target.value)} />
        </div>
        {tab === "mentor" && (
          <div className={MM.formItem}>
            <label htmlFor="user">Информация:</label>
            <input type="text" id="user" onChange={(event) => setUser(event.target.value)} />
          </div>
        )}
        <button type="submit" onClick={handleSubmit} className={MM.submitBtn}>
          Добавить
        </button>
      </form>
    </div>
  </div>
</div>
);
};

export default AdminPage;