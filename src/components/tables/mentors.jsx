import M from '../styles/admin.module.css'
import axios from 'axios';

export const MentorsTable = ({ data }) => {
    console.log(data);


    const btnDelete = (e, id) => {
      e.preventDefault();
      console.log(id);
    
      
    const headers = new Headers();
headers.append('Authorization', `Token ${localStorage.getItem('token')}`);
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Authorization', `Basic 	tutor.azat : @bcdefgh`);

fetch( `http://16.16.149.51/mentor/${id}`, {
  method: 'DELETE',
  headers: headers,
})
  .then(response => {
    // Обработка ответа сервера
  })
  .catch(error => {
    // Обработка ошибки
  });
    };
         
    return (
        <table className={M.table}>
                    <thead>
                        <tr>
                            <th>Фото:</th>
                            <th className={M.name}>Имя:</th>
                            <th>Возраст:</th>
                            <th>Стаж работы:</th>
                            <th>Прайс:</th>
                            <th>Язык:</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {data.length &&
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td> <img className={M.img} src={item.avatar} alt="#" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.experience}</td>
                                    <td>{item.rate}</td>
                                    <td>{item.course}</td>

                                    <button onClick={(e) => btnDelete(e, item.id)} className={M.deleteBtn}> Delete</button>

                                </tr>
                        ))}
                    </tbody>
            </table>
    )
}