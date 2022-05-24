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

    useEffect(() => {
        listUseCase.executeAsync(new ListDTO(currentPage + 1))
            .then((result) => {
                if (result.success) {
                    setData(result.data.data)
                    setCurrent(result.data.data[0].avatar)
                    setCurrentPage(currentPage + 1)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const onNext = async (data) => {
        setLoading(true)
        await listUseCase.executeAsync(new ListDTO(currentPage + 1))
            .then((result) => {
                if (result.success) {
                    console.log(result.data)
                    setData(result.data)
                    setCurrentPage(currentPage + 1)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return { onNext, loading, data, onSelect, current }

}
export default usePresenter