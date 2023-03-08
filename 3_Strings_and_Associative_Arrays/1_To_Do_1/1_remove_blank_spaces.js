// Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
// Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".

function removeBlankSpaces(string) {
    let stringTemp = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            stringTemp += string[i];
        }
    }

    return stringTemp;
}

// Test
let string = "Pl ayTha tF u nkyM usi c";
console.log(removeBlankSpaces(string))
