import FireStoreAdapter from "../adaptadores/firestoreAdapter.js";
import { db } from "../config/firebaseConfing.js";
import Project from "../models/projectModel.js";
import Task from "../models/taskModel.js";
import showProject from "../mostrarProjectAndTask.js";
import ProjectService from "./projectService.js";
import TaskService from "./taskService.js";
import UserService from "./userService.js";


const dbService = new FireStoreAdapter(db)


export class ControllerServices {
    constructor(user) {
        /* data  */
        this.email = user.email;
        /* PROJECTS AND TASK */
        this.allProjectAndTask = [];
        /* services */
        this.userService = new UserService(dbService);
        this.projectService = new ProjectService(dbService);
        this.taskService = new TaskService(dbService);
    }

    async createUserWithProjectAndTask() {
        await this.userService.createUser(this.email, {
            nombre: "",
            email: this.email,
            fecha_creacion: new Date().toLocaleString()
        });
        await this.projectService.createProjects(this.email);
        await this.taskService.createTask(this.email, 'Project');
    }

    async getProjectsAndTask() {
        const getProjects = await this.projectService.getProjects(this.email);
        for (const project of getProjects.docs) {
            const oneProject = new Project(project.id, project.data());
            const listTask = await this.taskService.getTasks(this.email, project.id);
            for (const task of listTask.docs) {
                oneProject.tasks.push(task.data())
            }
            this.allProjectAndTask.push(oneProject);
        };
        

    }
    
    async createNewProject (nameProject, data){
        const project = await this.projectService.createProjects(this.email, nameProject,data)

    }
    async createNewTask (projectId, data= {}){
        const task = await this.taskService.createTask(this.email, projectId, data)
    }


}

export default ControllerServices