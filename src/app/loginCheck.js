const loggedOut = document.querySelectorAll(".logged-Out")
const loggedIn = document.querySelectorAll(".logged-In")
const nameUser = document.querySelectorAll(".nombre-usuario")

export const loginCheck = (user) => {
    if (user) {

        loggedIn.forEach(link => link.style.display = "block")
        loggedOut.forEach(link => link.style.display = "none")
        nameUser ? nameUser.forEach(name => name.innerHTML = `${user.email}`) : "user"

        console.log(`sesion de ${user.email}`)


    } else {
        loggedIn.forEach(link => link.style.display = "none")
        loggedOut.forEach(link => link.style.display = "block")
        console.log("sesion Cerrada")
    }
}