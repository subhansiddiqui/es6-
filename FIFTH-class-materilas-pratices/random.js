console.log('this is random testting/exlporing');
// let objectORG = {
//     name: 'subhan',
//     age: 17,
//     aboutNationality: {
//         city : 'islamabad',
//         country : 'Pakistan'
//     }
// }
// let objectORGcopy = {
//     ...objectORG
// }
// console.log(objectORG , objectORG);
// console.log(JSON.stringify(objectORG) === JSON.stringify(objectORGcopy));
// console.log(objectORG === objectORGcopy);
// console.log(objectORG.aboutNationality === objectORGcopy.aboutNationality)
// objectORG['aboutNationality']['city'] = 'Karachi';
// console.log(objectORG , objectORG);
let obj1 = {one : 1 , two : 2 , four : 4};
let obj2 = {three : 3};
obj1 = {...obj1, ...obj2};
console.log(obj1);
obj2.five = 5;
console.log(obj2)
let arr1 = {...obj1 , ...obj2 };
console.log(arr1);
let array = [4 , 5 , 7 , 2 , 1]


function sumTheParameters(num1, num2 , num3){
    console.log(Number(num1 + num2 + num3));

} 
//sumTheParameters(...obj1);
//* let's call this with array
sumTheParameters(...array) // logs 16  ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...
let [sum1 , sum2 , sum3] = [...array];
console.log(sum1 , sum2  ,sum3 , 'sum equals = ' , sum1 + sum2 + sum3);
console.log(typeof(sum1) , Number.isFinite(sum1));
console.log('ya allah open my mind and make me better in worldy things as well as wordly acts :)')

