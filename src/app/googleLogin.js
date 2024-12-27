import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import ControllerServices from "./servicios/controllerServices.js"
import { auth } from "./config/firebaseConfing.js"
import { showMessage } from "./showMessage.js"
import Datauser from "./models/userModel.js"

const btnGoogle = document.querySelector("#btn_google")

// evento del boton para enviar datos al FireBase Auth
if (btnGoogle) {
    btnGoogle.addEventListener("click", async (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider()
        try {
            const userCredentials = await signInWithPopup(auth, provider)
            console.log(userCredentials)
            const controllerService = new ControllerServices(new Datauser(userCredentials.user))
            controllerService.createUserWithProjectAndTask()


            const signupModal = document.querySelector("#SigninModal")
            const modal = bootstrap.Modal.getInstance(signupModal)
            modal.hide()
            showMessage(`Welcome ${userCredentials.user.email}`)


        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                showMessage("Error", "error")
            }
            else if (error.code === "auth/wrong-password") {
                showMessage("contraseña invalida", "error")
            }
            else if (error.code === "auth/user-not-found") {
                showMessage("usuario no encontrado", "error")
            }
            else {
                showMessage("Tenemos un error", "error")
                console.log(error.code)
                console.error(error.message)
            }
        }
    })
}
