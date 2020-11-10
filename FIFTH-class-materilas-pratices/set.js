console.log('hello we are learning set');
// let array = ['subhan' , 'joe' , 'stan' , 'andy' , 'red' , 'subhan']
// console.log(array);
// let createSet = new Set([...array]);
// console.log(createSet);
// let newArray = {name : new Set([...createSet]) }; // * we can't spread it directly in object ofcourse , but we can in an object =>KEY
// console.log(newArray);
// newArray['name'].add('Mosh');
// console.log(newArray.name)
// let nameArrayCopy = [...array];
// console.log(array === nameArrayCopy);// logs false
// console.log(Array.isArray(createSet)); // logs false

//* video material

const aSet = new Set()
aSet.add('hello');
aSet.add('world');
aSet.add('also' , 'universe'); //* can add one at a time 
console.log(aSet);
console.log(typeof aSet , 'length of set is ' , aSet.size === 3 ? 'it is three' : 'it is not three');
console.log(aSet.has('universe') === false  ? 'it does not have' : 'it has a value called universe')

aSet.delete('world');
aSet.add('universe');
console.log(aSet);
//* looping through aSet
for (let value of aSet){
    console.log(value)
}
let myArray = [...aSet];
console.log(myArray);
// * coverting set to array
const arrayFromSET= Array.from(aSet);
console.log(arrayFromSET);
// const obj = {
//     name : 'subhan',
//     age : 17
                     // * can't create array from object . pretty obvoius :)
// }        
// const arrayFromOBJ = [...obj];
// console.log(arrayFromOBJ)
let arraytoCOPY = [{name : 'subhan' , age : 17} , 'hello' , 'world']
let setValueCheck = new Set( [...arraytoCOPY]);
let setTBH = setValueCheck.values();
console.log(setTBH)
console.log(setValueCheck);
// console.log(setTBH.next().value);
console.log(setTBH.next().value === arraytoCOPY[0]);
arraytoCOPY[0] = {name : 'subhan' , age : 18};
console.log(setValueCheck);

//* revision
console.log('revision starts from here !');
let aNewArray = [1,2,3,4,5,6]
let aNewSet = new Set(); //* only iterates the first element if we miss [].and that too if it's a string 
console.log(aNewSet);
aNewSet = new Set([...aNewArray])
console.log(aNewSet);
aNewSet.has(6)? console.log('it has a value 6 in it') :  aNewSet.add(6);
console.log(aNewSet.size === 6 ? 'there are six value  values in the set starting from 1' : 'there are more or less values than six'); 
aNewSet.add(7);
aNewSet.delete(7);
aNewSet.has(7) ? console.log(aNewSet) : aNewSet.add(7) , console.log(aNewSet);
aNewSet.forEach(vlauesINSIDE => console.log(`hey ${vlauesINSIDE}`));
aNewSet.map(values => values + 2)




