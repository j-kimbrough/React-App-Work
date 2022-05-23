import useAxios from 'axios-hooks'
import { useState } from 'react'
import { useName } from '../../../contexts/nameContext'
import InsertUseCase from './UseCases/InsertStudentUseCase'

const usePresenter = () => {
    const { updateName } = useName()
    const insertUseCase = new InsertUseCase();
    const [userLoading, setUserLoading] = useState(false)
    const [insertResult, setInsertResult] = useState();
    const [insertError, setInsertError] = useState();
    const [{ data: user, loading: getLoading, error: getError }, fetch] = useAxios(
        {
            url: '/users/1',
            method: 'GET'
        },
        { manual: true }
    )

    const onNameChange = async (name) => {
        //Can load additional data that depends on name change
        await fetch()
        updateName(name)
        return name
    }

    const onSubmit = async (data) => {
        setUserLoading(true)
        await insertUseCase.executeAsync(data)
            .then((result) => {
                if (result.success){
                    console.log(result.data)
                    setInsertResult(result.data)
                }
                else
                    setInsertError(result.data)
            })
            .catch((error) => {
                setInsertError(error)
            })
            .finally(()=>{
                setUserLoading(false)
            })                    
    }
    return { onSubmit, userLoading, error: insertError, insertResult, onNameChange, user, fetch }

}
export default usePresenter