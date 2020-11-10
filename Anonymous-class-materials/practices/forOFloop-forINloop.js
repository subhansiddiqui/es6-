console.log('hello we are learning for of and for in loops');
let arr = [1 , 2 , 3 , 4 ,5 ,6 , 7];
// * traditional
// for (let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }
//* NEW way 
for(let index of arr.reverse()){
    console.log(index);
}
let objForIN = {
     name : 'subhan',
     age : 17,
     residence : 'karachi'
}
for (let key in objForIN){
    console.log(key + '  : ', objForIN[key]);
    
}
arr.reverse()
let set1 =  new Set([...arr]);
console.log(set1)
for (let i of objForIN){
    console.log(i);
}
// * learning guide 
//*            1.Foreach      2.map      3.filter



