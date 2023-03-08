// Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula). 
// Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
// Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN".

function getAcronyms(string) {
    let acronym = "";
    let arrayTemp = string.split(" ");

    for (let i = 0; i < arrayTemp.length; i++) {
        // Poner en mayuscula la primera letra de cada palabra
        acronym += arrayTemp[i][0].toUpperCase();

        // Si hay un punto en algun lado agregar un guion
        if (arrayTemp[i].split(".").length > 1) acronym += "-";
    }

    return acronym;
}

// Test
let string = "no hay almuerzo gratis. Debes pagar por tu comida";
console.log(getAcronyms(string));

let string2 = "En vivo desde Nueva York, es sábado por la noche";
console.log(getAcronyms(string2));