// Isaac Ortiz
class Calculadora {
    static sumar(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else {
            throw new Error("Ambos argumentos deben ser números.");
        }
    }
}

// Uso de la clase
try {
    console.log(Calculadora.sumar(5, 10)); // 15
    console.log(Calculadora.sumar(3, "4")); // Lanza un error
} catch (error) {
    console.error(error.message); // "Ambos argumentos deben ser números."
}
