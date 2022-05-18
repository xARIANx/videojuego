import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonlogin = document.getElementById("btnlogin")
let alerta=document.getElementById("alerta")

botonlogin.addEventListener("click",function(evento){
    evento.preventDefault()
    console.log("haciendo un token")
    let email=document.getElementById("Email1login").value
    let password=document.getElementById("Passwordloguin").value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href="index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alerta.textContent="error al inciar secion verifique contraseña o gmail " 
        alerta.classList.add("alert-danger")

      });
    
})