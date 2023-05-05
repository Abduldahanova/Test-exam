
import React, { useState, useEffect } from "react";
import '../components/styles/mentor-list.css'

const Category = () => {
  const [data, setData] = useState(null);
  
  const getApiData = async () => {
    const response = await fetch( `http://16.16.149.51/course/3/detail/`)
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
                    <div className="container">
                     
                      <div className="block-item">
                          <div>{mentor.name}</div>
                          <div>{mentor.age}</div>
                      </div>
                      <div>{mentor.experience}</div>
                      <div>{mentor.rate}</div>
                      
                    </div>
                    <div className="text-mentor">
                          <p>Сертифицированный преподаватель-носитель испанского языка из Гран-Канарии 🎓 Степень в области испанского языка и латиноамериканской литературы👩‍🎓 2 года опыта 👩‍🏫 Эксперт в области быстрого обучения</p>
                    </div>
                </div>
                
               

              </div>
            ))
          }
    </div>
  )
}
export default Category;
