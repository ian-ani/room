function hideDefault(element) {
    const divID = ["binario", "octal", "decimal", "hexadecimal"];

    let p = document.getElementById("defecto");
        if (p) {
            p.setAttribute("hidden", true);
        };
    
    divID.forEach(function(elementId) {
        let element = document.getElementById(elementId);
        if (element) {
            element.setAttribute("hidden", true)
        };
    });
};

function showBinary() {
    hideDefault("binario");
    let p = document.getElementById("binario");
    if (p) {
        p.removeAttribute("hidden");
    };
};

function showOctal() {
    hideDefault();
    let p = document.getElementById("octal");
    if (p) {
        p.removeAttribute("hidden");
    };
};

function showDecimal() {
    hideDefault();
    let p = document.getElementById("decimal");
    if (p) {
        p.removeAttribute("hidden");
    };
};

function showHexadecimal() {
    hideDefault();
    let p = document.getElementById("hexadecimal");
    if (p) {
        p.removeAttribute("hidden");
    };
};