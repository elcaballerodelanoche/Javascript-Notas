//Clases en Ecmascipt 6

class Cliente {

    /**propiedades de los atributos y metodos
     * - public
     * - protected
     * - private -> agregado hace muy poco a Javascript. En Firefox, esto aún no está disponible -> https://caniuse.com/mdn-javascript_classes_private_class_fields
     */
   // para hacer que una propiedad de un ateributo sea privado
    #nombre;

    //getters y setters para las clases
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;

        
    }

    //cualquier método de la clase ya va a ser parte del proto automáticamente
    imprimir_saldo() {
        return `Hola ${this.#nombre}. tu saldo es ${this.saldo}.`;
    }

    /*tipo_cliente() {
        let tipo;
        if (this.saldo < 1000) {
            tipo = 'normal';
        } else tipo = 'Gold';

        return tipo;
    }

    retirar_saldo(valor_retiro) {
        return this.saldo -= valor_retiro;
    }*/


    //atributos estáticos -> no es necesario instanciar una clase para usarlos
    static bienvenida() {
        return 'Bienvenido al cajero para clientes';
    }
}

const maria = new Cliente('Maria', 'Perez', 10000);
//console.log(maria); // si hay atributos privados, esto botará error
console.log(maria.getNombre()); // para acceder a atributos privados desde afuera de la clase
console.log(maria.imprimir_saldo());
//console.log(maria.tipo_cliente());
//console.log(maria.retirar_saldo(2000));

//usando los atributos estáticos
console.log(Cliente.bienvenida());
//console.log(maria.bienvenida()); //botará error


//Herencia de clases

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {

        super(nombre, saldo); //va hacia el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    //reescribiendo métodos (del padre)
    static bienvenida() {
        return 'Bienvenido al cajero para empresas';
    }

}

const empresa_1 = new Empresa('Facebook', 100000000, 15415454, 'tecnología');
console.log(empresa_1);

//automáticamente ya hereda las funciones de cliente
console.log(empresa_1.imprimir_saldo());

console.log(Empresa.bienvenida());