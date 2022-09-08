let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
const tableBody = document.querySelector("#table-body");

function loadProduct() {
  cartProducts.forEach((producto) => {
    tableBody.innerHTML += `<tr>
                                <th><img class="imgCarrito" src=${producto.imagen} alt=""/></th>
                                <th>${producto.titulo}</th>
                                <th>${producto.precio}</th>
                            </tr>`;
  });
}

function carritoVacio() {
  tableBody.innerHTML = `<tr>
                            <th class="textoCarritoVacio"> Tu carrito esta vacio </th>
                            </tr>`;
}

if (localStorage.getItem("cartProducts") === null) {
  carritoVacio();
} else {
  loadProduct();
}
