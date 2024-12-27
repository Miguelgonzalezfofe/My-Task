/* importacion de FireBase para Autenticar */
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import ControllerServices from './servicios/controllerServices.js'

/* importacion de Mi archivo Firebase.js */
import { auth } from "./config/firebaseConfing.js";


/* importacion de showMessage para mostrar los mensajes de alertas */
import { showMessage } from "./showMessage.js";


/* constantes de la interfaz  */
const signupForm = document.querySelector("#singup-form")
const btnForm = document.querySelector("#btn-signup-form")
/* comentario  */
// evento del boton para enviar datos al FireBase Auth
if (signupForm) {

    btnForm.addEventListener("click", async (e) => {
        e.preventDefault()
        const email = signupForm["signup-email"].value
        const password = signupForm["signup-password"].value

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)


            const controllerService = new ControllerServices(userCredentials.user)
            controllerService.createUserWithProjectAndTask()



            const signupModal = document.querySelector("#SignupModal")
            const modal = bootstrap.Modal.getInstance(signupModal)
            modal.hide()
            showMessage(`Welcome ${userCredentials.user.email}`)

            setTimeout(() => {
                /* enviar al usuario a otra pagina de mi web */
                window.location = "/src/app/view/dashboard.html"
            }, 3000)

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                showMessage("Correo en uso", "error")
            }
            else if (error.code === "auth/invalid-email") {
                showMessage("correo invalido", "error")
            }
            else if (error.code === "auth/weak-password") {
                showMessage("contraseña debil", "error")
            } else if (error.code) {
                showMessage("algo salio mal", "error")
            }
            else {
                console.log(error.code, error.message)
            }
        }
    })
}

