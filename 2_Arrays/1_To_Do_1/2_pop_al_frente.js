// Dada una matriz, elimina y devuelve el valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().

function popFront(array) {
    // Obtener el valor del principio
    let principio = array[0];

    // Mover todos los elementos hacia la izquierda
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }

    // Eliminar el ultimo elemento que queda en undefined
    array.pop();

    // Retornar el valor del principio
    return principio;
}

// Test
let array = [5, 6, 7, 8, 9];

console.log(popFront(array));



