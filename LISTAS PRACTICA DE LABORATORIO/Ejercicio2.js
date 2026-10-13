
class Nodo { // Creamos la clase Nodo
  constructor(turno) { // Recibimos un turno
    this.turno = turno; // Guardamos el número
    this.siguiente = null; // No hay siguiente nodo
  } // Cerramos constructor
} // Cerramos clase

let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Segundo turno
let c = new Nodo(30); // Tercer turno

a.siguiente = b; // Conectamos 10 con 20
b.siguiente = c; // Conectamos 20 con 30

let contador = 0; // Iniciamos el contador
let actual = a; // Empezamos en el primer nodo

while (actual !== null) { // Recorremos la lista
  contador++; // Sumamos un turno
  actual = actual.siguiente; // Avanzamos al siguiente
} // Terminamos el recorrido

console.log("Total de turnos:", contador); // Mostramos el total
