// Función para asignar texto a un elemento HTML
function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

// Asignar títulos y textos a elementos HTML
assignTextToElement('h1', 'Text Encryptor');
assignTextToElement('h3', "Your encrypted text:");

// Función para encriptar texto
function textEncrypt() {
    let userText = document.getElementById("userText").value.toUpperCase();
    let positions = 2;
    let modifiedtext = '';

    // Verifica si el texto contiene solo letras y espacios
    if (!/^[A-Z\s]+$/.test(userText)) {
        alert("Please enter only letters and spaces :-)");
        return;
    }

    // Encriptar el texto
    for (let i = 0; i < userText.length; i++) {
        let char = userText[i];
        if (char === ' ') {
            modifiedtext += ' '; // Dejar los espacios como están
        } else {
            let codigo = char.charCodeAt(0);
            let nuevoCodigo = ((codigo - 65 + positions) % 26) + 65;
            modifiedtext += String.fromCharCode(nuevoCodigo);
        }
    }

    // Mostrar el texto encriptado
    document.getElementById("modifiedtext").textContent = modifiedtext;
}

// Función para desencriptar u texto desconocio
function decryptTextUnknown() {
    let userText = document.getElementById("userText").value;
    let positions = 2;
    let modifiedtext = '';

    // VerificaR si el texto contiene solo letras y espacios
    if (!/^[A-Z\s]+$/.test(userText)) {
        alert("Please enter only capital letters and spaces :-)");
        return;
    }

    // Desencriptar el texto
    for (let i = 0; i < userText.length; i++) {
        let char = userText[i];
        if (char === ' ') {
            modifiedtext += ' '; // Deja los espacios como están
        } else {
            let codigo = char.charCodeAt(0);
            let nuevoCodigo = ((codigo - 65 - positions + 26) % 26) + 65;
            modifiedtext += String.fromCharCode(nuevoCodigo);
        }
    }

    // Mostrar el texto desencriptado
    document.getElementById("modifiedtext").textContent = modifiedtext;
}
// Función para desencriptar el texto encriptado
function textDecrypt() {
    let userText = document.getElementById("modifiedtext").textContent;
    let positions = 2;
    let modifiedtext = '';

    // VerificaR si el texto contiene solo letras y espacios
    if (!/^[A-Z\s]+$/.test(userText)) {
        alert("Please enter only capital letters and spaces :-)");
        return;
    }

    // Desencriptar el texto
    for (let i = 0; i < userText.length; i++) {
        let char = userText[i];
        if (char === ' ') {
            modifiedtext += ' '; // Deja los espacios como están
        } else {
            let codigo = char.charCodeAt(0);
            let nuevoCodigo = ((codigo - 65 - positions + 26) % 26) + 65;
            modifiedtext += String.fromCharCode(nuevoCodigo);
        }
    }

    // Mostrar el texto desencriptado
    document.getElementById("modifiedtext").textContent = modifiedtext;
}
