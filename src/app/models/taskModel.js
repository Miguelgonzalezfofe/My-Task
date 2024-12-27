class Task {
    constructor(TaskId, task) {
        this.id = TaskId;
        this.titulo = task.titulo;
        this.conent = task.conent;
        this.estado = task.estado;
        this.fecha_creacion = task.fecha_creacion;
        this.fecha_vencimiento = task.fecha_vencimiento;
    }
}
export default Task;

