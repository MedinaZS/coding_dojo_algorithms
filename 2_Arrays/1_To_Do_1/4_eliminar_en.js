// Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
// Haz esto sin usar métodos de matriz integrados, excepto pop(). 
// Piensa en popFront(arr) como equivalente a removeAt(arr, 0).

function removeAt(array, indice) {
    // Obtener el valor a eliminar
    let eliminado = array[indice];

    // Mover todos los elementos hacia la izquierda desde el indice, por ejemplo 1,2,3 indice 1, en el indice 1 se coloca lo que esta siguiente (indice 2), asi sucesivamente
    for (let i = indice; i < array.length; i++) {
        array[i] = array[i + 1];
    }

    // Eliminar el ultimo elemento que queda en undefined
    array.pop();

    // Retornar el valor que se elimino
    return eliminado;
}

// Test
let array = [5, 6, 7, 200, 9];
let indice = 3;

console.log(removeAt(array, indice));



