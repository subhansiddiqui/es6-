//* OBJECT .KEYS

console.log('we are learning objects');
let mainObject = {
    name : 'subhan',
    age : 17,
    passion : {
        passionOne : 'web designing',
        passionTwo : 'web development'
    }
}

let mainObjectKEYS = Object.keys(mainObject);
console.log(mainObjectKEYS);
for (let index = 0 ; index < mainObjectKEYS.length ; index++){
    let wholeObject =  mainObject[ mainObjectKEYS[index] ];
    console.log(wholeObject);
}
console.log(mainObject["name"]);

//* OBJECT .VALUES
let mainObjectValues = Object.values(mainObject);
for (let i = 0 ; i < mainObjectKEYS.length ; i++){
  console.log( mainObjectKEYS[i] + '  :  ' , mainObjectValues[i] )
}
//console.log(mainObjectValues);
//console.log(mainObject)
//mainObject.passion = {passionOne : 'Singing'}
console.log(mainObjectValues[2] === mainObject.passion  );
console.log(mainObjectValues[2] , mainObject.passion) ;
mainObjectValues[2] = {passionOne : 'SINGING' , passionTwo : 'PROGRAMMING'};
console.log(mainObjectValues);
console.log(mainObjectValues[2] === mainObject.passion  );  // * logs false because i have changed the value

let spreadObject = {
  ...mainObject,
  passion : {
    ...mainObject.passion
  }
}
console.log(spreadObject);
// mainObject.passion.passionOne = 'Singing';
console.log(mainObject);
console.log(mainObject.passion === spreadObject.passion); //* logs false 

//* OBJECT .ASSIGN
let object1 = {myName : 'subhan'};
let object2 = {myJob : 'developer' , age : 18};

// let assignmentObject = Object.assign({} , object1 , object2);
// console.log(assignmentObject)
// object1.myName = 'subhan ahmed'
//console.log(assignmentObject); // * remains same because it's not passed by reference
// let anotherAssign = Object.assign(object1, object2);
// console.log(anotherAssign);
// object2.myJob = 'Programmer';
// console.log(anotherAssign);
// object1.myName = 'subhan ahmed';
// console.log(anotherAssign) // * chnages because we have made first object as the target object and source is copied target is kept
//console.log(object2);
let assign = Object.assign({} , object1 , object2 = {myJob : 'deeveloper'}); // ! this way will change the original object 2 as well
console.log(object2);
let properAssign = Object.assign({} , object1 , {...object2 , myJob : 'graphic designer'}); 
console.log(assign); // 
console.log(object2); //*      //* ASSIGNMENT WILL BE DONE USINNG THE SPREAD OPERATOR IN SOURCES I.E {...OBJECTNAME }
console.log(properAssign);
console.log(Object.keys(object2));
let againSourcingOBJECT2 = Object.assign({} , object1 , object2);
console.log(againSourcingOBJECT2); 
console.log(object1);




















//* bonus object learning
// https://www.freecodecamp.org/news/javascript-objects-square-brackets-and-algorithms-e9a2916dc158/
// const car = {  make: 'Ford',  model: 'Fiesta',  color: 'Red'};
// console.log(car['model']); // * inverted commas are important
// const propertyName = 'color';
// console.log(car[propertyName]); //outputs: Red
// //* creating a menu 
// const menu = {  burger: 10,  fries: 3,  coleslaw: 4,  coke: 2,  beer: 5};
// //*creating a function that brings the price of selected item in the menu through 
// // let askForChoice = prompt('what do you want to order');
// console.log(priceGiver(   menu , 'burger') );
// function priceGiver(theMenu , theOrder){
//     if (theOrder){
    
//     let checker = theMenu[theOrder];
//     return `${checker} Dollars`;
//     }
    
// }
// console.log(  Object.keys(car) ,   Object.values(car))








































// let num = '81112'
// console.log(num)
// console.log(String(num));
// console.log('1' * 4);
// console.log(num[0] * num[0]);


// function squareDigits(num){
//     //may the code be with you
//     let allIn;
    
//     let numstrigify = String(num); 
//     let multiply;
//     for (let i = 0 ; i < num.length ; i++){
//       multiply = numstrigify[i] * numstrigify[i];
           
//     }
//     return multiply;
    
//   }

// let calculator = squareDigits(88);
// console.log(calculator);

// let allIn = '';
    
// let numstrigify = String(88); 

// let multiply;
// for (let i = 0 ; i < numstrigify.length ; i++){
//   multiply = numstrigify[i] * numstrigify[i];
//   allIn += `${String(multiply)}`;
//   console.log(allIn)

       
// }
// console.log(allIn);
//return multiply;











