class Project {
    constructor(projectId, project) {
        this.id = projectId;
        this.nombre = project.nombre;
        this.fecha_creacion = project.fecha_creacion;
        this.tasks = [];
    }
}
export default Project;

