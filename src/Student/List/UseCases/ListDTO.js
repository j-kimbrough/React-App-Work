export default class ListDTO {
    /**
     * 
     * @param {number} page 
     * @param {number} perPage 
     */
    constructor(page, perPage) {
        this._page = page
        this._perPage = perPage
    }
    get page() {
        return this._page
    }
    get perPage() {
        return this._perPage
    }
}