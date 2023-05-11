import S from '../styles/students.module.css'

export const StudentsTable = ({ data }) => {
    console.log(data);
    return (
            <table className={S.table}>
                    <thead>
                        <tr>
                            <th className={S.name}>Имя:</th>
                            <th>{S.birth_date}Дата рождения:</th>
                            <th>{S.course}Курс:</th>
                            <th>{S.mentor}Ментор:</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {data.length &&
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.birth_date}</td>
                                    <td>{item.course}</td>
                                    <td>{item.mentor}</td>
                                </tr>
                        ))}
                    </tbody>
            </table>
    )
}