class Nodo { // Definimos nodo
  constructor(nombre) { // Recibimos nombre
    this.nombre = nombre; // Guardamos nombre
    this.siguiente = null; // Sin enlace inicial
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo('Ana'); // Primer estudiante
let b = new Nodo('Luis'); // Segundo estudiante
let c = new Nodo('Pedro'); // Tercer estudiante
a.siguiente = b; // Conectamos primero y segundo
b.siguiente = c; // Conectamos segundo y tercero
c.siguiente = a; // Cerramos el círculo
let actual = a; // Iniciamos búsqueda
let encontrado = false; // Aún no se encuentra
for (let i = 0; i < 3; i++) { // Revisamos tres nodos
  if (actual.nombre === 'Luis') { // Comparamos nombre
    encontrado = true; // Lo encontramos
    break; // Terminamos búsqueda
  } // Cerramos condición
  actual = actual.siguiente; // Avanzamos
} // Terminamos recorrido
console.log('Encontrado:', encontrado); // Resultado
