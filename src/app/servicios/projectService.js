export class ProjectService {
    constructor(firestore) {
        this.db = firestore
    }
    async createProjects(userId, projectId = "Project", data =
        {
            nombre: "Project",
            descripcion: "description project",
            fecha_creacion: new Date().toLocaleString(),
            task: []
        }) {
        return this.db.createDocument(`users/${userId}/Projects`, projectId, data)
    }
    async getProjects(userId) {
        return this.db.getCollection(`users/${userId}/Projects`)
    }
    async getProject(userId, projectId) {
        return this.db.getDocument(`users/${userId}/Projects`, projectId)
    }
}
export default ProjectService