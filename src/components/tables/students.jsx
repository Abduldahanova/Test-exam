import S from '../styles/students.module.css'

export const StudentsTable = ({ data }) => {
    return (
            <table className={S.table}>
                    <thead>
                        <tr>
                            <th className={S.name}>Категория:</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {data.length &&
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                </tr>
                        ))}
                    </tbody>
            </table>
    )
}