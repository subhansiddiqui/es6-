console.log(`we are learning local storage`);


// function storeValueforLogin(userEmail , UserPassword){
//     let get = document.getElementById(userEmail)
//     let emailFromGet = get.value
//     let signal = 0;
//     emailFromGet ? signal++ : alert(`enter a value`);
    
//     let get1 = document.getElementById(UserPassword);
//     let passFromGet1 = get1.value;
//     let signal2 = 0
// passFromGet1 ? signal2++ : alert(`password is required`);

// if (emailFromGet === 1 && passFromGet1 === 1){
//     localStorage.setItem('userName' , emailFromGet);
//     localStorage.setItem('userPassword' , passFromGet1);
// }


//     }

let aboutUser = {name : 'subhan' , job : 'jobless' , age : 17} 
localStorage.setItem('aboutMe' , aboutUser);
localStorage.removeItem('myname');
localStorage.removeItem('aboutMe');
localStorage.setItem('aboutTheUser' , 'subhan');
let get = localStorage.getItem('aboutTheUser');
console.log(get);
// console.log(localStorage.key(1))
localStorage.removeItem('[object Object]');


// *             -removeItem(keyname)  
//*              -setItem(keyname , keyValue)  
// *             - key(indexvalue)  
// *             - getItem(keyname)


 localStorage.clear();