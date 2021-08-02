class Animal {
    name;
    weight;
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    toString(){
        return "Name : "+this.name+ "- Weight : "+this.weight +" Kg";
    }

}
let objAnimal1  =  new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight("45.6")
alert(objAnimal1.toString());
let objAnimal2  =  new Animal("Pentakill",40);
alert(objAnimal2.toString());
objAnimal2.setName("Mouse");
alert(objAnimal2.toString());