//creamos una clase personaje
class Personaje{
    constructor(name, edad){
        this.nombre=name
        this.age=edad
    }
}

//una clase hijo que hereda nombre y edad
class Rol extends Personaje{
    constructor(name, age, p_rol){
        super(name, age)
        this.rol=p_rol
    }
}

//instaciamos personaje 1 solo con la clase 
let Personaje1=new Personaje("Daniela", 24 )
//instaciamos personaje 2 con la clase hijo que tiene sus propios atributos mas lo que heredo
let Personaje2=new Rol("Axel", 18, "mago")

//imprimimos
console.log("Clase padre ", Personaje1)
console.log("Hereda de la clase personaje unos atributos y se le agrega otro atributo de la clase rol", Personaje2)