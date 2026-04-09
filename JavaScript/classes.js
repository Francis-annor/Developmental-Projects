class Car {
    // The constructor function is called automatically when the object is initialized
    constructor(name){
        this.name = name;
    }

    // Method in Class
    present(){
        return 'I have a ' + this.name;
    }
}
// ()

// Class Inheritance
class Model extends Car{
    constructor(name, mod){
        super(name);
        this.mod = mod;
    }

    show(){
        return this.present + ", it is a " + this.mod;
    }
}

const myCar = new Car("Ford");
myCar.name;
myCar.present();

const myModel = new Model("Ford", "Mustang");
myModel.show();