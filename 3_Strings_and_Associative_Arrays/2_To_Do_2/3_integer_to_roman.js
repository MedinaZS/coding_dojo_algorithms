// Entero a números romanos
// Dado un entero positivo menor que 4000, devuelve una cadena que contenga ese valor en representación de números romanos. 
// En esta representación, I es 1, V es 5, X es 10, L = 50, C = 100, D = 500 y M = 1000. Recuerda que 4 es IV, 349 es CCCIL y 444 es CDXLIV.

function convertToRoman(num) {
    let inRoman = '';
    let table = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let keys = Object.keys(table);

    // Ir restando los numeros
    for (let i = keys.length - 1; i >= 0; i--) {
        let key = keys[i];

        // Si el numero ingresado es mayor o igual a los presentes en la tabla 
        while (num >= table[key]) {
            // Agregar su simbologia 
            inRoman += key;
            // Restar al numero ingresado el valor numerico del simbolo
            num -= table[key];
        }
    }
    return inRoman;
}

// Test
console.log(convertToRoman(190));
console.log(convertToRoman(90));
console.log(convertToRoman(499));
console.log(convertToRoman(2018));

