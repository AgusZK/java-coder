let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");

const tableBody = document.querySelector("#table-body");
const botonVaciar = document.getElementById("botonVaciar");
const botonComprar = document.getElementById("botonComprar");
const carritoVacioEstetica = document.getElementById("carritoVacio");
const borrarTabla = document.getElementById("borrarTablaCarrito");

// Borrar each producto
const cartDelete = (productoId) => {
  const newCart = cartProducts.filter((producto) => producto.id !== productoId);
  console.log(newCart);
  localStorage.setItem("cartProducts", JSON.stringify(newCart));
  loadProduct();
};

// Cargar contenido
function loadProduct() {
  cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  tableBody.innerHTML = "";
  cartProducts.forEach((producto) => {
    tableBody.innerHTML += `<tr>
                                <th><img class="imgCarrito" src="../${producto.imagen}" alt="${producto.titulo}"/></th>
                                <th>${producto.titulo}</th>
                                <th>${producto.precio}</th>
                                  <th>
                                   <button onclick="cartDelete(${producto.id})"class="btn m-5 p-0 border-0 tachoBasura">
                                   <i class="fa-solid fa-trash"></i>
                                   </button>
                                  </th>
                                </th>
                            </tr>`;
  });
  if (localStorage.getItem("cartProducts") === "[]") {
    borrarTabla.classList.add("hide");
    carritoVacioEstetica.classList.remove("hide");
  }
}
loadProduct();

// Vaciar carrito de un click
botonVaciar.addEventListener("click", () => {
  localStorage.setItem("cartProducts", JSON.stringify([]));
  loadProduct();
});

// Comprar
let compras = JSON.parse(localStorage.getItem("comprasRealizadas") || "0");

botonComprar.addEventListener("click", () => {
  Swal.fire({
    background: "#1F2229",
    title: "¿Desea comprar estos productos?",
    html: `<div id="" class= "d-flex justify-content-center flex-direction-column"> 
            <ul id="listaProductosComprados" class="list-style-none">
              
            </ul>
           </div>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0b5ed7",
    cancelButtonColor: "#d33",
    cancelButtonText: "<span>Seguir mirando</span>",
    confirmButtonText: "Si, quiero comprarlos!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Hecho!", "", "success").finally(() => {});
      localStorage.setItem("cartProducts", JSON.stringify([]));
      loadProduct();
      compras = compras + 1;
      localStorage.setItem("comprasRealizadas", JSON.stringify(compras));
    }
  });
  const listaProductosComprados = document.getElementById(
    "listaProductosComprados"
  );
  cartProducts.forEach((producto) => {
    listaProductosComprados.innerHTML += `
    <li class= "text-white ">${producto.titulo}</li>
    `;
  });
});
