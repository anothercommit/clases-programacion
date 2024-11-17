/* Actividad:
 * Hacé un programa que itere por un arreglo de numeros
 * y que añada a un nuevo arreglo cada numero par o igual a 1.
 * Si el ultimo elemento del nuevo arreglo es mayor o igual a 4, eliminarlo.
 * Mostrar los elementos del nuevo arreglo por consola. */

const arr = [1, 2, 3, 4];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    // Si el elemento de arr en i es par o si es igual a 1
    if (arr[i] % 2 == 0 || arr[i] == 1) {
        newArr.push(arr[i]);
    }
}

// Si el ultimo elemento es mayor o igual a 4
if (newArr[newArr.length - 1] >= 4) {
    newArr.pop();
}

console.log(newArr);
