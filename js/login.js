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
});
