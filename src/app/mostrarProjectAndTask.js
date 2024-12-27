import { showMessage } from "./showMessage.js";

const listasProyectos = document.querySelector('#lista-proyectos');
const listasTareas = document.querySelector('#lista-tareas');
const cardTarea = document.querySelector('#card');

export const proyectosPsicologia = [
    {
        id: '1',
        nombre: 'Importancia de las Tareas en la Gestión Personal',
        descripcion: 'Estudio sobre cómo las tareas contribuyen a la organización y reducción del estrés en estudiantes universitarios.',
        fecha_creacion: '30/11/2024',
        tasks: [
            {
                id: '1.1',
                titulo: 'Revisión de la Literatura',
                content: 'Investigar estudios que vinculen la planificación de tareas con la productividad personal.',
                estado: 'pendiente',
                fecha_creacion: '30/11/2024',
                fecha_vencimiento: '05/12/2024'
            },
            {
                id: '1.2',
                titulo: 'Diseño de Encuestas',
                content: 'Crear una encuesta para evaluar el impacto de las tareas en la vida diaria de los estudiantes.',
                estado: 'pendiente',
                fecha_creacion: '06/12/2024',
                fecha_vencimiento: '10/12/2024'
            },
            {
                id: '1.3',
                titulo: 'Análisis de Resultados',
                content: 'Interpretar los datos recopilados y escribir un informe detallado.',
                estado: 'pendiente',
                fecha_creacion: '11/12/2024',
                fecha_vencimiento: '15/12/2024'
            }
        ]
    },
    {
        id: '2',
        nombre: 'Efectividad de las Notas para la Organización',
        descripcion: 'Investigación sobre cómo el uso de notas mejora la memoria y el rendimiento académico.',
        fecha_creacion: '01/11/2024',
        tasks: [
            {
                id: '2.1',
                titulo: 'Revisión Teórica',
                content: 'Explorar teorías psicológicas relacionadas con la memoria y el aprendizaje.',
                estado: 'completado',
                fecha_creacion: '01/11/2024',
                fecha_vencimiento: '05/11/2024'
            },
            {
                id: '2.2',
                titulo: 'Pruebas Experimentales',
                content: 'Implementar un experimento donde se mida el rendimiento de dos grupos: con y sin uso de notas.',
                estado: 'pendiente',
                fecha_creacion: '06/11/2024',
                fecha_vencimiento: '15/11/2024'
            },
            {
                id: '2.3',
                titulo: 'Informe Final',
                content: 'Redactar un informe final con los hallazgos del experimento.',
                estado: 'pendiente',
                fecha_creacion: '16/11/2024',
                fecha_vencimiento: '20/11/2024'
            }
        ]
    },
    {
        id: '3',
        nombre: 'Relación entre Tareas y Reducción de Ansiedad',
        descripcion: 'Proyecto para investigar cómo las tareas planificadas pueden reducir los niveles de ansiedad en estudiantes.',
        fecha_creacion: '15/10/2024',
        tasks: [
            {
                id: '3.1',
                titulo: 'Preparación del Marco Teórico',
                content: 'Recopilar información sobre la relación entre organización y salud mental.',
                estado: 'pendiente',
                fecha_creacion: '15/10/2024',
                fecha_vencimiento: '20/10/2024'
            },
            {
                id: '3.2',
                titulo: 'Diseño de un Plan de Tareas',
                content: 'Crear un plan semanal para un grupo de estudiantes y evaluar su impacto en la ansiedad.',
                estado: 'pendiente',
                fecha_creacion: '21/10/2024',
                fecha_vencimiento: '30/10/2024'
            },
            {
                id: '3.3',
                titulo: 'Análisis Cualitativo',
                content: 'Entrevistar a los participantes para obtener percepciones cualitativas del experimento.',
                estado: 'pendiente',
                fecha_creacion: '01/11/2024',
                fecha_vencimiento: '10/11/2024'
            }
        ]
    },
    {
        id: '4',
        nombre: 'Psicología del Tiempo y Planificación',
        descripcion: 'Estudio sobre cómo la percepción del tiempo influye en la capacidad de planificar tareas y establecer prioridades.',
        fecha_creacion: '20/11/2024',
        tasks: [
            {
                id: '4.1',
                titulo: 'Definición del Marco Teórico',
                content: 'Revisar conceptos clave como percepción del tiempo y procrastinación.',
                estado: 'pendiente',
                fecha_creacion: '20/11/2024',
                fecha_vencimiento: '25/11/2024'
            },
            {
                id: '4.2',
                titulo: 'Entrevistas a Estudiantes',
                content: 'Realizar entrevistas para analizar la relación entre percepción del tiempo y organización.',
                estado: 'pendiente',
                fecha_creacion: '26/11/2024',
                fecha_vencimiento: '05/12/2024'
            },
            {
                id: '4.3',
                titulo: 'Propuesta de Soluciones',
                content: 'Crear estrategias de planificación basadas en los hallazgos.',
                estado: 'pendiente',
                fecha_creacion: '06/12/2024',
                fecha_vencimiento: '15/12/2024'
            }
        ]
    }
];


