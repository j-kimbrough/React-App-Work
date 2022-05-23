<<<<<<< daf7b72c93603e1a70d3a69f9e0197c8a9f7c700
import usePresenter from './presenter'
const View = () => {
    const [register, onSubmit, userLoading] = usePresenter()

    if (userLoading) {
        return <div>Loading...</div>
    }
    else {
        return <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" {...register('name')} />
            <br />
            <label>Class</label>
            <input type="text" name="classValue" {...register('classValue')} />
            <br />
            <label>School</label>
            <input type="text" name='school' {...register('school')} />
            <br />
            <label>Email</label>
            <input type="email" name='email' {...register('email')} />
            <br />
            <button type="submit" >Submit</button>
        </form>
    }
}
=======
import usePresenter from './presenter'
import { useForm } from "react-hook-form"
import { useEffect } from 'react'


const View = () => {
    const {onSubmit, userLoading, onNameChange} = usePresenter()

    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            email: "testing@mail.com"
        }
    });
    const { name } = watch()

    useEffect(() => {
        onNameChange(name)
    }, [name])

    if (userLoading) {
        return <div>Loading...</div>
    }
    else {
        return <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <label>Name</label>
            <input type="text" name="name" {...register('name', {required: true})} />
            <br />
            <label>Class</label>
            <input type="text" name="classValue" {...register('classValue')} />
            <br />
            <label>School</label>
            <input type="text" name='school' {...register('school')} />
            <br />
            <label>Email</label>
            <input type="email" name='email' {...register('email')} />
            <br />
            <button type="submit" >Submit</button>
        </form>
    }
}
>>>>>>> Update
export default View;