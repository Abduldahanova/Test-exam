import React, { useState } from "react";
import M from "../components/styles/modal.module.css";
import axios from "axios";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [rate, setRate] = useState("");
  const [user, setUser] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://16.16.149.51/mentor/create/", {
        name,
        age,
        experience,
        rate,
        user,
      });
      console.log(response.data);
      onClose(); 
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={isOpen ? `${M.modal} ${M.active}` : M.modal}>
      <div className={M.modalContent}>
        <span onClick={onClose} className={M.close}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label>
            Experience:
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </label>
          <label>
            Rate:
            <input type="text" value={rate} onChange={(e) => setRate(e.target.value)} />
          </label>
          <label>
            User:
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
