/* CONVERSIONES */

/* Decimal a binario, octal o hexadecimal */

function fromDecimal(numero, base) {
    var resultado = "";
    var divisor = base;
    const TABLA = {0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 
        10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"};

    try {
        if (isNaN(numero) || isNaN(base)) {
            throw new TypeError("Debe ser un número."); // asi porque js y los tipos
        };
        while (numero >= 1) {
            let resto = Math.floor(numero % divisor);
            numero = numero / divisor; // cuidado que esto estaba con un let y eso es incorrecto

            resultado = TABLA[resto] + String(resultado);
        };
    } catch (err) {
        console.log(err);
        return null;
    };
    return resultado;
};

// fromDecimal(1300, 2);

/* Binario, octal o hexadecimal a decimal */

function toDecimal(numero, base) {
    var resultado = 0;
    var largo = String(numero).length;
    const TABLA = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, 
        "A":10, "B":11, "C":12, "D":13, "E":14, "F":15};

    const numeroArray = String(numero).split(""); // esto forma parte del forEach de despues

    if (![2, 8, 16].includes(base)) {
        console.log("La base indicada debe ser 2, 8 o 16.");
        return null;
    };

    for (let digito of String(numero)) {
        if (base == 2 && !(["0", "1"].includes(digito))) { // en js se niega y se usa lista.includes(valor) en lugar de valor not in lista
            console.log("El número indicado no es un binario.");
            return null;
        };
        if (base == 8 && !(["0", "1", "2", "3", "4", "5", "6", "7"].includes(digito))) {
            console.log("El número indicado no es un octal.");
            return null;
        };
        if (base == 16 && !(digito.toUpperCase() in TABLA)) {
            console.log("El número indicado no es un hexadecimal.");
            return null;
        };
    };

    numeroArray.forEach((digito, indice) => { // esto es el equivalente al enum() de python, pero primero va el valor y luego el indice
        let posicion = largo - indice;
        let valor = parseInt(TABLA[digito.toUpperCase()]) * Math.pow(parseInt(base), parseInt(posicion-1));

        resultado = resultado + valor;
    });
    return resultado;
};

// toDecimal(101, 2);

/* Binario a octal */

function binaryToOctal(numero) {
    var resultado = "";
    const TABLA = {"000":0, "001":1, "010":2, "011":3, "100":4, "101":5, "110":6, "111":7};

    for (let digito of String(numero)) {
        if (!["0", "1"].includes(digito)) {
            console.log("El número indicado no es un binario.");
            return null;
        };
    };

    while (String(numero).length % 3 != 0) {
        numero = "0" + String(numero);
    };

    for (let indice = 0; indice < String(numero).length; indice+=3) {
        let valor = String(numero).slice(indice, indice+3);

        resultado = resultado + String(TABLA[valor]);
    };
    return resultado;
};

// binaryToOctal(101110);

/* Binario a hexadecimal */

function binaryToHex(numero) {
    var resultado = "";
    const TABLA = {"0000":0, "0001":1, "0010":2, "0011":3, "0100":4, "0101":5, "0110":6, "0111":7, "1000": 8, "1001":9,
        "1010":"A", "1011":"B", "1100":"C", "1101":"D", "1110":"E", "1111":"F"};

    for (let digito of String(numero)) {
        if (!["0", "1"].includes(digito)) {
            console.log("El número indicado no es un binario.");
            return null;
        };
    };
    
    while (String(numero).length % 4 != 0) {
        numero = "0" + String(numero);
    };

    for (let indice = 0; indice < String(numero).length; indice+=4) {
        let valor = String(numero).slice(indice, indice+4);

        resultado = resultado + String(TABLA[valor]);
    };
    return resultado;
};

// binaryToHex(10011100);

/* Octal a binario */

function octalToBin(numero) {
    var resultado = "";
    const TABLA = {"0":"000", "1":"001", "2":"010", "3":"011", "4":"100", "5":"101", "6":"110", "7":"111"};

    for (let digito of String(numero)) {
        if (!["0", "1", "2", "3", "4", "5", "6", "7"].includes(digito)) {
            console.log("El número indicado no es un octal.");
            return null;
        };
    };

    for (let digito of String(numero)) {
        resultado = String(resultado) + String(TABLA[digito]);
    };
    return resultado;
};

