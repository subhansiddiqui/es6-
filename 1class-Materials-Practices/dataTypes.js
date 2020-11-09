// *learning Data types
//== https://javascript.info/types
//==https://medium.com/launch-school/javascript-weekly-data-types-and-mutability-e41ab37f2f95
// *Finding Data types
// console.log("\"string\" type:", typeof "string");   // Logs: "string" type: string
// 
// console.log("7 type:", typeof 7);                   // Logs: 7 type is: number
// 
// console.log("7.5 type:", typeof 7.5);               // Logs: 7.5 type is: number
// 
// console.log("true type:", typeof true);             // Logs: true type: boolean
// 
// console.log("undefined type:", typeof undefined);   // Logs: undefined type: undefined
// 
// console.log("null type:", typeof null);             // Logs: null type: object
// 
// console.log("{} type:", typeof {});                 // Logs: {} type: object
// 
// console.log("[] type:", typeof []);                 // Logs: [] type: object
// 
// console.log("function type:", typeof function(){}); // Logs: function type: function
//*
// var foo = 'this is a string'; // string
// foo = 45 // number
// console.log(foo, typeof foo);  
// foo = [];
// console.log(foo, typeof foo);  //* it not mutable
// foo = 97.9;
// var str = 'hello'
// console.log(Number.isInteger(foo));
// console.log(Number.isNaN(undefined)); // Nan is the only data types that behaves oddly 
// var array = [];
// var bar = {}
// console.log(typeof(array) , Array.isArray(array))
// console.log(typeof bar , Array.isArray(bar));
// * expelicitly checking the type of certain data types;
/* 
/// Null testing
var myNullValue = null;
console.log(typeof myNullValue);          // Logs: object
console.log(myNullValue === null);        // Logs true

/// Array testing
var myArray = [];
console.log(typeof myArray);              // Logs: object
console.log(Array.isArray(myArray));      // Logs: true
console.log(Array.isArray({}));           // Logs: false

/// Integer testing
console.log(typeof 4);                    // Logs: number
console.log(Number.isInteger(4));         // Logs: true
console.log(Number.isInteger(4.0));       // Logs: true
console.log(Number.isInteger(4.5));       // Logs: false

/// NaN testing
console.log(typeof NaN);                  // Logs: number
console.log(Number.isNaN(NaN));           // Logs: true
console.log(Number.isNaN(3));             // Logs: false
console.log(NaN === NaN);                 // Logs: false
console.log(NaN !== NaN);                 // Logs: true*/
//* Mutability
var something = 'subhan';
var another = something;
console.log(something.concat(' siddiqui'));
console.log(something);
something = something.concat(' siddiqui');
console.log(something);
console.log(another);
var object1 = {
    subhan : 15,
    haseeb : 14,
    muneeb : 16
}                                             // * PASS BY REFRENCE ==== NONprimitive 
var object2 = object1;                        //* PASS BY VALUE === Primitive
console.log(object1);
console.log(object2);
object1.muneeb += 1;
console.log(object1);
object2.muneeb -= 1;
object2.subhan += 5; 
console.log(object2);
                                                                   //!IMP
//*   — thus demonstrating that compound types are mutable but the primitive types contained therein are not
 var planets = {
     'Mars' : true,
     'Jupiter' : false
 }
 console.log(planets)
 planets.Jupiter = true;
var muneebAge = object1.muneeb
console.log(muneebAge);
object1.muneeb += 2;
console.log(muneebAge) //* this remains same because when we write &object1.muneeb we refer to its value not Addresss 
console.log(object1 === object2);
console.log(object1.muneeb === muneebAge) //Logs false
console.log(5 / 0 , 'type of infinity is : '+ typeof(Infinity));
console.log("h1" * 5 , 'type of NaN is : ' +  typeof(NaN));

var a = 5;
var b = a;
var aEqualTOb = Boolean(a === b);
console.log(aEqualTOb);
//var check = Boolean();   
//console.log(check);   //* logs false because default is false
var city = Symbol('pakistan');
console.log(city , 'type of symbol is : ' + typeof(city));
console.log('i live in, ' , city) 

var numberARR = [1 , 8  ,9]
console.log(numberARR);
numberARR.push('hbcrebu');
numberARR[3] = 'subhan'


console.log(`my name is subhan and i am ${object1.subhan} years old` );
console.log(typeof Math);
console.log(typeof  new Date);
console.log(new Date());

console.log(typeof(13316763671369631961389689698462466646183461894689346863486318963891689346984639864398643984369831623646462874684264287648264428684684268642874268n))

// 1 : localStorage                    // 2 : sessionStorage                       // 3 : spreadOperator                      // 4: destructuring











