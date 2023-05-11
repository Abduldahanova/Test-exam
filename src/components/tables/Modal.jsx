// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useParams } from "react-router-dom";
// import { MentorsTable } from "../components/tables/mentors";
// import { CategoriesTable } from "../components/tables/categories";
// import { StudentsTable } from "../components/tables/students";
// import M from "../components/styles/admin.module.css";
// import MM from "../components/styles/modal.module.css";
// import axios from "axios";


// const AdminPage = () => {
//   const [data, setData] = useState([]);
//   const { tab, id } = useParams();
//   // const [modalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [experience, setExperience] = useState("");
//   const [rate, setRate] = useState("");
//   const [user, setUser] = useState("");
//   const [wrapperModal, setWrapperModal] = useState(MM.modalClose);


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://16.16.149.51/mentor/create/", {
//         name,
//         age,
//         experience,
//         rate,
//         user,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };



//   const getApiData = async () => {
//     const response = await fetch(`http://16.16.149.51/${tab}/`);
//     const data = await response.json();
//     setData(data);
//   };

//   useEffect(() => {
//     getApiData();
//   }, [tab]);
//   const handleAdd = async () => {
//     console.log("handleAdd function called");
//     console.log(tab);
//     setWrapperModal(MM.modal)
//     const response = await fetch(`http://16.16.149.51/${tab}/create/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "",
//         age: "",
//         experience: "",
//         rate: "",
//         user: "",
//       }),
//     });
//     const responseData = await response.json();
//     console.log(responseData);


//   };

//   const handleEdditor = async () => {
//     console.log("handleEdditor function called");
//     const response = await fetch(`http://16.16.149.51/${tab}/${id}/`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "",
//         age: "",
//         experience: "",
//         rate: "",
//         user: "",
//       }),
//     });
//     const responseData = await response.json();
//     console.log(responseData);


//   };

//   const handleClose =()=>{
//     setWrapperModal(MM.modalClose)
//   }

//   const handleDelete = async () => {
//     console.log("handleDelete function called");
//     const response = await fetch(`http://16.16.149.51/${tab}/${id}/`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     });
//     const responseData = await response.json();
//     console.log(responseData);


//   };

//   return (
//     <div className={M.container}>
//       <div className={M.btn}>
//         <button onClick={handleAdd} className={M.Add}>
//           Добавить</button>
//         <button onClick={handleEdditor} className={M.edit}>Редактировать</button>
//         <button onClick={handleDelete} className={M.delete}>Удалить</button>
//       </div>
//       <div className={M.list}>
//         <Link to="/Profile/mentor">Менторы</Link>
//         <Link to="/Profile/student">Студенты</Link>
//         <Link to="/Profile/course">Категории</Link>
//       </div>

//       {tab === "mentor" && <MentorsTable data={data} />}
//       {tab === "student" && <StudentsTable data={data} />}
//       {tab === "course" && <CategoriesTable data={data} />}

//       <div className={wrapperModal}>
//         <div className={MM.modalContent}>
//           <span onClick={handleClose} className={wrapperModal}>
//             &times;
//           </span>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </label>
//             <label>
//               Age:
//               <input
//                 type="text"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//               />
//             </label>
//             <label>
//               Experience:
//               <input
//                 type="text"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//               />
//             </label>
//             <label>
//               Rate:
//               <input
//                 type="text"
//                 value={rate}
//                 onChange={(e) => setRate(e.target.value)}
//               />
//             </label>
//             <label>
//               User:
//               <input
//                 type="text"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}
//               />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AdminPage;
