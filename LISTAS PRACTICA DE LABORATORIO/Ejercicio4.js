class Nodo { // Definimos nodo
  constructor(turno) { // Recibimos turno
    this.turno = turno; // Guardamos número
    this.siguiente = null; // Sin enlace
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo(30); // Primer turno
let b = new Nodo(10); // Segundo turno
let c = new Nodo(20); // Tercer turno
a.siguiente = b; // Primer enlace
b.siguiente = c; // Segundo enlace
let actual = a; // Iniciamos ordenamiento
while (actual !== null) { // Recorremos nodos
  let otro = actual.siguiente; // Siguiente para comparar
  while (otro !== null) { // Comparamos los restantes
    if (actual.turno > otro.turno) { // Revisamos orden
      let temporal = actual.turno; // Guardamos dato
      actual.turno = otro.turno; // Cambiamos primero
      otro.turno = temporal; // Cambiamos segundo
    } // Fin de condición
    otro = otro.siguiente; // Avanzamos comparación
  } // Fin del ciclo interior
  actual = actual.siguiente; // Avanzamos nodo
} // Fin de ordenamiento
actual = a; // Volvemos al inicio
while (actual !== null) { // Mostramos lista
  console.log(actual.turno); // Imprimimos turno
  actual = actual.siguiente; // Avanzamos
} // Fin de impresión