const showProject = (projects = proyectosPsicologia) => {
    if (listasProyectos && listasTareas && cardTarea) {
        listasProyectos.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', "d-flex", "justify-content-between", "align-items-start",);

            const a = document.createElement('a');
            a.classList.add('text-decoration-none', 'text-dark');
            a.href = `#${project.id}`;
            a.textContent = project.nombre;
            li.appendChild(a);


            const div = document.createElement('div');
            div.classList.add('d-flex', 'gap-1');
            li.appendChild(div);

            /* btn editar */
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', "btn-outline-primary", "btn-ms", "fs-6", "h-auto", "btn-edit");

            btnEditar.innerHTML = ' <i class="bi bi-pencil"></i>';

            btnEditar.setAttribute("data-bs-toggle", "modal");
            btnEditar.setAttribute("data-bs-target", "#modalNewnameProject");
            btnEditar.addEventListener('click', (e) => {
                e.stopPropagation();
                project = projects.find(p => p.id == project.id);
                const formNameProject = document.querySelector('#newNameProjectForm');
                formNameProject["newNameProject"].value = project.nombre;


                const btnSaveNameProject = document.querySelector('#btnEditNewProject');
                btnSaveNameProject.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log("proyecto editado")


                    const nameProjecModal = document.querySelector("#modalNewnameProject")
                    const modal = bootstrap.Modal.getInstance(nameProjecModal)
                    modal.hide()
                });







            })
            div.appendChild(btnEditar);

            /* boton eliminar */
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', "btn-outline-danger", "btn-ms", "fs-6", "h-auto", "btn-delete");
            btnEliminar.innerHTML = ' <i class="bi bi-trash"></i>';
            btnEliminar.setAttribute("data-bs-toggle", "modal");
            btnEliminar.setAttribute("data-bs-target", "#modalDeleteProject");

            btnEliminar.addEventListener('click', (e) => {
                e.stopPropagation();

                project = projects.find(p => p.id === project.id);
                let proyecDelet = project.id;
                /* fuancion para eliminar un proyecto */
                let btnDeleteProject = document.querySelector(`#btnDeleteProject`);

                btnDeleteProject.replaceWith(btnDeleteProject.cloneNode(true));
                btnDeleteProject = document.querySelector(`#btnDeleteProject`);

                btnDeleteProject.addEventListener('click', (e) => {
                    e.preventDefault()
                    /* funcion para eliminar proyecto */
                    console.log("proyecto eliminado")
                    const deleteProjectModal = document.querySelector("#modalDeleteProject")
                    const modal = bootstrap.Modal.getInstance(deleteProjectModal)
                    modal.hide()
                    showMessage(`Project deleted`, "delete");
                });

            })

            div.appendChild(btnEliminar);

            listasProyectos.appendChild(li);

            li.addEventListener('click', () => {
                listasTareas.innerHTML = '';

                project.tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item', "d-flex", "justify-content-between", "align-items-center");

                    const a = document.createElement('a');
                    a.classList.add('text-decoration-none', 'text-dark');
                    a.id = project.id;
                    a.href = `#${task.id}`;
                    a.textContent = task.titulo;
                    li.appendChild(a);

                    listasTareas.appendChild(li);
                    li.addEventListener("click", () => {
                        cardTarea.innerHTML =
                            `
                        <div class="card" id = ${task.id}>
        <div class="card-header">
            <div class="d-flex justify-content-between">
                <p class="mb-0"><strong>Creación:</strong> <span>${task.fecha_creacion}</span></p>
                <p class="mb-0"><strong>Vencimiento:</strong> <span>${task.fecha_vencimiento}</span></p>
            </div>
            
        </div>
        <div class="card-body d-flex flex-column">
            <div class="flex-grow-1">
                <input 
                    type="text" 
                    id="titulo-tarea" 
                    class="form-control border-0 p-0 fs-4 fw-bold" 
                    value="${task.titulo}" 
                />
                <textarea 
                    id="contenido-tarea" 
                    class="form-control border-0 p-0 mt-2" 
                    rows="10" 
                >${task.content}</textarea>
            </div>
            <div class="notas-relacionadas mt-auto pt-3">
                <h6>Notas relacionadas:</h6>
                <div class="d-flex flex-wrap gap-2">
                    <span class="badge bg-info">Nota 1</span>
                    <span class="badge bg-info">Nota 2</span>
                    <span class="badge bg-info">Nota 3</span>
                </div>
            </div>
            <div class="text-end mt-3">
            <button class="btn btn-info px-4">Mover</button>
                <button class="btn btn-primary px-4">Guardar</button>
                <button class="btn btn-secondary px-4">Borrar</button>
            </div>
        </div>
    </div>
    `
                    })
                });
            });
        })
    }

}
export default showProject;
