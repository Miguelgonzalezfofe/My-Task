export class TaskService {
    constructor(firestore) {
        this.db = firestore
    }
    async createTask(userId, projectId = "Project", data = {
        titulo: 'Title task',
        content: 'Content Task',
        estado: 'pendiente',
        fecha_creacion: new Date().toLocaleString(),
        fecha_vencimiento: ''
    },) {
        return this.db.createCollection(`users/${userId}/Projects/${projectId}/tasks`, data)
    }
    async getTasks(userId, projectId) {
        return this.db.getCollection(`users/${userId}/Projects/${projectId}/tasks`)
    }
    async getTask(userId, projectId, taskId) {
        return this.db.getDocument(`users/${userId}/Projects/${projectId}/tasks`, taskId)
    }
}
export default TaskService