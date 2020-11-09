console.log('hello we are learning session storage');


//  var name = localStorage.setItem('name' , 'subhan') ;
// localStorage.setItem('name' , 'ali');
// localStorage.clear();



const aboutme = {name : 'subhan' , job : 'jobless' , age : 17};
sessionStorage.setItem('learning session' , 'yes');
sessionStorage.setItem('aboutTheUser' , JSON.stringify(aboutme)); 
//? 1. destructuring
//? 2. spread Operator
console.log('hello we are learninig destructing and spread operator');
let object1 = {
    name : "subhan",
    age : 17,
    skills : {
        skill1 : 'html',
        skill2 : 'css',
        skill3 : 'javacript'
    }
};

const {name:myName , age:myAge , skills : {skill1:firstSkill , skill3:thirdSkill} } = object1
console.log(myName , myAge , firstSkill , thirdSkill);

// const object1PureCopy= {
//      ...object1,
     
// }


// * The spread operator or syntax (...) can be used to make a shallow copy of an object.
///!////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!
//* To copy a deep object like our user object safely, we also need to use the spread operator at the nested level of the object:

const object1PureCopy = {
    ...object1,
    skills : {
        ...object1.skills,
        skill3 : 'react'
    }
}
console.log('object 1 ' , object1);
console.log('object1 copy ' , object1PureCopy);