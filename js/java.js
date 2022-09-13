//VARIABLES

//FILTRAR PRODUCTO
// function buscarProducto() {
//   let prod = prompt("Ingresa el producto que desea buscar:").toUpperCase();
//   let resultado = productos.filter((producto) =>
//     producto.nombre.includes(prod)
//   );
//   console.log("Resultados encontrados a partir de su busqueda:");
//   console.table(resultado);
// }

// const botones = document.querySelectorAll(".btn.btn-primary.rounded-pill");
// for (let i = 0; i < botones.length; i++) {
//   botones[i].addEventListener("click", () => {
//     añadirAlCarrito();
//   });
// }

//REDIRECT AL LOG IN

function redirectLogIn() {
  window.location.href = "pages/mi-cuenta.html";
}
const logeado = localStorage.getItem("Correo:");
if (logeado === null) {
  redirectLogIn();
}

const datosJSON = "js/productos.json";

// const pedirDatos = async () => {
//   const response = await fetch(datosJSON);
//   const data = await response.json();
//   return data;
// };

const contenedores = document.querySelector(".row");
const cargarContenido = async () => {
  const response = await fetch(datosJSON);
  const data = await response.json();
  data.forEach((producto) => {
    contenedores.innerHTML += `
          <div class="card m-3" style="width: 15rem">
          <div class="imgHeight">
            <img
              src="${producto.imagen}"
              class="card-img-top"
              alt="${producto.titulo}"
            />
          </div>
          <div class="card-body p-1">
            <h5 class="card-title">${producto.titulo}</h5>
            <div class="divPrecio">
              <h6 class="card-subtitle mb-2 text-muted">${producto.precio}</h6>
              <button onclick="añadirAlCarrito('${producto.imagen}','${producto.titulo}', '${producto.precio}')" href="#" class="btn btn-primary rounded-pill">
                <i class="fa-solid fa-cart-shopping color-white"></i>
              </button>
            </div>
          </div>
        </div>`;
  });
};
cargarContenido();

//AGREGAR AL CARRITO
let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");

const carritoSucess = (producto) => {
  Swal.fire({
    width: "400px",
    background: "#324ce4",
    position: "top-end",
    icon: "success",
    title: `Has añadido ${producto} al carrito`,
    showConfirmButton: false,
    timer: 1300,
  });
};

function añadirAlCarrito(imagen, titulo, precio) {
  const nuevoProducto = {
    imagen: imagen,
    titulo: titulo,
    precio: precio,
    id: Date.now(),
  };
  cart = [...cart, nuevoProducto];
  localStorage.setItem("cartProducts", JSON.stringify(cart));
  console.log(cart);
  carritoSucess(titulo);
}
