class Nodo { // Definimos nodo
  constructor(nombre) { // Recibimos nombre
    this.nombre = nombre; // Guardamos nombre
    this.siguiente = null; // Sin enlace inicial
  } // Cerramos constructor
} // Cerramos clase
let a = new Nodo('Ana'); // Primera estudiante
let b = new Nodo('Luis'); // Segundo estudiante
let c = new Nodo('Pedro'); // Tercer estudiante
a.siguiente = b; // Ana pasa a Luis
b.siguiente = c; // Luis pasa a Pedro
c.siguiente = a; // Pedro vuelve a Ana
let actual = a; // Empezamos con Ana
for (let i = 0; i < 5; i++) { // Simulamos cinco turnos
  console.log(actual.nombre); // Mostramos quién sigue
  actual = actual.siguiente; // Pasamos al siguiente
} // Terminamos
