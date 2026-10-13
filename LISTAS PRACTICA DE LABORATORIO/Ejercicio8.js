class Nodo { // Definimos nodo
  constructor(turno) { // Recibimos turno
    this.turno = turno; // Guardamos número
    this.siguiente = null; // Sin enlace inicial
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Segundo turno
let c = new Nodo(30); // Tercer turno
a.siguiente = b; // Unimos 10 con 20
b.siguiente = c; // Unimos 20 con 30
c.siguiente = a; // Cerramos el círculo
let actual = a; // Comenzamos en 10
for (let i = 0; i < 3; i++) { // Tres turnos
  console.log(actual.turno); // Mostramos turno
  actual = actual.siguiente; // Avanzamos
} // Terminamos
