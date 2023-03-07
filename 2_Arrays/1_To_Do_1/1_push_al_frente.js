// Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado.

function pushFront(array, value) {
    let arrayTemp = [...array];

    // Mover un lugar a la derecha todos los valores actuales
    for (let i = 0; i < arrayTemp.length; i++) {
        array[i + 1] = arrayTemp[i];
    }

    // Colocar en la posicion 0 el valor que se quiere poner enfrente
    array[0] = value;
    console.log(array);
}


// Test
let array = [5, 6, 7, 8, 9];
let value = 500;

pushFront(array, value);
