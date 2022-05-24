import usePresenter from './presenter'
import { useEffect } from 'react'

const View = () => {
    const { data, onSelect, loading, current, loadPage } = usePresenter()

    useEffect(()=>{
        loadPage()
    },[])

    if (loading) {
        return <div>Loading...</div>
    }
    else {
        return <div>
            <img src={current} alt="avatar" />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x) => <tr key={x.id}>
                            <td>{x.email}</td>
                            <td>{x.first_name + " " + x.last_name}</td>
                            <td>
                                <button onClick={() => {
                                    onSelect(x.id)
                                }}>
                                    Click
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    }
}
export default View;