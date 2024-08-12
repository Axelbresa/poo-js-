//Encapsulamos #saldo para que no pueda ser accedido directamente
class CuentaBancaria {
    #saldo;  // Propiedad privada usando la sintaxis de `#`

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;  // Inicialización del saldo
    }

    // Método público para retirar dinero
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            console.log(`Retirados: $${cantidad}`);
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
const cuenta = new CuentaBancaria(1000);
cuenta.retirar(900);   
console.log(`Saldo: $${cuenta.consultarSaldo()}`);  // Saldo: $1300
