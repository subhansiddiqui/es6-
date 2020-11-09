//*Material
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=Hoisting%20of%20const&text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,be%20updated%20nor%20re%2Ddeclared.
// let learnLet = 'we have started learning let';
// console.log(learnLet);
//! var 
var subhan;
console.log(subhan); //* undefined
subhan = 20;
console.log(subhan);

console.log(muneeb); //logs undefined  //* it is same as above because js hoisting mechanism
var muneeb;
//*Problem in var 
var age = 22
var greet = `you are eligible`;
if (age > 18 ){
    var greet = 'you are not eligible';
    console.log(greet); // Logs the recent declaration in if block

}

//! let
// * above problem in Let
let agechecking = 19;
let greetIf18PLus = `you are eligible to come with us`;
let booleanForAge = Boolean(agechecking > 18); //true

// let greetIf18PLus = ' fjofenornf'; // gives error
if (booleanForAge === true ){
    let greetIf18PLus = 'you are not eligible to come with us';
    
    console.log(greetIf18PLus);  //! It preferred the variable defined in block
    
}
console.log(greetIf18PLus); // Logs the first 
let myage;
console.log(myage); // logs undefined
//console.log(myName); //* error because it can't give the variable until and unless it is declared as well as initialized
let myName;
console.log(myName) // undefined
//!IMP
//Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, 
//the let keyword is not initialized. So if you try to use a let variable before declaration, 
//you'll get a Reference Error.

//! CONST
//console.log(myAddress); //*logs error . this wil remain the same in let
const myAddress = 'paposh';
//console.log(myAddress) // * also logs error . in let it will log UNDEFINED
//myAddress = undefined; //*error
console.log(myAddress)
const aboutMe = {
    name : 'subhan',
    age : 17,
    address : 'paposh'
}
console.log(aboutMe)
aboutMe.age += 2; // * it will not update the primitive type but it will update the non-primitive type i.e objects
//! differences 
//* 1.var declarations are globally scoped or function scoped while let and const are block scoped.

//* 2.var variables can be updated and re-declared within its scope; let variables can be updated but not 
//*   re-declared; const variables can neither be updated nor re-declared.

//* 3.They are all hoisted to the top of their scope. But while var variables are initialized with undefined, 
//* let and const variables are not initialized.

//* 4.While var and let can be declared without being initialized, const must be initialized during declaration.
//console.log(aizah);
let aizah;
console.log(aizah)