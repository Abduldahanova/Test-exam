import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../components/styles/mentor-list.css';
const Category = () => {
  const [data, setData] = useState();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { id } = useParams()
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); 
  }
  const getApiData = async () => {
    const response = await fetch(`http://16.16.149.51/course/${id}/detail/`)
    const data = await response.json()
    setData(data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <div className="cards">
      {data?.mentors.map((mentor) => (
        <div key={mentor.id}>
          <div className="item-containers">
            <img src={`http://16.16.149.51/${mentor.avatar}`} />
            <div className="content">
              <div className="container">
                <div>
                  <div>Имя : {mentor.name}</div>
                  <div>Возраст : {mentor.age}</div>
                  <div>Стаж работы : {mentor.experience}</div>
                </div>
                <div>{mentor.rate}$ за час занятия</div>
              </div>
              {isCollapsed ? ( 
                <div className="block-item">
                  <p>Всем привет!!!</p>
                  <div>{data.description.slice(0, 100)}...</div>
                  <button onClick={toggleCollapse}>Показать полностью</button>
                </div>
              ) : (
                <div className="block-item">
                  <p>Всем привет!!!</p>
                  <div>{data.description}</div>
                  <button onClick={toggleCollapse}>Свернуть</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default Category;