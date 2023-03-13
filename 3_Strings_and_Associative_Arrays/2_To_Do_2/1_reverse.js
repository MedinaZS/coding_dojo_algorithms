// Implementa reverseString(str) que, dada una cadena, devuelve esa cadena con los caracteres invertidos.

// Dado "criatura", devuelve "arutairc". Por tentador que parezca, ¡no uses reverse() que está incorporado!



function reverseString(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

// Test
let str = "criatura";

console.log(reverseString(str))