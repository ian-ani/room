/* CONVERSIONES */

/* Decimal a binario, octal o hexadecimal */

function fromDecimal(number, base) {
    var result = "";
    var divisor = base;
    const TABLE = {0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 
        10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"};

    if (isNaN(number) || isNaN(base)) {
        throw new TypeError("Debe ser un número.");
    };

    while (number >= 1) {
        let resto = Math.floor(number % divisor);
        number = number / divisor; // cuidado que esto estaba con un let y daba error

        result = TABLE[resto] + String(result);
    };
    return result;
};

/* Binario, octal o hexadecimal a decimal */

function toDecimal(number, base) {
    var result = 0;
    var numLength = String(number).length;
    const TABLE = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, 
        "A":10, "B":11, "C":12, "D":13, "E":14, "F":15};

    const numberArray = String(number).split(""); // esto forma parte del forEach de despues

    for (let digit of String(number)) {
        if (base == 2 && !(["0", "1"].includes(digit))) { 
            throw new Error("El número indicado no es un binario.");
        };
        if (base == 8 && !(["0", "1", "2", "3", "4", "5", "6", "7"].includes(digit))) {
            throw new Error("El número indicado no es un octal.");
        };
        if (base == 16 && !(digit.toUpperCase() in TABLE)) {
            throw new Error("El número indicado no es un hexadecimal.");
        };
    };

    numberArray.forEach((digit, index) => { 
        let position = numLength - index;
        let value = parseInt(TABLE[digit.toUpperCase()]) * Math.pow(parseInt(base), parseInt(position-1));

        result = result + value;
    });
    return result;
};

/* Binario a octal */

function binaryToOctal(number) {
    var result = "";
    const TABLE = {"000":0, "001":1, "010":2, "011":3, "100":4, "101":5, "110":6, "111":7};

    for (let digit of String(number)) {
        if (!["0", "1"].includes(digit)) {
            throw Error("El número indicado no es un binario.");
        };
    };

    while (String(number).length % 3 != 0) {
        number = "0" + String(number);
    };

    for (let index = 0; index < String(number).length; index+=3) {
        let value = String(number).slice(index, index+3);

        result = result + String(TABLE[value]);
    };
    return result;
};

/* Binario a hexadecimal */

function binaryToHex(number) {
    var result = "";
    const TABLE = {"0000":0, "0001":1, "0010":2, "0011":3, "0100":4, "0101":5, "0110":6, "0111":7, "1000": 8, "1001":9,
        "1010":"A", "1011":"B", "1100":"C", "1101":"D", "1110":"E", "1111":"F"};

    for (let digit of String(number)) {
        if (!["0", "1"].includes(digit)) {
            throw Error("El número indicado no es un binario.");
        };
    };
    
    while (String(number).length % 4 != 0) {
        number = "0" + String(number);
    };

    for (let index = 0; index < String(number).length; index+=4) {
        let value = String(number).slice(index, index+4);

        result = result + String(TABLE[value]);
    };
    return result;
};

/* Octal a binario */

function octalToBin(number) {
    var result = "";
    const TABLE = {"0":"000", "1":"001", "2":"010", "3":"011", "4":"100", "5":"101", "6":"110", "7":"111"};

    for (let digit of String(number)) {
        if (!["0", "1", "2", "3", "4", "5", "6", "7"].includes(digit)) {
            throw Error("El número indicado no es un octal.");
        };
    };

    for (let digit of String(number)) {
        result = String(result) + String(TABLE[digit]);
    };
    return result;
};

/* Octal a hexadecimal */

function octalToHex(number) {
    var binaryNumber = octalToBin(number);

    if (binaryNumber == null) {
        return null;
    };

    var hexNumber = binaryToHex(binaryNumber);

    if (hexNumber.startsWith("0")) {
        hexNumber = hexNumber.slice(1);
    };
    return hexNumber;
};

/* Hexadecimal a binario */

function hexToBin(number) {
    var result = "";
    const TABLE = {"0":"0000", "1":"0001", "2":"0010", "3":"0011", "4":"0100", "5":"0101", "6":"0110", "7":"0111",
        "8":"1000", "9":"1001", "A":"1010", "B":"1011", "C":"1100", "D":"1101", "E":"1110", "F":"1111"};

    for (let digit of String(number)) {
        if (!(Object.keys(TABLE)).includes(digit)) {
            throw Error("El número indicado no es un hexadecimal.");
        };
    };

    for (let digit of String(number)) {
        result = String(result) + String(TABLE[digit]);
    };
    return result;
};

/* Hexadecimal a octal */

function hexToOctal(number) {
    var binaryNumber = hexToBin(number);

    if (binaryNumber == null) {
        return null;
    };

    var octalNumber = binaryToOctal(binaryNumber);

    if (octalNumber.startsWith("0")) {
        octalNumber = octalNumber.slice(1);
    };
    return octalNumber;
};

/* LLAMAR FUNCIONES PARA EL HTML */

function convertBinary() {
    let number = document.getElementById("getBinary").value;
    let output = document.getElementById("outputBinary");
    let selector = document.getElementById("binaryTo");
    let valueSelector = selector.value;
    let result;

    switch (valueSelector) {
        case "octal":
            try {
                result = binaryToOctal(number);
            } catch (error) {
                result = error;
            };
            break;
        case "decimal":
            try {
                result = toDecimal(number, 2);
            } catch (error) {
                result = error;
            };
            break;
        case "hexadecimal":
            try {
                result = binaryToHex(number);
            } catch (error) {
                result = error;
            };
            break;
    };
    output.textContent = result;
};

function convertOctal() {
    let number = document.getElementById("getOctal").value;
    let output = document.getElementById("outputOctal");
    let selector = document.getElementById("octalTo");
    let valueSelector = selector.value;
    let result;

    switch (valueSelector) {
        case "binary":
            try {
                result = octalToBin(number);
            } catch (error) {
                result = error;
            };
            break;
        case "decimal":
            try { 
                result = toDecimal(number, 8);
            } catch (error) {
                result = error;
            };
            break;
        case "hexadecimal":
            try {
                result = octalToHex(number);
            } catch (error) {
                result = error;
            };
            break;
    };
    output.textContent = result;
};

function convertDecimal() {
    let number = document.getElementById("getDecimal").value;
    let output = document.getElementById("outputDecimal");
    let selector = document.getElementById("decimalTo");
    let valueSelector = selector.value;
    let result;

    switch (valueSelector) {
        case "binary":
            try {
                result = fromDecimal(number, 2);
            } catch (error) {
                result = error;
            };
            break;
        case "octal":
            try {
                result = fromDecimal(number, 8);
            } catch (error) {
                result = error;
            };
            break;
        case "hexadecimal":
            try {
                result = fromDecimal(number, 16);
            } catch (error) {
                result = error;
            };
            break;
    };
    output.textContent = result;
};

function convertHexadecimal() {
    let number = document.getElementById("getHex").value;
    let output = document.getElementById("outputHex");
    let selector = document.getElementById("hexTo");
    let valueSelector = selector.value;
    let result;

    switch (valueSelector) {
        case "binary":
            try {
                result = hexToBin(number);
            } catch (error) {
                result = error;
            };
            break;
        case "octal":
            try {
                result = hexToOctal(number);
            } catch (error) {
                result = error;
            };
            break;
        case "decimal":
            try {
                result = toDecimal(number, 16);
            } catch (error) {
                result = error;
            };
            break;
    };
    output.textContent = result;
};
