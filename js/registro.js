import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById("registro")
let alerta=document.getElementById("alerta")
let formulario=document.getElementById("contactForm")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let telefono=document.getElementById("phone").value
    let nombre=document.getElementById("name").value
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alerta.textContent="formulario exitoso"
        alerta.classList.add("alert-success")
        alerta.classList.remove("alert-danger","invisible")
        setTimeout(function(){
            alerta.classList.add("invisible")
            formulario.reset()
        }, 3000);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alerta.textContent="error en el formulario "+errorCode
        alerta.classList.add("alert-danger")
        setTimeout(function(){
            alerta.classList.add("invisible")
            formulario.reset()
        }, 3000);
        // ..
    });
        
})