console.log('hello we are learning try catch and throw');
//* syntax try { code && throw }    catch(throwvalue){code}
let valueNumeric = 20;
//console.log(typeof valueNumeric);
// try{
//     if (typeof(valueNumeric) !==  'number'){
//       throw `we expected number  instead we got ${typeof valueNumeric}`;
//     }
//     else {
//         alert('we got our number')
//     }
// }
// catch(errorFromThrow){
//     console.log(errorFromThrow);
//};
// let string = {name : 'subhan' , age : 17};
// console.log(string // * will return complie error
// let numberFromST = [...string] //* will return runtime error
//console.log(numberFromST)
//* video 
 
try {
    console.log('heello first console');

}
catch(errorAbove){
    console.log('error is '  , errorAbove.stack)
}
finally{
    console.log('despite the error the app is alright')
}
let obj = {age : 17 , name : 'subhan'};
let objSTR = JSON.stringify(obj);
console.log(objSTR);

try{
    let obj = JSON.parse(objSTR);
    let objKeys = Object.keys(obj);
    let checker = false;

    for (let i of objKeys) {
    
    if (i === 'name' ){

        checker = true;
        
    }
}
if (checker === false){
    throw new ReferenceError('Incomplete Data name is not a key ')
    //* we can't chane the name only the code inside parenthesis ;)
}
else{
    console.log(`the name is ${obj.name}`)
}

}
catch(userError){
    console.log(userError)
}



//* learning code
/* Try, catch, finally */

// try {
//     console.log('Start of try runs');
    
//     unicycle;
  
//     console.log('End of try runs -- never reached'); 
  
//   } catch(err) {
  
//     console.log('Error has occured: ' + err); 
  
//   } finally {
//     console.log('This is always run'); 
//   }
  
//   console.log('...Then the execution continues');
  
  
  
  
//   let json = '{ "age": 30 }';
   
//   try {
   
//     let user = JSON.parse(json); 
//     if (!user.name) {
//       throw new SyntaxError("Incomplete data: no name");
//     }
   
//     console.log( user.name );
   
//   } catch(e) {
//     console.log( "JSON Error: " + e )//*.message // e ; 
//   }
  
  
  




















