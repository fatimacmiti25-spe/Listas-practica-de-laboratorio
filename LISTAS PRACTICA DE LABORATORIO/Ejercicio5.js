class Nodo { // Definimos nodo doble
  constructor(nombre) { // Recibimos nombre
    this.nombre = nombre; // Guardamos nombre
    this.anterior = null; // Enlace anterior
    this.siguiente = null; // Enlace siguiente
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo('Ana'); // Primera estudiante
let b = new Nodo('Luis'); // Segundo estudiante
let c = new Nodo('Maria'); // Tercera estudiante
a.siguiente = b; // Ana apunta a Luis
b.anterior = a; // Luis apunta a Ana
b.siguiente = c; // Luis apunta a Maria
c.anterior = b; // Maria apunta a Luis
let actual = a; // Iniciamos recorrido
while (actual !== null) { // Recorremos hacia adelante
  console.log(actual.nombre); // Mostramos nombre
  actual = actual.siguiente; // Avanzamos
} // Terminamos
