console.log(`hello we are leaning short circuit in javascript`);
let  notDefined = 0;
let againND = undefined;
let  ifDefined = notDefined  === 0 && againND;
let ifDefined2 = notDefined || againND;
console.log(ifDefined);
console.log(ifDefined2);
// * || stops on "truth", 
//*  && stops on "lie". Remember :)
let greet = function (name){ 
    name = name || 'Anonyms User';
    console.log('hello ' , name , (name === 'Anonyms User') ?  ' :| ' : ' :) ');
}
greet();
greet('subhan')
greet()
//* in & if first condition is true it will assign the variable with the second condition
// * where they stop both {$ , |}  they assign the variable that value 