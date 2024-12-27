import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'
import { auth } from './config/firebaseConfing.js'
import ControllerServices from './servicios/controllerServices.js'
import showProject from './mostrarProjectAndTask.js'


const newProjectForm = document.querySelector('#newProjectForm')


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const controllerService = new ControllerServices(user)
        const btnCreateNewProject = document.querySelector('#btnCreateNewProject')

        btnCreateNewProject.addEventListener('click', async (e) => {
            e.preventDefault()
            const nameProject = newProjectForm['nameProject'].value
            const data = {
                nombre: nameProject,
                fecha_creacion: new Date().toLocaleString()
            }
            const modalNewProject = document.querySelector("#modalNewProject")
            const modal = bootstrap.Modal.getInstance(modalNewProject)
            modal.hide()
            await controllerService.createNewProject(nameProject, data)
            await controllerService.createNewTask(nameProject)

            await controllerService.getProjectsAndTask();
            const allProjects = controllerService.allProjectAndTask;
            localStorage.setItem('allProjectsAndTasks', JSON.stringify(allProjects));
            showProject(allProjects)
        })
    }
})
