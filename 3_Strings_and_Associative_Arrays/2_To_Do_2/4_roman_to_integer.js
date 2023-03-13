// Entero a números romanos
/** Titular del 16 de septiembre de 2014: "Se ha encontrado una computadora antigua en un naufragio romano". 
 * Compuesto por 30 engranajes de bronce, su marco de madera presenta 2000 caracteres. 
 * Dada una cadena que contiene una representación en números romanos de un entero positivo, devuelve el entero. Recuerda que III es 3, DCIX es 609 y MXDII es 1492. */

function convertToInteger(roman) {
    let inInteger = 0;
    let symbols = roman.split('');
    let numericValues = [];

    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }


    // Obtener el valor de cada letra del numero romano ingresado
    for (let i = 0; i < symbols.length; i++) {
        const current = symbols[i];
        const next = symbols[i + 1];

        // Si el valor numerico de la letra actual es menor al valor numerico de la letra siguiente, el valor actual es negativo
        // Ej: IV, I = 1 y V=5, 1 es menor a 5, entonces -1 y 5, luego (-1)+(5) = 4, resulta IV : 4
        if (table[current] < table[next]) {
            numericValues.push(-table[current]);
        }else{
            numericValues.push(table[current]);
        }
    }

    // Sumar o restar los valores almacenados
    numericValues.forEach(value => {
        inInteger += value;
    });

    return inInteger;
}

// Test
console.log(convertToInteger('CXC'));//190
console.log(convertToInteger('XC'));//90
console.log(convertToInteger('CDXCIX'));//499
console.log(convertToInteger('DCIX'));//609
console.log(convertToInteger('MMXVIII'));//2018

