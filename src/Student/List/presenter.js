import { useState, useEffect } from 'react'
import ListUseCase from './UseCases/ListUseCase'
import ListDTO from './UseCases/ListDTO'

const usePresenter = () => {
    const listUseCase = new ListUseCase();
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const [current, setCurrent] = useState('')
    const [data, setData] = useState([])

    const onSelect = (id) => {
        setCurrent(data.find(x => x.id === id).avatar)
    }

    const loadPage = async () => {
        await listUseCase.executeAsync(new ListDTO(currentPage + 1))
            .then((result) => {
                if (result.success) {
                    setData(result.data)
                    setCurrent(result.data[0].avatar)
                    setCurrentPage(currentPage + 1)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return { loading, data, onSelect, current, loadPage }

}
export default usePresenter