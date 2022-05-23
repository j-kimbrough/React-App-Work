/* eslint-disable class-methods-use-this */

/**
 * @typedef {import('./Result').default} Result
 */

 export default class UseCase {
    /**
       *
       * @param {*} req DTO holding request information
       * @returns {Promise<Result>} Result resolved asynchronously
       */
    // eslint-disable-next-line no-unused-vars
    async executeAsync(req) {
      throw new Error('Method not implemented, please override');
    }
  }
  