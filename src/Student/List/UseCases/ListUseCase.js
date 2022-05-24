import UseCase from '../../../core/UseCase'
import axios from '../../../core/api'
/**
 * @typedef {import ('./ListDTO').default} ListDTO
 */
export default class ListUseCase extends UseCase {

    /**
     * 
     * @param {ListDTO} request 
     * @returns {Promise}
     */
    async executeAsync(request) {
        return axios.get('/users', { params: { page: request.page } })
            .then((value) => ({
                success: true,
                data: value.data.data
            }))
            .catch((error) => ({
                success: false,
                data: error
            }))
    }
}