import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'

import ControllerServices from './app/servicios/controllerServices.js'
import './app/signupForm.js'
import './app/singinForm.js'
import './app/signOut.js'
import './app/googleLogin.js'
import './app/newPorject.js'
import { loginCheck } from './app/loginCheck.js'
import { auth } from './app/config/firebaseConfing.js'

/* import Service */
import showProject from './app/mostrarProjectAndTask.js'


/* Verificar si el usuario esta logeado */

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
        let allProjects = localStorage.getItem('allProjectsAndTasks');

        if (!allProjects) {
            
            const controllerService = new ControllerServices(user);
            await controllerService.getProjectsAndTask();
            allProjects = controllerService.allProjectAndTask;
            localStorage.setItem('allProjectsAndTasks', JSON.stringify(allProjects));
        } else {
            allProjects = JSON.parse(allProjects);
        }

        showProject(allProjects);
    } else {
        loginCheck(user)
        showProject()
    }
})


