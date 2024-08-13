//Encapsulamos #saldo para que no pueda ser accedido directamente
class CuentaBancaria {
    #saldo;  // Propiedad privada usando la sintaxis de `#`

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;  // Inicialización del saldo
    }

    // Método público para retirar dinero
    retirar(cantidad) {
        // Hacemos una condicion si es mayor a 0 y menor o igual a saldo entonces podemos retirar 
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Retirados: $${cantidad}`);
            // sino podemos retirar imprimimos fondos insuficientes
        } else {
            console.log('Fondos insuficientes o cantidad inválida.');
        }
    }

    // Método público para consultar el saldo
    consultarSaldo() {
        return this.#saldo;
    }
}

// Uso de la clase CuentaBancaria
//Añadimos 1000 a nuestra cuenta
const cuenta = new CuentaBancaria(1000);
//Retiramos 900 de la cuenta
cuenta.retirar(900);   
//imprimimos
console.log(`Saldo: $${cuenta.consultarSaldo()}`);  // Saldo: $1300
