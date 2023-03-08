// Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.

// Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 25 (no 29).

function countWithoutSpaces(string) {

    let count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            count++;
        }
    }
    return count;
}

// Test
let string = "Amor, me estás volviendo loca";

console.log(countWithoutSpaces(string));

