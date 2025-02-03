// NOTA: CAMBIAR LAS TABLAS A CONST

/* Decimal a binario, octal o hexadecimal */

function fromDecimal(numero, base) {
    var resultado = "";
    var divisor = base;
    const TABLA = {0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 
        10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"};

    try {
        if (isNaN(numero) || isNaN(base)) {
            throw new TypeError("Debe ser un número."); // asi porque js y los tipos
        }
        while (numero >= 1) {
            let resto = Math.floor(numero % divisor);
            let numero = numero / divisor;

            resultado = TABLA[resto] + String(resultado);
        }
    } catch (err) {
        console.log(err);
        return 1; /* que devuelva 1 porque falla el programa */
    }
    return resultado;
}

// fromDecimal(1300, 2)

/* Binario, octal o hexadecimal a decimal */

function toDecimal(numero, base) {
    var resultado = 0;
    var largo = String(numero).length;
    const TABLA = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, 
        "A":10, "B":11, "C":12, "D":13, "E":14, "F":15};

    const numeroArray = String(numero).split(""); // esto forma parte del forEach de despues

    if (![2, 8, 16].includes(base)) {
        console.log("La base indicada debe ser 2, 8 o 16.");
        return 1;
    } 

    for (let digito of String(numero)) {
        if (base == 2 && !(["0", "1"].includes(digito))) { // en js se niega y se usa lista.includes(valor) en lugar de valor not in lista
            console.log("El número indicado no es un binario.");
            return 1;
        }
        if (base == 8 && !(["0", "1", "2", "3", "4", "5", "6", "7"].includes(digito))) {
            console.log("El número indicado no es un octal.");
            return 1;
        }
        if (base == 16 && !(digito.toUpperCase() in TABLA)) {
            console.log("El número indicado no es un hexadecimal.");
            return 1;
        }
    }

    numeroArray.forEach((digito, indice) => { // esto es el equivalente al enum() de python, pero primero va el valor y luego el indice
        let posicion = largo - indice;
        let valor = parseInt(TABLA[digito.toUpperCase()]) * Math.pow(parseInt(base), parseInt(posicion-1));

        resultado = resultado + valor;
    });
    return resultado;
}

// toDecimal(101, 2)

/* Binario a octal */

function binaryToOctal(numero) {
    var resultado = "";
    const TABLA = {"000":0, "001":1, "010":2, "011":3, "100":4, "101":5, "110":6, "111":7};

    for (let digito of String(numero)) {
        if (!["0", "1"].includes(digito)) {
            console.log("El número indicado no es un binario.");
            return 1;
        }

    while (String(numero).length % 3 != 0) {
        numero = "0" + String(numero);
        }

    for (let indice = 0; indice < String(numero.length); indice+3) {
            valor = String(numero).slice(indice, indice+3);

            resultado = resultado + String(tabla[valor]);
        }
        return resultado;
    }
}

binaryToOctal(101110)
