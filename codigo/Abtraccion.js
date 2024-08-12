class SerVivo {
    constructor(edad) {
        this.edad = edad;
    }
   // Método para obtener la descripción de SerVivo
    descripcion() {
        return `Es un ser vivo de ${this.edad} años.`;
    }
}

class Perro extends SerVivo {
    constructor(edad, raza) {
        super(edad);
        this.raza = raza;
    }

    alimentarse() {
        console.log("Le gusta comer carne");
    }  
    
    // Método para obtener la descripción completa, incluyendo la de SerVivo
    descripcionCompleta() {
        return `${super.descripcion()} Es un perro de raza ${this.raza}.`;
    }
}

// Ejemplo de uso
const miPerro = new Perro(5, 'Labrador');
console.log(miPerro.descripcionCompleta());  
