import usePresenter from '../presenter'
import { renderHook, act } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import instance from '../../../core/api'

var mock = new MockAdapter(instance)

let response = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }
]

mock.onGet("/users").reply(200, {
    data: response
})


describe('Test Presenter', () => {
    test('load page', async () => {
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            expect(result.current.data).toEqual([])
            await result.current.loadPage()
            expect(result.current.data).toEqual(response)
        })
    })
})