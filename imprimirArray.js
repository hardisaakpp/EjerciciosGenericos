// Isaac Ortiz
function imprimirArray(array) {
    array.forEach((elemento, index) => {
        console.log(`Elemento ${index}: ${elemento}`);
    });
}

// Uso del método
imprimirArray([1, 2, 3, 4]); // Imprime los números
imprimirArray(["a", "b", "c"]); // Impri