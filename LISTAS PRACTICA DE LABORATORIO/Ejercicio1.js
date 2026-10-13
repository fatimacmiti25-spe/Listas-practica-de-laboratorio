class Nodo { // Definimos un nodo
  constructor(turno) { // Recibimos el turno
    this.turno = turno; // Guardamos el número
    this.siguiente = null; // Aún no hay enlace
  } // Cerramos constructor
} // Cerramos clase

let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Segundo turno
let c = new Nodo(30); // Tercer turno

a.siguiente = b; // Unimos 10 con 20
b.siguiente = c; // Unimos 20 con 30

let actual = a; // Comenzamos al inicio
while (actual !== null) { // Recorremos hasta el final
  console.log(actual.turno); // Mostramos turno
  actual = actual.siguiente; // Pasamos al siguiente
} // Terminamos recorrido