// Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena. 
// Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.

function getDigits(string) {
    let digits = "";
    for (let i = 0; i < string.length; i++) {
        // console.log("Posicion:", i, " Valor -> ", string[i], "-  Es un numero: ", !isNaN(parseInt(string[i])));
        if (!isNaN(parseInt(string[i]))) {
            digits += string[i];
        }
    }

    return digits;
}

// Test
let string = "0s1a3y5w7h9a2t4? 6! 8? 0";
console.log(getDigits(string))