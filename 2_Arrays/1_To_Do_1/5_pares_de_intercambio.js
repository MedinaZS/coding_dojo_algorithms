// Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
// Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. 
// Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] a [verdadero, "Brendan", 42]. 
// Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.

function intercambiar_pares(array) {

    // Recorrer en pares (2 en 2)
    for (let i = 0; i < array.length - 1; i += 2) {
        // Guardar el elemento actual
        let temp = array[i];
        // Colocar en la posicion actual el elemento siguiente
        array[i] = array[i + 1];
        // Colocar en la posicion siguiente lo que anteriormente era el actual
        array[i + 1] = temp;
    }

    console.log(array);
}

// Test
let array = [1, 2, 3, 4];
intercambiar_pares(array);

console.log("---------------------")

let array2 = ["Brendan", true, 42];
intercambiar_pares(array2);

