export const MentorsTable = ({ data }) => {
    return (
        <table className="">
                    <thead>
                        <tr>
                            <th className="">Имя:</th>
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