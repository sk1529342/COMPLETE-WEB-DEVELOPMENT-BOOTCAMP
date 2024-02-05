console.log("this is tutorial 53 in Css");
// 1.FIRST POINT :-
// let names= "Saurav";
// let names1= "Sohan";
// let names2= "Mohan";
// let names3= "Rohan";

// console.log( names + " is a good boy");
// console.log( names1 + " is a good boy");
// console.log( names2 + " is a good boy");
// console.log( names3 + " is a good boy");

// 2.SECOND POINT :-

// function greet(names){
//     console.log( names + " is a good boy");
// }
// let names= "Saurav";
// let names1= "Sohan";
// let names2= "Mohan";
// let names3= "Rohan";
// greet(names);
// greet(names1);
// greet(names2);
// greet(names3);

//  3.THIRD POINT :-
 function greet(names, greetText="Greeting from Javascript"){
    // names1="skkumar";
     console.log(greetText + " " +names);
     console.log( names + " is a good boy");
 }
 let names= "Saurav";
 let names1= "Sohan";
 let names2= "Mohan";
 let names3= "Rohan";
 let greetText ="Good Morning";

 greet(names, greetText);
 greet(names1, greetText);
 greet(names2, greetText);
 greet(names3);

//  let returnval= sum(names3);
//  console.log(returnval);
//  let returnval= sum(1,2,5);
 let returnval= sum(1,2,5);
 console.log(returnval);

 //  4.FOURTH POINT :-
 function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will never executed (unreachable code)
    // console.log("Function is returned");
 }

//  mypoint-1
//  function greet(names1, greetText, question){
//      console.log(greetText + " " +names1);
//     console.log( names1 + " is a good boy" + question);
// }
// let names= "Saurav";
// let names1= "Sohan";
// let names2= "Mohan";
// let names3= "Rohan";
// let greetText ="Good Morning";
// let question = " Can He ask you something?";

//  greet(names, greetText, question);
// greet(names1, greetText, question);
// greet(names2, greetText, question);
// greet(names3, greetText, question);

//  mypoint-1
// Create the function of max, min, greater than, less than etc.
// function sum(a,b,c,d){
//     let e = a+b+c+d;
//     return e;}
// let sum2= sum(45,45,3,7);
// console.log(sum2);

// function multiply( x,y,z){
// let w =x*y*z;
// return w ;
// }
// let multiple1= multiply(1,2,3);
// console.log(multiple1);


function max(a,b,c,d){
    let e = max(a,b,c,d);
    return e; 
}

let max1= max(34,45,56,6);
console.log(max1);
