import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./config/firebaseConfing.js";
import { showMessage } from "./showMessage.js";

const signinForm = document.querySelector("#signin-form")
const btnsiginForm = document.querySelector("#btn-signin-form")
// evento del boton para enviar datos al FireBase Auth
if (signinForm) {
    btnsiginForm.addEventListener("click", async (e) => {
        e.preventDefault()
        const email = signinForm["signin-email"].value
        const password = signinForm["signin-password"].value
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            const signInModal = document.querySelector("#SigninModal")
            const modal = bootstrap.Modal.getInstance(signInModal)
            modal.hide()
            showMessage(`Welcome ${userCredentials.user.email}`)
            setTimeout(() => {
                location.reload()
            }, 2000)
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
            }
            console.log(error.code)
        }
    })
}
