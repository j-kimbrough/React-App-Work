import UseCase from '../../../../core/UseCase'
import axios from 'axios'
/**
 * @typedef {import ('./InsertStudentDTO').default} InsertStudentDTO
 */
export default class InsertStudentUseCase extends UseCase {

    /**
     * 
     * @param {InsertStudentDTO} request 
     * @returns {Promise}
     */
    async executeAsync(request) {
        return axios.post('/users/1', request)
            .then((value) => {
                console.log(value)
                return {
                    success: true,
                    data: request
                };
            }).catch((error) => {
                console.log(error);
                return {
                    success: false,
                    data: error
                }
            })
    }
}