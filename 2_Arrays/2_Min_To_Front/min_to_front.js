// Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, desplazando hacia atrás los elementos que estaban antes. 
// De lo contrario, no cambies el orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. 
// Como siempre, haz esto sin usar funciones integradas.

function pushFront(array, value) {

    // Mover un lugar a la derecha todos los valores actuales
    // [1, 2, 3, ..] -> [1, 1, 2, 3]
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    // Colocar en la posicion 0 el valor que se quiere poner enfrente
    array[0] = value;
}

function removeAt(array, indice) {
    // Obtener el valor a eliminar
    let eliminado = array[indice];
    // Mover todos los elementos hacia la izquierda desde el indice, por ejemplo 1,2,3 indice 1, en el indice 1 se coloca lo que esta siguiente (indice 2), asi sucesivamente
    for (let i = indice; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    // Eliminar el ultimo elemento que queda en undefined
    array.pop();
}


function minToFront(array) {
    let min = array[0];
    let minIndice = 0;

    for (let i = 0; i < array.length; i++) {
        // Obtener el valor mas chico y su indice
        if (array[i] < min) {
            min = array[i];
            minIndice = i;
        }
    }

    // Mover el valor mas chico al frente
    // Remover al minimo de su posicion
    removeAt(array, minIndice)
    // Colocarlo al frente
    pushFront(array, min);

    console.log(array);
}

// Test
let array = [4, 2, 1, 3, 5];
minToFront(array);
