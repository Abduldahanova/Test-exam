import M from '../styles/admin.module.css'

export const MentorsTable = ({ data }) => {
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
                                </tr>
                        ))}
                    </tbody>
            </table>
    )
}