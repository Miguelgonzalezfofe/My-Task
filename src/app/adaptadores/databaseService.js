/* Interfaz para la base de datos */
class DataBaseService {
    async createDocument(paht, id, data) {
        throw new Error(`createDocuemnt debe ser implementado`)
    }
    async createCollection(paht, data) {
        throw new Error(`createCollection debe ser implementado`)
    }
    async getDocument(path, id) {
        throw new Error(`getDocument debe ser implementado`)
    }
    async getCollection(path) {
        throw new Error(`getCollection debe ser implementado`)
    }
}

export default DataBaseService
