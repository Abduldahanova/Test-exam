
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../components/styles/mentor-list.css'

const Category = () => {
  const [data, setData] = useState();
  const { id } = useParams()
  
  
  const getApiData = async () => {
    const response = await fetch( `http://16.16.149.51/course/${id}/detail/`)
    const data = await response.json()
    setData(data);
};

useEffect(() => {
    getApiData();
}, []);

  return (
    <div>
          {
            data?.mentors.map((mentor) => (
              <div key={mentor.id}>

                <div className="item-containers">
                <img src={`http://16.16.149.51/${mentor.avatar}`}/>
                  <div className="content">
                    <div className="container">
                     
                      <div className="block-item">
                          <div>Имя : {mentor.name}</div>
                          <div>Возраст : {mentor.age}</div>
                          <div>Стаж работы : {mentor.experience}</div>
                      </div>
                      <div>{mentor.rate}$ за час занятия</div>
                    </div>
                    <p>Всем привет!!!</p>
                    <div>{data.description}</div>
                </div>
                </div>
               

              </div>
            ))
          }
    </div>
  )
}
export default Category;
