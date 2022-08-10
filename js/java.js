//SUMA DE PRODUCTOS - COMENTADO POR SI ACASO
// let producto1;
// let producto2;
// let condition = true;
// let suma = 0;

// do {
//   suma = 0;
//   producto1 = "";
//   producto2 = "";
//   producto1 = prompt(
//     "Ingrese el producto que desea comprar (Mouse, Teclado, Monitor)"
//   ).toLowerCase();
//   producto2 = prompt(
//     "Ingrese el producto que desea comprar (Mouse, Teclado, Monitor)"
//   ).toLowerCase();
//   if (producto1 === "mouse") {
//     suma += 8500;
//   } else if (producto1 === "teclado") {
//     suma += 12000;
//   } else if (producto1 === "monitor") {
//     suma += 50000;
//   }

//   if (producto2 === "mouse") {
//     suma += 8500;
//   } else if (producto2 === "teclado") {
//     suma += 12000;
//   } else if (producto2 === "monitor") {
//     suma += 50000;
//   }
//   if (
//     (producto1 === "mouse" ||
//       producto1 === "teclado" ||
//       producto1 === "monitor") &&
//     (producto2 === "mouse" ||
//       producto2 === "teclado" ||
//       producto2 === "monitor")
//   ) {
//     condition = false;
//   }
// } while (condition === true);

// console.log("El precio total es: $" + suma);

// //SWITCH DE COLORES

// let color = prompt(
//   "Ingrese el color del producto que desee (Negro, Blanco, Gris)"
// );
// color = color.toLowerCase();

// switch (color) {
//   case "negro":
//     console.log(`Si, tenemos el color ${color} disponible`);
//     break;
//   case "gris":
//     console.log(`Si, tenemos el color ${color} disponible`);
//     break;
//   case "blanco":
//     console.log(`Si, tenemos el color ${color} disponible`);
//     break;
//   default:
//     alert("Seleccione un color disponible (Negro, Blanco, Gris)");
// }

//VARIABLES
const productos = [];
const IVA = 1.21;

//GENERA UN ID RANDOM
function crearID() {
  return parseInt(Math.random() * 1000);
}

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
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
  productos.push(new Producto(crearID(), "TECLADO RAZER HUNSTMAN TKL", 40000));
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
