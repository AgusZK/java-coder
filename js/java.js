//VARIABLES
const productos = [];
const IVA = 1.21;

//GENERA UN ID RANDOM
function crearID() {
  return parseInt(Math.random() * 1000);
}

class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
  precioFinal() {
    return "$" + parseFloat((this.precio * IVA).toFixed(2));
  }
}

//LISTA DE PRODUCTOS
function listaDeProductos() {
  productos.push(
    new Producto(crearID(), "MOUSE LOGITECH G PRO WIRELESS", 24000)
  );
  productos.push(new Producto(crearID(), "TECLADO RAZER HUNSTMAN", 40000));
  productos.push(
    new Producto(crearID(), "AURICULARES HYPERX CLOUD FLIGHT", 28000)
  );
  productos.push(new Producto(crearID(), "MONITTOR ZOWIE 2430 144HZ", 120000));
  productos.push(new Producto(crearID(), "MOUSE PAD LOGITECH G640", 5000));
  productos.push(new Producto(crearID(), "MOUSE HYPERX PULSEFIRE ", 9000));
  productos.push(new Producto(crearID(), "TECLADO HYPERX ALLOY FPS", 17000));
  productos.push(new Producto(crearID(), "AURICULARES LOGITECH G733", 25000));
}
listaDeProductos();

//TABLA DE PRODUCTOS
function verProductos() {
  productos.forEach((producto) => {
    console.table(producto);
  });
}

//AGREGAR PRODUCTO SI ES QUE QUIERE (AUNQUE NO ES MI IDEA)
function agregarProductos() {
  let id = crearID();
  let descripcion = prompt("Ingresa el nombre del producto").toUpperCase();
  let precio = parseInt(prompt("Ingresa el importe sin IVA"));
  productos.push(new Producto(id, descripcion, precio));
  console.table(productos);
}

//FILTRAR PRODUCTO
function buscarProducto() {
  let prod = prompt("Ingresa el producto que desea buscar:").toUpperCase();
  let resultado = productos.filter((producto) =>
    producto.nombre.includes(prod)
  );
  console.log("Resultados encontrados a partir de su busqueda:");
  console.table(resultado);
}

//EVENTOS
const btnListar = document.getElementById("listar");
//btnListar.addEventListener("click", verProductos());
btnListar.addEventListener("click", () => {
  verProductos();
});

//AGREGAR AL CARRITO
let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");

const botones = document.querySelectorAll(".btn.btn-primary.rounded-pill");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    añadirAlCarrito();
  });
}

function añadirAlCarrito() {
  cart.push(
    new Producto(
      crearID(),
      "LOGITECH GPRO SUPERLIGHT",
      24000,
      "https://logitechar.vteximg.com.br/arquivos/ids/157821-1000-1000/910-005879.png?v=637481514041530000"
    )
  );
  localStorage.setItem("cartProducts", JSON.stringify(cart));
  console.log(cart);
}
