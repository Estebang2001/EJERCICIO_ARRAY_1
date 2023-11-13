//Ejercicio 1: Crear un array y agregar elementos, ademas, obtener la cantidad de elementos de la lista.
let listaDeSuper = []

listaDeSuper [0] = "Old Spice"
listaDeSuper.push ("Jabon","Crema","Papel")

let ultimoElemento = listaDeSuper.length - 1

/* Ejercicio 2: En este ejercicio deberás crear un Arreglo con 5 amigos. Dos de ellos, deben repetirse. Luego:
Escribí un código que chequee si tenés algun amigo llamado Félix.
Si es así, deberá mostrar un mensaje que diga: "Tengo un amigo que se llama Félix", sino: "Sería bueno tener un amigo que se llame Félix".
Transformá tu código en una Función que reciba como Argumento cualquier nombre y verifique si tenés ese amigo o no (repitiendo las mismas frases que en el punto anterior). */

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"] 
let miAmigo = prompt("Hola, digita el nombre de tu amigo")
let i = amigos.indexOf(miAmigo)

function esAmigo (nombre) {
    if (nombre == -1) {
        console.log ("No es amigo mio")
    } else {
        console.log ("Es mi amigo!")
    }
}

let resultadoAmigo = esAmigo (i);
