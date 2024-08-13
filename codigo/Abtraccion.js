//Creamos una clase ser vivo para extraer de ahi la descripcion
class SerVivo {
    constructor(edad) {
        this.edad = edad;
    }
   //creamos un metodo
    descripcion() {
        return `Es un ser vivo de ${this.edad} años.`;
    }
}

// En la clase perro heredamos todas las propiedades y métodos de un SerVivo
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

// Instaciamos laa clase y imprimimos
const miPerro = new Perro(5, 'Labrador');
console.log(miPerro.descripcionCompleta());  
