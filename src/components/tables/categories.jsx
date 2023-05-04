import C from '../styles/categories.module.css'

export const CategoriesTable = ({ data }) => {
    return (
        <table className={C.table}>
                    <thead>
                        <tr>
                            <th className={C.name}>Категория:</th>
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