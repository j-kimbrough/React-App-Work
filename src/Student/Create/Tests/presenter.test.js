import usePresenter from '../presenter'
import { renderHook, act } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import instance from '../../../core/api'

var mock = new MockAdapter(instance)

let response = {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
}


mock.onPost("/users/1").reply(200, {
    data: response
})

describe('Test Presenter', () => {

    const response = {
        success: true,
        data: (new Date()).toISOString()
    }
    test('submit form', async () => {
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            let form = response
            await result.current.onSubmit(response)
            expect(result.current.userLoading).toBe(false)
            console.log(result.current.insertResult)
            expect(result.current.insertResult).toBe(form)
        })
    })

    test('on name update', async () => {
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            let value = await result.current.onNameChange("value")
            expect(value).toBe("value")
        })
    })
})