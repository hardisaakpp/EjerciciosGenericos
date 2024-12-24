// Isaac Ortiz
class Caja {
    constructor() {
        this.objeto = null;
    }

    guardar(objeto) {
        this.objeto = objeto;
    }

    obtener() {
        return this.objeto;
    }

    mostrarTipo() {
        if (this.objeto === null) {
            console.log("La caja está vacía.");
        } else {
            console.log(`El tipo del objeto almacenado es: ${typeof this.objeto}`);
        }
    }
}

// Uso de la clase
const caja = new Caja();
caja.guardar("Hola, mundo");
console.log(caja.obtener()); // "Hola, mundo"
caja.mostrarTipo(); // "El tipo del objeto almacena