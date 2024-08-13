//creamos una clase animal
class Animal {
    hacerSonido() {
        console.log('Sonido genérico');
    }
}

//hacemos dos clases hijos que ambos hacen sonido pero con un comportamiento diferente:
//En la clase perro heredamos de la clase animal
class Perro extends Animal {
    hacerSonido() {
        console.log('Ladrido');
    }
}

//En la clase gato heredamos de la clase animal
class Gato extends Animal {
    hacerSonido() {
        console.log('Miau');
    }
}

//Instanciamos
const perro = new Perro();
const gato = new Gato();

//imprimimos
perro.hacerSonido();  
gato.hacerSonido();  
