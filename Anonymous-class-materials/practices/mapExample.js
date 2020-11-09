console.log('hello we are learning map');
let array = [ 1 , 2 , 3 , 4 ];
let map = '<ul>' + array.map(items => `<li> ${items} </li>` ) + '</ul>'
map = map.replace(/,/g , '')
console.log(map);
let arrayFrom = array.map(VALUES => {
    return VALUES + 2;
});

console.log(arrayFrom);
array.map(values => values * values);
console.log(array);

let consolingArray = array.map(items => console.log(items * 2));
console.log(consolingArray);

const objectWithinArray = [
    {name : 'subhan' , age : 17},
    {name : 'joe' , age : 70},
    {name : 'bob' , age : 12}
]
const maping = objectWithinArray.map(elements => {
    return `the age of   ${elements.name}  is ${elements.age} respectively `
})
console.log(maping);
const anotherMaping = objectWithinArray.map(function(elements) {
    return  `the age of   ${elements.name}  is ${elements.age} respectively and live in ${this.address}`
},{
    address : 'karachi'
});
console.log(anotherMaping)