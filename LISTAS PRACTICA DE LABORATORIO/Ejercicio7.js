class Nodo { // Definimos nodo doble
  constructor(turno) { // Recibimos turno
    this.turno = turno; // Guardamos número
    this.anterior = null; // Enlace anterior
    this.siguiente = null; // Enlace siguiente
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Turno por eliminar
let c = new Nodo(30); // Último turno
a.siguiente = b; // Unimos 10 con 20
b.anterior = a; // Enlace de regreso
b.siguiente = c; // Unimos 20 con 30
c.anterior = b; // Enlace de regreso
a.siguiente = c; // Saltamos el turno 20
c.anterior = a; // Ajustamos enlace anterior
b.anterior = null; // Desconectamos turno 20
b.siguiente = null; // Quitamos su otro enlace
let actual = a; // Iniciamos recorrido
while (actual !== null) { // Mostramos turnos restantes
  console.log(actual.turno); // Imprimimos turno
  actual = actual.siguiente; // Avanzamos
} // Terminamos

