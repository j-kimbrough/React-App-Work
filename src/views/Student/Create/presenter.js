import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import useAxios from 'axios-hooks'
import {useName} from '../../../contexts/nameContext'

const usePresenter = () => {
    const {updateName} = useName()
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            email: "testing@mail.com"
        }
    });
    const { name } = watch()

    const [{ loading: userLoading, error, data }, insert] = useAxios(
        {
            url: '/users/1',
            method: 'PUT',
        },
        { manual: true }
    )
    

    useEffect(() => {
        //Here, we can fetch values that depend on other components
        updateName(name)
    }, [name])
    const onSubmit = handleSubmit((data) => insert(data))
    return [register, onSubmit, userLoading, error, data]

}
export default usePresenter