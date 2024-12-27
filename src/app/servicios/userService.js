export class UserService {
    constructor(firestore) {
        this.db = firestore
        
    }
    createUser = async (userId, data) => this.db.createDocument('users', userId, data)
    
    getUsers = async () => this.db.getCollection('users')
    
    getUser = async (userId) => this.db.getDocument('users', userId)
    

}
export default UserService