// VARIABLES PARA CARTELES
const mensajeSucess = () => {
  Swal.fire({
    background: "#1F2229",
    position: "center",
    icon: "success",
    title: "Has iniciado sesión",
    showConfirmButton: false,
    timer: 2500,
  }).finally(() => {
    window.location.href = "../index.html";
  });
};

const mensajeError = () => {
  Swal.fire({
    background: "#1F2229",
    icon: "error",
    title: "Algo ha salido mal...",
    text: "Completa los campos correctamente",
    color: "#fff",
  });
};

// BOTON LOG IN
let btnLogIn = document.getElementById("btnIniciarSesion");
btnLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  let nuevaPersona = [],
    correo = "",
    contraseña = "",
    nombre = "",
    apellido = "";
  correo = document.querySelector("#correoInput").value;
  contraseña = document.querySelector("#contraseñaInput").value;
  nombre = document.querySelector("#nombreInput").value;
  apellido = document.querySelector("#apellidoInput").value;
  localStorage.setItem("Correo:", correo);
  localStorage.setItem("Contraseña:", contraseña);
  localStorage.setItem("Nombre:", nombre);
  localStorage.setItem("Apellido:", apellido);
  if (
    correo.length > 5 &&
    contraseña.length > 3 &&
    nombre.length > 2 &&
    apellido.length > 2
  ) {
    mensajeSucess();
  } else {
    mensajeError();
  }
});

// OCULTAR FORM CUANDO LOGEAS Y CARD DE PROFILE
let nombre = localStorage.getItem("Nombre:");
let apellido = localStorage.getItem("Apellido:");

function hideForm() {
  let ocultarForm = document.getElementById("ocultar-form");
  ocultarForm.classList.add("hide");
}

const logeadito = localStorage.getItem("Correo:");
const contenedorPerfil = document.getElementById("perfilContenedor");

let compras = JSON.parse(localStorage.getItem("comprasRealizadas") || "0");
if (localStorage.getItem("Correo:").value !== []) {
  hideForm();
  contenedorPerfil.innerHTML += `<div class="cardProfile p-4">
          <div
            class="image d-flex flex-column justify-content-center align-items-center"
          >
            <button class="btn btn-secondary">
              <img src="../images/userHombre.png" height="100" width="100" />
            </button>
            <span class="name mt-3">${nombre}</span>
            <span class="name mb-3">${apellido}</span>
            <div
              class="d-flex flex-row justify-content-center align-items-center gap-2"
            >
              <span class="idd1 mt-2">${logeadito}</span>
              <span><i class="fa fa-copy cosito"></i></span>
            </div>
            <div
              class="d-flex flex-row justify-content-center align-items-center mt-3"
            >
              <span class="number m-2">${compras} </span><span class="follow">Compras realizadas</span></span>
            </div>
            
            <div class="px-2 rounded mt-1 date">
              <span class="join">Se unio Hoy</span>
            </div>
                <div class="d-flex mt-5">
                  <button class="btn1 text-white" id="btnCerrarSesion">Cerrar Sesion</button>
                </div>
          </div>

           <div class="text mt-4">
              <span>
                Puedes encontrar al creador de esta pagina aqui
              </span>
            </div>
            <div
              class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"
            >
              <span>
                <a href="https://twitter.com/aguszkspam" target="_blank">
                <i class="fa fa-twitter"></i></span>
                </a> 
              <span>
                <a href="https://www.instagram.com/aguszk_/" target="_blank">
                <i class="fa fa-instagram"></i></span>
                </a>
            </div>
        </div>
      </div>`;
  let btnCerrarSesion = document.getElementById("btnCerrarSesion");
  btnCerrarSesion.addEventListener("click", () => {
    Swal.fire({
      background: "#1F2229",
      title: "¿Desea cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0b5ed7",
      cancelButtonColor: "#d33",
      cancelButtonText: "<span>No, no la cierres</span>",
      confirmButtonText: "Si, cierrala!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Correo:");
        Swal.fire("Hecho!", "", "success").finally(() => {
          document.location.reload();
        });
      }
    });
  });
}
