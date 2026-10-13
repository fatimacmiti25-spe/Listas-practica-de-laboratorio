class Nodo { // Definimos nodo
  constructor(turno) { // Recibimos turno
    this.turno = turno; // Guardamos turno
    this.siguiente = null; // Sin enlace
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo(10); // Primer turno
let b = new Nodo(20); // Segundo turno
let c = new Nodo(30); // Tercer turno
a.siguiente = b; // Unimos nodos
b.siguiente = c; // Unimos nodos
let actual = a; // Iniciamos búsqueda
let encontrado = false; // Estado inicial
while (actual !== null) { // Revisamos cada turno
  if (actual.turno === 20) { // Comparamos turno
    encontrado = true; // Sí lo encontramos
    break; // Dejamos de buscar
  } // Fin de condición
  actual = actual.siguiente; // Avanzamos
} // Fin de búsqueda
console.log('Encontrado:', encontrado); // Resultado
