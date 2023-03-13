// Escribe una función individual para quitar cadenas de longitud impar una matriz dada. La matriz contiene:

// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], cambia esta misma matriz a  ["Nope!","Its","Chris","."].

function removeEvenLenght(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            // Eliminar 
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(removeEvenLenght(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."]));