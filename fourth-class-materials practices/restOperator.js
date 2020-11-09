console.log('hello we are learning rest operator');
let mobile = {
    brand : "samsung" ,
    model : '0100',
    screen : '15.5 inches' 
}

let {brand:brandOfcompany , ...restDetail} = mobile;
console.log(brandOfcompany , restDetail);
let mobileModelinDetail = {
    brand : "samsung" ,
    model : '0100',
    screen : '15.5 inches',
    feautures : {
        android : '4.5',
        camera : {
            frontCamera : '10mp',
            backCamera : '20mp'
        },
        batteryLife : '4.5 hrs'

    },
    pricing : {
        dollar : '2000$',
        rupees : '20000R' 
    }
}

let {  brand : brandOfPhone , feautures: {camera : {frontCamera , backCamera}} , ...restINFO} = mobileModelinDetail;
console.log(brandOfPhone , restINFO  , frontCamera , backCamera);
                                    // * once we will get inside a object to destructure even a small property ,
                                    // * the rest operator will not go in that particular nested object from 
                                   // *   which we have destructure even a single property...
function restChecking ( {model:modelOFPHone , ...restoftheINFO}) {
    console.log(modelOFPHone , restoftheINFO);

}
restChecking(mobile);  // * it works in function as well

                                   // TODO = learn REST and SPREAD  operators in DETAIL



//* source:=
// https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281
console.log('hello we are learning rest and spread');
//*SPREAD

let arr1S = [1,2,3,4,5];
let arr2S = [6,7,8,9,10];
//arr1S = arr1S.concat(arr2S);
//console.log(arr1S);
let combine = [...arr1S , ...arr2S];
console.log(combine)
arr1S = [...arr1S , ...arr2S];
console.log(arr1S);
let string = 'subhan';
arr1S = [...arr1S , ...string];
console.log(`arr1S  ${arr1S}`);
console.log(Array.isArray(arr1S));
arr1S[2] = 22;
console.log(arr1S); // * anything that can be iterated can be spread using the (...) OPERATOR
                    
                     // * spread = is used to give  , 
                    //*  rest : is used to have what's left   
// let string2 = [...string];
// console.log(string2);
   //* using spread in functions PARAMETERS
function summer(num1 , num2 , num3){
    console.log(Number(num1 + num2 + num3 ));
}
// before 
let arrayToPASSinFUNCTION = [3 , 3 ,4 , 4]; // * it doesnot matter it will spread how many the functions parameters are 
summer(arrayToPASSinFUNCTION[0] , arrayToPASSinFUNCTION[1] , arrayToPASSinFUNCTION[2]); // * works :)

//? this is too much of a work .LET'S DO THIS AS SPREAD OPERATOR
summer(...arrayToPASSinFUNCTION); // logs 10
//

//* REST

// const o1={a:'va',b:'vb'};
// const o2={c:'vc', ...o1};
// console.log(o2);
// const src = 'I ❤ Mötley Crüe';
// const dest = [... src];
// console.log(dest)
//!IMP 
// *Objects themselves are not iterable, but they become iterable when used in an Array, 
//* or with iterating functions such as map(), reduce(), and assign(). When merging 2 
//* objects together with the spread operator, it is assumed another iterating function is used when the merging occurs.
function convertingInfiniteARGinARRAY(...args){
    console.log('these are put in your array :' , args );
}
convertingInfiniteARGinARRAY(121,2,3,3,32,3,4,4,4,4,44,33,3,3,3434242332,3,3,3,313358,8,8657,6464352,);

