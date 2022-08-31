const mensajeSucess = () =>
  Swal.fire({
    background: "#1F2229",
    position: "center",
    icon: "success",
    title: "Has iniciado sesión",
    showConfirmButton: false,
    timer: 2500,
  });

const mensajeError = () =>
  Swal.fire({
    background: "#1F2229",
    icon: "error",
    title: "Algo ha salido mal...",
    text: "Completa los campos correctamente",
    color: "#fff",
  });

let btnLogIn = document.getElementById("btnIniciarSesion");
btnLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  let nuevaPersona = [],
    correo = "",
    contraseña = "";
  correo = document.querySelector("#correoInput").value;
  contraseña = document.querySelector("#contraseñaInput").value;
  localStorage.setItem("Correo:", correo);
  localStorage.setItem("Contraseña:", contraseña);
  if (correo.length > 5 && contraseña.length > 3) {
    mensajeSucess();
  } else {
    mensajeError();
  }
});
