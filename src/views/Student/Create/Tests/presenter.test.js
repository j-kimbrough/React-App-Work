import usePresenter from '../presenter'
import { renderHook, act } from '@testing-library/react-hooks'
import useAxios from 'axios-hooks'
jest.mock('axios-hooks');

describe('Test Presenter', () => {
    const insert = jest.fn()
    const fetch = jest.fn()
    const response = {
        updatedAt: (new Date()).toISOString()
    }
    

    test('should submit file', async () => {
        useAxios.mockImplementation((value) => {
            if(value.url === '/users/1' && value.method === 'PUT'){
                return [
                    { data: { response }, loading: false },
                    insert
                ]
            }
            else if(value.url === '/users/1' && value.method === 'GET'){
                return [
                    { data: { response }, loading: false },
                    fetch
                ]
            }
            else{
                return []
            }
        })
        const { result } = renderHook(() => usePresenter())

        await act(async () => {
            let form = {
                name: "test"
            }
            let value = await result.current.onSubmit(form)
            expect(result.current.userLoading).toBe(false)
            expect(value).toBe(form)
        })
    })

    test('on name update', async () => {        
        useAxios.mockImplementation((value) => {
            console.log(value)
            if(value.url === '/users/1' && value.method === 'PUT'){
                return [
                    { data: { response }, loading: false },
                    insert
                ]
            }
            else if(value.url === '/users/1' && value.method === 'GET'){
                return [
                    { data: { response }, loading: false },
                    fetch
                ]
            }
            else{
                return []
            }
        })
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            let value = await result.current.onNameChange("value")
            expect(value).toBe("value")
            expect(result.current.user.response).toBe(response)
        })
    })
})