let listaDePersonas = [
  ["dio@gmail.com", "1232131"],
  ["mora@gmail.com", "1232123231"],
];

function registrarPersonas(nuevoUsuario) {
  listaDePersonas.push(nuevoUsuario);
  console.log(listaDePersonas);
}

function getListaDePersonas() {
  return listaDePersonas;
}
