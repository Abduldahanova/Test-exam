import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { MentorsTable } from "../components/tables/mentors";
import { CategoriesTable } from "../components/tables/categories";
import { StudentsTable } from "../components/tables/students";
import Modal from "../components/Modal";
import M from "../components/styles/admin.module.css";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const { tab, id } = useParams();
  const [modalVisible, setModalVisible] = useState(false);

  const getApiData = async () => {
    const response = await fetch(`http://16.16.149.51/${tab}/`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getApiData();
  }, [tab]);

  const handleAdd = async () => {
    console.log("handleAdd function called");
    const response = await fetch(`http://16.16.149.51/${tab}/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        age: "",
        experience: "",
        rate: "",
        user: "",
      }),
    });
    const responseData = await response.json();
    console.log(responseData);

    setModalVisible(true);
  };

  const handleEdditor = async () => {
    console.log("handleEdditor function called");
    const response = await fetch(`http://16.16.149.51/${tab}/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        age: "",
        experience: "",
        rate: "",
        user: "",
      }),
    });
    const responseData = await response.json();
    console.log(responseData);

    setModalVisible(true);
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

    setModalVisible(true);
  };

  return (
    <div className={M.container}>
      <div className={M.btn}>
        <button onClick={handleAdd} className={M.Add}>
          Добавить</button>
        <button onClick={handleEdditor} className={M.edit}>Редактировать</button>
        <button onClick={handleDelete} className={M.delete}>Удалить</button>
      </div>
      <div className={M.list}>
        <Link to="/Profile/mentor">Менторы</Link>
        <Link to="/Profile/student">Студенты</Link>
        <Link to="/Profile/course">Категории</Link>
      </div>

      {tab === "mentor" && <MentorsTable data={data} />}
      {tab === "student" && <StudentsTable data={data} />}
      {tab === "course" && <CategoriesTable data={data} />}
      {modalVisible && (
        <Modal>
          <h2>Заголовок модального окна</h2>
          <p>Текст модального окна</p>
          <button onClick={() => setModalVisible(false)}>Закрыть</button>
        </Modal>
      )}
    </div>
  );
};
export default AdminPage;
