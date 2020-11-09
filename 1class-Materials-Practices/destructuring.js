//*Material
// https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/#:~:text=The%20destructuring%20assignment%20is%20a,and%20assign%20them%20to%20variables.

console.log('we are learning destructuring');

//*old way 
let introduction = ["Hello", "I" , "am", "Sarah"];
let greet = introduction[0];
let name = introduction[3];
console.log(greet + " " + name)

//* new way 
// let [greet , secondValue] = introduction;
// console.log(greet) // says greet is declared
let [greeting , pronoun] = introduction;
console.log(greeting , pronoun);
// * also
let [hello , nameofPerson] = ['Salam' , 'Subhan']; 
console.log(hello , nameofPerson) //! expected output

//* also
let hi  , proN;
[hi , proN] = introduction;
console.log(hi , proN);
// hi = 'salam';
// console.log(hi)

                                // !    WIERD BEHAVIOR
                                   // let mynaming ,  myAging = 18 ;
                                   //console.log(mynaming , myaging)
// let mynaming, myaging = ['subhan' , 17 + 1];
// console.log(mynaming , myaging); //? only last variable can be initialized

let [mynaming, myaging] = ['subhan' , 17 + 1];
console.log(mynaming , myaging); // ? [] are important

// * skipping items in array 

let [,,,nameinArray ] = introduction;
console.log(nameinArray);
let aboutMe = ['subhan' , 18 , 'karachi' , 'coder' ,'student'];

//assignment //* from destructuring write subhan is a coder and student
let [myName , , , profession , current] = aboutMe;
console.log(`${myName} is a ${profession} and a ${current}`); // done 

let [,,Adress, ...rest] = aboutMe;
console.log(Adress , rest);

//* Default values
let [subbi = 'subuan' ,,, proF = 'coder' ] = ['subhan'];  // *default values can be assigned when there is no value in array
console.log(subbi , proF);


//!Object destructing
let plan1 = {
    nameofPlan      :  "basic"  ,
    price     :   3.99 ,
    space     :   100 ,
    transfer  :   1000 ,
    pages     :   10   ,
    discountMonths : [6,7,11],
    
    advantages : {
      supportTwentyFOUR7 : false,
     
      community : {
          slackCommunity : true,
          yourTimeTracking : {
              timeTrackStatement : 'yes we will track your time',
          }
      }
    }

};
let {nameofPlan , advantages , advantages:{supportTwentyFOUR7 , community:{slackCommunity , yourTimeTracking:{timeTrackStatement} }}} = plan1
console.log(nameofPlan , advantages);
console.log(`about Support ${supportTwentyFOUR7}`);
console.log(slackCommunity);
console.log(timeTrackStatement); 











// let {nameofPlan , transfer} = plan1;
// console.log(nameofPlan , transfer);




