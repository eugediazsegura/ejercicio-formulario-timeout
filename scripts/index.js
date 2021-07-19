//const { Console } = require("console");

// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [{
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
let form = document.querySelector('#formLogin');
let loader = document.querySelector('#loader');
let btnLogin = document.querySelector('.login-btn');
let email = document.querySelector("#email-input");
let password = document.querySelector('#password-input');
let errorC = document.querySelector('#error-container');
let main = document.querySelector('main')
let regex = /^\w+([\w+|\.|\-]*\w+)*@\w([\w+|\.|\-]*\w+)*\.\w{2,4}$/;
let errores = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorC.classList.add('hidden');
  loader.classList.remove('hidden');
  setTimeout(() => {
    errores = [];
    errorC.innerHTML = ""
    validarEmail(email.value);
    validarUsuario(email.value, password.value);
    validarPassword(password.value);
    if (errores.length > 0) {
      loader.classList.add('hidden');
      errorC.classList.remove('hidden');;
      errores.forEach(error => {
        errorC.innerHTML += `<small>${error}</small>`
      });
    } else {
      form.classList.add('hidden')
      main.innerHTML = "<h1> Bienvenido al sitio 😀 </h1>"
    }

  }, 3000);
})

function validarEmail(value) {
  if (!regex.test(value) || value == "") {
    errores.push("Ingrese un email válido")
  }
}


function validarUsuario(emailValue, passValue) {
  let usuario = baseDeDatos.usuarios.find(e => e.email == emailValue)
  if (usuario == undefined) {
    errores.push("El usuario no existe")
  } else if (usuario.password != passValue) {
    errores.push("La contraseña es errónea")
  }
}

function validarPassword(passValue) {
  if (passValue.length < 5) {
    errores.push("La contraseña debe tener como mínimo 5 caracteres")
  }
}


// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */