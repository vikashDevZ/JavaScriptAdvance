//most useful concept for performance optimization by limiting function calls on different events
//very common frontend interview

//keyup bs input vs change input events

//keyup : fired when key is released after pressed

console.log('hello')
const myInput= document.getElementById('input-event')

myInput.addEventListener('input',(e)=>findSuggestion(e))

//input : fired when key is pressed not released <Most PREFFERED>

//change : fired when the focus is changed from the given object

//keypress : 

//this.value vs e.target.value
//use this. when not using arrow function


//________________________________________________________________________________________________


//what is debouncing?

const findSuggestion=(e)=>{
    console.log('your suggestion for :' , e.target.value )
}


setTimeout(()=>{
    findSuggestion
},1000)

// what are decorator functions

//takes function and return fucntion

function decorator(func){
    return function(){
        func();
    }
}

function hello(){
    console.log('hell  o')
}

const newfunc=decorator(hello)
newfunc();

//implement debouncing


function deBounce(func,delay){

    let timeId;

    return function(...args){
        if(timeId){
            clearTimeout(timeId);
        }
        timeId=setTimeout(()=>{

        },delay)
        func.call(this, ...args);
    }
}

const decoratedFunc=deBounce(findSuggestion,300)

//understanding debpuncing in depth






