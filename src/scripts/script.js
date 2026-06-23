// ==========================
// DATOS DE PRUEBA
// ==========================

const usuarioCorrecto = "admin";
const passwordCorrecta = "1234";

// ==========================
// AL CARGAR LA PÁGINA
// ==========================

window.onload = function () {

    const sesion = sessionStorage.getItem("sesion");

    if (sesion === "activa") {
        mostrarDashboard();
    }

    // Evento para el botón de subir archivo
    const botonSubir = document.querySelector(".upload button");

    if (botonSubir) {
        botonSubir.addEventListener("click", subirArchivo);
    }

};

// ==========================
// LOGIN
// ==========================

function login() {

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (usuario === "" || password === "") {

        mensaje.style.color = "red";
        mensaje.innerHTML = "Complete todos los campos.";

        return;
    }

    if (usuario === usuarioCorrecto && password === passwordCorrecta) {

        sessionStorage.setItem("sesion", "activa");

        mostrarDashboard();

    } else {

        mensaje.style.color = "red";
        mensaje.innerHTML = "Usuario o contraseña incorrectos.";

    }

}

// ==========================
// MOSTRAR DASHBOARD
// ==========================

function mostrarDashboard() {

    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

}

// ==========================
// CERRAR SESIÓN
// ==========================

function logout() {

    sessionStorage.removeItem("sesion");

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login").style.display = "flex";

    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("mensaje").innerHTML = "";

}

// ==========================
// SUBIR ARCHIVO (SIMULACIÓN)
// ==========================

function subirArchivo() {

    const archivo = document.querySelector(".upload input");

    if (archivo.files.length === 0) {

        alert("Seleccione un archivo.");

        return;
    }

    const nombreArchivo = archivo.files[0].name;

    alert("Archivo \"" + nombreArchivo + "\" subido correctamente.");

    archivo.value = "";

}