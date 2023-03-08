// Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.

function removeShorterStrings(array, length) {

    for (let i = 0; i < array.length; i++) {
        
        if (array[i].length < length) {
            array.splice(i, 1); // Eliminar el elemento
            i--; // Como se elimino volver un index atras
        }
    }

    return array;
}

// Test
let stringArray = ["Mario", "Como estas", "Nuevo", "Si", "Bye"];
let length = 4;

console.log(removeShorterStrings(stringArray, length));