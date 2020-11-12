console.log('hello we are learning this keyword in javascript');
let personName = 'subuhan'
let nationality = "pakistan"
var meraNaam = 'subbi'


let objectForThis = {
    personName : 'subhan',
    nationality : 'pakistan',
    patriot : ()=> { 
        let personName = 'subhan'
        console.log(personName  , this.personName)
    
    
    }


    
}

console.log('hello')
objectForThis.patriot();
// let you = objectForThis.patriot();
// console.log(you)
// (function(){
// 	console.log("Anonymous function invocation");
// 	console.log(this === window);
// })();

// *learning CODE
// function foo () {
// 	'use strict';
// 	console.log("Simple function call")
// 	console.log(this === window); 
// }

// let user = {
// 	count: 10,
// 	foo: foo,
// 	foo1: function() {
// 		console.log(this === window);
// 	}
// }

// user.foo()  // Prints false because now “this” refers to user object instead of global object.
// let fun1 = user.foo1;
// fun1() // Prints true as this method is invoked as a simple function.
// user.foo1()  // Prints false on console as foo1 is invoked as a object’s metho
