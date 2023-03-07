// Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
// Haz esto sin utilizar métodos de matriz integrados. 
// Puedes pensar en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).

function insertAt(array, index ,valor) {
    let arrayTemp = [...array];
    
    // Mover los elementos hacia la derecha desde el indice + 1  que se quiere ingresar
    for (let i = index; i < arrayTemp.length; i++) {
        array[i + 1] = arrayTemp[i];
    }

    // Colocar el valor en el indice
    array[index] = valor;

    console.log(array);
}

// Test
let array = [5, 6, 7, 8, 9];
let index = 2;
let valor = 200;

insertAt(array, index, valor);