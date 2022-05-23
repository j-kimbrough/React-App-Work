import usePresenter from '../presenter'
import { renderHook, act } from '@testing-library/react-hooks'
import useAxios from 'axios-hooks'

jest.mock('axios-hooks');
jest.mock('../UseCases/InsertStudentUseCase', () => {
    return function () {
        return {
            executeAsync: (data) => Promise.resolve({
                success: true,
                data: data
            })
        }
    }
})
describe('Test Presenter', () => {
    const fetch = jest.fn()

    const response = {
        success: true,
        data: (new Date()).toISOString()
    }
    test('submit form', async () => {
        useAxios.mockImplementation((value) => {
            return [
                { data: { response }, loading: false },
                fetch
            ]
        })
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            let form = {
                name: "test"
            }
            await result.current.onSubmit(form)
            expect(result.current.userLoading).toBe(false)
            console.log(result.current.insertResult)
            expect(result.current.insertResult).toBe(form)
        })
    })

    test('on name update', async () => {
        useAxios.mockImplementation((value) => {
            return [
                { data: { response }, loading: false },
                fetch
            ]

        })
        const { result } = renderHook(() => usePresenter())
        await act(async () => {
            let value = await result.current.onNameChange("value")
            expect(value).toBe("value")
            expect(result.current.user.response).toBe(response)
        })
    })
})