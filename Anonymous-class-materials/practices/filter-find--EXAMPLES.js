console.log('hello we are learning filter and find methods');
const objectWithinArray = [
    {name : 'subhan' , age : 17},
    {name : 'joe' , age : 70},
    {name : 'bob' , age : 12}
];
console.log(objectWithinArray.filter(items => items.age > 16));
console.log(objectWithinArray.find(items => items.name === 'subhan' || items.age === 16 + 2));
let chaining = objectWithinArray.map(items => items).filter(items => items.age > 16 ).map(items => items.age).find(items => items === 17); //logs 17
console.log(chaining);


let peoples = [
    {
        name : 'subhan',
        occupation : 'dentist'
    },
    {
        name : 'joe',
        occupation : 'engineer'
    },
    {
        name : 'bob',
        occupation : 'dentist'
    }

]

function dentistChecker (aboutINFO){
    return aboutINFO.occupation === 'dentist'
}
console.log(peoples.reverse().find(dentistChecker) );
console.log(peoples.find(items => items.occupation === 'dentist')['name' || 'Name'] )