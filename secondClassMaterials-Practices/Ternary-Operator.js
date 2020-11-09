console.log('hello we are learning ternary operators');
//*syntax  
// condition ? expr1 : expr2
let averageAge = 15 ,
    averageHeight = 5.9 + ' ft';
console.log(averageAge , averageHeight);
averageAge > 16 ? averageHeight === false? console.log('you pass the both criteria') : console.log('pass') : averageAge < 16  ? console.log('fail') : console.log('not fail');
// for (let i = 1; i < 101; i++) {
//     let sound = i % 15 === 0 ?
//       'fizzbuzz' : i % 5 === 0 ?
//        'buzz' : i % 3 === 0 ?
//        'fizz' : i;    
//      console.log(sound)  
//    }



// * make this in ternary operator
// function example({ vaueINObject}) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

let object = {
    first : null,
    second : undefined,
    third : 10
}
let notFalsyChecking = allvalues => {
   let check = allvalues.first ?  `${allvalues.first} is ${true}` : allvalues.second ?  `${allvalues.second} is ${true}`  : allvalues.third ? `${allvalues.third} is ${true}`: `all values in given object are falsy`;
   return check
   
}
let checkingINGiven = notFalsyChecking(object);
console.log(checkingINGiven);




