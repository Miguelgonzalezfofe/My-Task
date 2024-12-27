import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from "./config/firebaseConfing.js"
import { showMessage } from "./showMessage.js"

const logOut = document.querySelector("#btn-logOut")
logOut.addEventListener("click", async () => {
    await signOut(auth)
    // redireccionar a la pagina de inicio
    window.location.href = "/src/index.html"
    showMessage("Sesion Cerrada","success")
})
