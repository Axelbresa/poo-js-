class Personaje{
    constructor(name, edad){
        this.nombre=name
        this.age=edad
    }
}

class Rol extends Personaje{
    constructor(name, age, p_rol){
        super(name, age)
        this.rol=p_rol
    }
}

let Personaje1=new Personaje("Daniela", 24 )
let Personaje2=new Rol("Axel", 18, "mago")

console.log("Clase padre ", Personaje1)
console.log("Hereda de la clase personaje unos atributos y se le agrega otro atributo de la clase rol", Personaje2)