// octalToBin(35)

/* Octal a hexadecimal */

function octalToHex(numero) {
    var bin_numero = octalToBin(numero);

    console.log(bin_numero);

    if (bin_numero == null) {
        return null;
    };

    var hex_numero = binaryToHex(bin_numero);

    if (hex_numero.startsWith("0")) {
        hex_numero = hex_numero.slice(1);
    };
    return hex_numero;
};

// octalToHex(15)

/* Hexadecimal a binario */

function hexToBin(numero) {
    var resultado = "";
    const TABLA = {"0":"0000", "1":"0001", "2":"0010", "3":"0011", "4":"0100", "5":"0101", "6":"0110", "7":"0111",
        "8":"1000", "9":"1001", "A":"1010", "B":"1011", "C":"1100", "D":"1101", "E":"1110", "F":"1111"};

    for (let digito of String(numero)) {
        if (!(Object.keys(TABLA)).includes(digito)) {
            console.log("El número indicado no es un hexadecimal.");
            return null;
        };
    };

    for (let digito of String(numero)) {
        resultado = String(resultado) + String(TABLA[digito]);
    };
    return resultado;
};

// hexToBin("1E");

/* funcion autoejecutable */

// function(numero) {}("1E"); no hace falta poner el nombre de la funcion

/* Hexadecimal a octal */

function hexToOctal(numero) {
    var bin_numero = hexToBin(numero);

    if (bin_numero == null) {
        return null;
    };

    var octal_numero = binaryToOctal(bin_numero);

    if (octal_numero.startsWith("0")) {
        octal_numero = octal_numero.slice(1);
    };
    return octal_numero;
};

// hexToOctal("C");

/* LLAMAR FUNCIONES PARA EL HTML */

function convertBinary() {
    let numero = document.getElementById("getBinario").value;
    let output = document.getElementById("outputBinario");
    let selector = document.getElementById("binaryTo");
    let valorSelector = selector.value;
    let resultado;

    switch (valorSelector) {
        case "octal":
            resultado = binaryToOctal(numero);
            break;
        case "decimal":
            resultado = toDecimal(numero, 2);
            break;
        case "hexadecimal":
            resultado = binaryToHex(numero);
            break;
    };
    output.textContent = resultado;
};

function convertOctal() {
    let numero = document.getElementById("getOctal").value;
    let output = document.getElementById("outputOctal");
    let selector = document.getElementById("octalTo");
    let valorSelector = selector.value;
    let resultado;

    switch (valorSelector) {
        case "binario":
            resultado = octalToBin(numero);
            break;
        case "decimal":
            resultado = toDecimal(numero, 8);
            break;
        case "hexadecimal":
            resultado = octalToHex(numero);
            break;
    };
    output.textContent = resultado;
};

function convertDecimal() {
    let numero = document.getElementById("getDecimal").value;
    let output = document.getElementById("outputDecimal");
    let selector = document.getElementById("decimalTo");
    let valorSelector = selector.value;
    let resultado;

    switch (valorSelector) {
        case "binario":
            resultado = fromDecimal(numero, 2);
            break;
        case "octal":
            resultado = fromDecimal(numero, 8);
            break;
        case "hexadecimal":
            resultado = fromDecimal(numero, 16);
            break;
    };
    output.textContent = resultado;
};

function convertHexadecimal() {
    let numero = document.getElementById("getHex").value;
    let output = document.getElementById("outputHex");
    let selector = document.getElementById("hexTo");
    let valorSelector = selector.value;
    let resultado;

    switch (valorSelector) {
        case "binario":
            resultado = hexToBin(numero);
            break;
        case "octal":
            resultado = hexToOctal(numero);
            break;
        case "decimal":
            resultado = toDecimal(numero, 16);
            break;
    };
    output.textContent = resultado;
};

// Si falla no hay excepcion, hay que mostrar el error al usuario