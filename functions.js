//function symbol function_name{prototype};
//function declaration
function wish(){
    console.log("wish you very very happy new year! :)");
}

//Shortcut
function isEven(num){
    return num%2===0;
}
console.log(isEven(1))

function firstChar(char){
    return char[0];
}
console.log(firstChar("hello"))

//Function expression
const song=function(){
    console.log("singing a happy nwe year song for you bruh");
}
song()

//Arrow function
const mul=(n1,n2)=>{    
    return n1*n2;
}
console.log(mul(3,2))

//if there is only one argument then remove ()
const isOdd=num=>num%2!==0;
console.log(isOdd(3));

//LEXICAL ENVIRONMENT
//let & const => Block Scope
//var =>function Scope (global scope)

//default value in function
const sum=function(num1,num2=0){
    console.log(num1+num2);
};
sum(3);

//Rest parameter use to make program that add the provided numbers
function add(...num){
    let sum=0;
    for(let items in num){
        sum=sum+num[items];
    }
    return sum;
    }
console.log(add(5,5,5,5));

//object param destructuring
const person={
    fname:'vikas',
    age:54,
    gender:'male'
}

// const myName=(obj)=>{
//     console.log(obj.age),
//     console.log(obj.gender),
//     console.log(obj.fname)
// }
const myName=({fname,age,gender})=>{
    console.log(age),
    console.log(gender),
    console.log(fname)
}
myName(person); //cannot console log it idk :(

//callback function
function myfunc(){console.log("this should come last")};

function myfunc2(a){
    console.log("hi happy new year");
    a()
}
myfunc2(myfunc);

//Function returning function (assignin a function to variable)
function myfun(){
    return function(){
        console.log("this is inside a fucntion");
    };
    // function display(){
    //     console.log("this is inside a fucntion");
    // };
    // return display;
}
const newName=myfun();
console.log(newName)
newName();
