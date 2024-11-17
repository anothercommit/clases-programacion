// Implementar una función "countConsonants" que tome una cadena
// y retorne por consola la cantidad de consonantes
// presentes en la misma.

let palabra = "parlante";
let consonantes = 0;

for (let letra of palabra) {
    if (
        letra != "a" &&
        letra != "e" &&
        letra != "i" &&
        letra != "o" &&
        letra != "u"
    ) {
        ++consonantes;
    }
}

console.log("Numero de consonantes: " + consonantes);
// -> Numero de consonantes: 5
