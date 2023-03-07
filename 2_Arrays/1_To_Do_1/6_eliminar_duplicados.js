// Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
// Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. 
// Dada una matriz ordenada, elimina los valores duplicados. 
// Debido a que los elementos de la matriz ya están en orden, todos los valores duplicados se agruparán. 
// Al igual que con todos estos desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.

// Segundo: resuelve esto sin usar ningún bucle anidado.

function removeDuplicates(array) {


    // Recorrer el array
    for (let i = 0; i < array.length; i++) {
        console.log("Valor i : ", i)

        // Si el actual es igual al de al lado 
        if (array[i] === array[i + 1]) {
            // Eliminar el de al lado moviendo a la izquierda todos los elementos 1 espacio desde el indice donde son iguales
            // Ejemplo: 1,1,2,3 -> actual por el de al lado -> 1,2,3
            for (let j = i; j < array.length; j++) {
                array[j] = array[j + 1];
            }
            // Eliminar el ultimo elemento disminuyendo el lenght del array (Porque queda en undefined)
            array.length -= 1;
            // Disminuir el iterador por si hay mas de 1 duplicado debe volver a verificar la misma posicion 
            i--;
        }
    }
    console.log(array);
}

// Test
let array = [];
removeDuplicates(array);
