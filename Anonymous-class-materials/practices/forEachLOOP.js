console.log('hello we are learning for each loop in js');
let aboutArray = ['subhan' , 17 , 'karachi']
let keyForArray = {
    name : aboutArray[0]  ,
    age :    aboutArray[1],
    address : aboutArray[2]
}
// console.log(aboutArray);
// aboutArray[0] = 'subhan ahmed siddiqui'
// console.log(keyForArray);
aboutArray.forEach(function (value , indexes){
    console.log(indexes + "  :  " + value)
});

// todo:  code not working below



let allDivChild = document.getElementsByClassName('childOFDiv');
console.log(allDivChild);
//! not working
// allDivChild.forEach(function(divs , indexes , array){
//     array[indexes].setAttribute('onclick' , 'squaringAlert()')
// });
//! working
// allDivChild[0].setAttribute('onclick', 'lightUP()');
// function lightUP(){
//     console.log('i am the first box')
// }


// allDivChild.forEach(function(elements){
//     console.log(elements)
// });
// function squaringAlert(){
//   console.log('i have been clicked')
// }
// const allDiv = document.getElementsByTagName('div');
// allDiv.ForEach(square => {
//     square.addEventListener('click' , squaringAlert)
// })
// function clickOutCome(){
//     alert('i have been clicked')
// }
let names = ['subhan' , 'ahmed ' , 'xiddiqui' && 'siddiqui']
console.log(names);
names.forEach(theFuction);
function theFuction(items , ind){
  console.log(ind + ' : ' + items);
};
let name2 = []
names.forEach((items , indexes) => name2[indexes] = items);
console.log(name2);
let num = [1 , 2, 3]
num.forEach(itemsInArray => console.log(itemsInArray + 2));
console.log(num);

// todo ; DONE 
// * working code
// function squaringAlert(){
//   console.log('i have been clicked')
// }
// let allDiv = document.getElementsByClassName('childOFDiv');
// let allDivArray = Array.from(allDiv)
// allDivArray.forEach(square => {
//     square.setAttribute('onclick' , 'squaringAlert()')
// });
