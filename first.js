"use strict";
let lol=55;     //let can be only need to declare one time 
console.log(typeof lol,lol); //typeof operator 

const pi=3.14;

//to display the first element of the string 
let myname="vIkAsH  ";
console.log("the 2nd enelemnt to the given name is:",myname[1]) //****see name LOL*****/
// to print the laste index of the element
console.log(myname[myname.length-1]);

console.log(myname.trim(),myname.toUpperCase(),myname.toLowerCase());
console.log(myname.slice(0,4));

//*****to convert the type of variable****** 
let lol1="150"
console.log(typeof +lol)      
//string to number
let lol2=123
lol2=String(lol2)
console.log(typeof lol2);

//string concat
let newname=lol1+lol2;
console.log(newname);

//Template String `i like your cut G ${lol}` 
console.log(`my name is ${myname} and my age is ${lol}`);

//Big int
let bigNumber=BigInt(232424325436464467576); 
//or 
bigNumber=2335353453535354535n;
console.log(bigNumber);   console.log(Number.MAX_SAFE_INTEGER); //max no. in int

// ****== will only chech value and === will check bot value and datatype****
// ****same with != and !== ****

//******Truthy values*******
// false "" 0 numm undefined
let firstname="";
if(firstname){console.log("it will run if there is truthy items")};

let age=15;
if(age>20?console.log("no more teen"):console.log("lol u kidd go home"));

//*********Taking Iput form the USER************/
let inputName=prompt("Enter your IGN here");
console.log(+inputName,"AGE is here")                 //+ will conver the input into number

//*********WHILE and FOR Loop and DO WHILE**********/
let ticks=0;
while(ticks<10){                        //will only print till 9 as ticks<10
    console.log(ticks);
    ticks++
}
for(let i=0;i<10;i++){
    console.log(i);
}

do{        
    let ticks=0;     //crash pc by typing ***let ticks=0; and commentput other lopps
    console.log(ticks);
    ticks++;
}
while(ticks<10);


