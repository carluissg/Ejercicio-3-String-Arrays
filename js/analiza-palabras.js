/* Crea tu función aquí */

function analizaPalabras(palabras) {
    for (const [i, palabra] of palabras.entries()) {
        console.log("####");
        console.log("Palabra" + [i + 1] + "= " + palabra);
        console.log("Numero de Caracteres: " + palabra.length);
        console.log("Deletreo: " + palabra.split("").join("_"));
        if ((palabra.length % 2 === 0) && ((palabra.charAt(0) === (palabra.charAt(0).toUpperCase())))) {
            console.log("La palabra es par y empieza por mayúscula");
        } else if ((palabra.length % 2 === 1) && (palabra.charAt(0).toUpperCase())) {
            console.log("La palabra es impar y empieza por mayúscula");
        } else if ((palabra.length % 2 === 0) && (palabra.charAt(0))) {
            console.log("La palabra es par y no empieza por mayúscula");
        } else {
            console.log("La palabra es impar y no empieza por mayúscula");
        }
        if (palabra.includes("ble")) {
            console.log("La palabra sí contiene 'ble'");
        } else {
            console.log("La palabra no contiene 'ble'");
        }
    }
}



