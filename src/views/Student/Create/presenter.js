<<<<<<< b48ca88ab422be9573de87e7bbe46d3f2e289457
<<<<<<< daf7b72c93603e1a70d3a69f9e0197c8a9f7c700
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
=======
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
=======
>>>>>>> Updated with tests
import useAxios from 'axios-hooks'
import { useName } from '../../../contexts/nameContext'
import URL from './urls'
const usePresenter = () => {
    const { updateName } = useName()
    const [{ loading: userLoading, error, data }, insert] = useAxios(
        {
            url: URL.PutUser,
            method: 'PUT',
        },
        { manual: true }
    )
    const [{ data: user, loading: getLoading, error: getError }, fetch] = useAxios(
        {
            url: URL.FetchUser,
            method: 'GET'
        },
        {manual: true}
    )

    const onNameChange = async (name) => {
        //Can load additional data that depends on name change
        await fetch()
        updateName(name)
        return name
    }

    const onSubmit = async (data) => {
        await insert(data)
        return data
    }
    return { onSubmit, userLoading, error, data, onNameChange,user, fetch }

}
>>>>>>> Update
export default usePresenter