
class Nodo { // Definimos nodo doble
  constructor(turno) { // Recibimos turno
    this.turno = turno; // Guardamos número
    this.anterior = null; // Enlace anterior
    this.siguiente = null; // Enlace siguiente
  } // Cerramos constructor
} // Cerramos clase

let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Segundo turno
let c = new Nodo(30); // Tercer turno

a.siguiente = b; // Enlace hacia adelante
b.anterior = a; // Enlace hacia atrás
b.siguiente = c; // Enlace hacia adelante
c.anterior = b; // Enlace hacia atrás

let actual = c; // Comenzamos al final

while (actual !== null) { // Recorremos hacia atrás
  console.log(actual.turno); // Mostramos turno
  actual = actual.anterior; // Retrocedemos
} // Terminamos
