console.log('hello we are learning promises');
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
function addAnotherList (objectToAddINArray ){
       return new Promise( (resolve , reject) =>{

       setTimeout(()=>{
            arrOfObj.push(objectToAddINArray);
            if (arrOfObj[2]){
                resolve()
                console.log('we have it')
            }
            else{
                reject('the array does not hae a third item');
            }

       },2000 );
    })
}
addAnotherList(objLast)
// .then( () => addToList(arrOfObj))
.then(() => arrOfObj[3] = {title : 'this is the fourth post added after response'})
.then(val => console.log(val)) // logs {title: "this is the fourth post added after response"}
.then( () => addToList(arrOfObj))
.catch((errMessg) => console.log(errMessg)); 

let promRslve = Promise.resolve('hello bro').then(arg => promRslve = arg);
// setTimeout(function (){console.log(promRslve)} , 8000); //* logs 'hello bro' after the it has fulfilled the promise
let setTimePromise = new Promise( (resolve , reject) => {
    setTimeout(resolve , 9000 , 'this is the nine seconds one')
}  ).then(val => setTimePromise = val ).catch(err => console.log(err));
// console.log(setTimePromise)
var numberCount = 8
let  resolveThis = 0 
resolveThis =  numberCount ? resolveThis = numberCount :  resolveThis = null


let arrayWithAllPromises = [promRslve , setTimePromise , resolveThis]
Promise.all([...arrayWithAllPromises]).then(val => console.log(val)).catch(err => console.log(err))

// todo 
//* 1.promises revision and concept ensurance 
//* 2. async await 

let userLeft = false ;
let userPauseVideo = false;

//* promise way doing the task
// function userChecker(){
//     return new Promise (  (resolve , reject) =>  {
        
//         if (userLeft){
//           reject('the user has left')
//         }
//         else if (userPauseVideo){
//          reject('user has not left but has pause the video')
//         }
//         else{
//         resolve('user is enjoying');
//         }
//     }       );
    
//     }
//     userChecker()
//     .then(  (messageFromPromise) => console.log(messageFromPromise)  )
//     .catch( (errorFromPromise) => console.log(errorFromPromise) );

 // * call back task 

// function userChecker(callBack , errorCallBack){
//     if (userLeft){
//       errorCallBack()
//     }
//     else if (userPauseVideo){
//       errorCallBack('user has not left but has pause the video')
//     }
//     else{
//         callBack('user is enjoying');
//     }
// }
// userChecker(  (message) => console.log(message)

// ,(error) => console.log(error) );