console.log('hello we are learning classes in java script');
class Car {
    constructor ( name , price , model , color){
         this.carName = name,
         this.carPrice = price,
         this.carModel = model,
         this.carColor = color
    }
    priceAndColorTeller = () => {
        console.log('the color of car is ' , this.carColor , 'and prie is' , this.carPrice);
    } 
    static modelTeller = (modelToConsole) => {
        console.log('the model of this car is' , modelToConsole);
    }
    colorChanger = () => {
        this.carColor = 'nowItsWhite';
    }
}


let corolla = new Car('corrolla' , 10000 , 'gli' , 'black');
console.log(corolla);


class Dealing extends Car{
    constructor(nameOFDealer , location ,name , price , model , color){
        super(name , price , model , color)
        this.DealerName = nameOFDealer,
        this.shopLocation = location
    }
}
let newCar = new Dealing( 'subhan siddiqui'   , 'karachi'  ,   'corrolla' , 10000 , 'gli' , 'black')
console.log(newCar)