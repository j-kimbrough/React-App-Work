export default class InsertStudentDTO{
    /**
     * 
     * @param {string} name 
     */
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
}