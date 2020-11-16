console.log('hello we are learning call back');
let arrOfObj = [
    {title: 'post one' ,body:'this is post one'},
    {title: 'post two' , body : 'this is post two'}

];
function addToList(functionWithTitle){
      let outPut = '';
      let arrayFromParameter = Array.from(functionWithTitle);
      setTimeout( () => {
           arrayFromParameter.forEach(element => {
               outPut += `<li>${element.title}</li>`;
                              
           });
           document.body.innerHTML = outPut

        },5000)

};
// addToList(arrOfObj);  
let objLast = {title: 'this is post three and it is added in the deafault aaray'}
function addAnotherList (objectToAddINArray , funcOfAddAllLIST , arrayItself){
       setTimeout(()=>{
            arrayItself.push(objectToAddINArray);
            funcOfAddAllLIST(arrayItself);

       },2000 );
}
addAnotherList(objLast , addToList , arrOfObj); // * takes 7 sec to complete since the function that is passed as a argument has settimeout of 5000