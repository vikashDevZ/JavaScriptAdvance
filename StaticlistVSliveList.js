//to select item inside an element using class
const listItems=document.querySelectorAll('.todo-list li');   //li inside class todo-list
console.log(listItems)   //returns object

const sixthli=document.createElement('li');
sixthli.textContent="created using js";
const ul=document.querySelector('.todo-list');        //wont append if quarySelctorAll is on
console.log(sixthli);
ul.append(sixthli);                 //this is static list
console.log(listItems)              //only shows static list


//querySelector shows static list               //give html collection     
//getElemetby bla bla shows live list           //gives node list
//eg.

const unorderlist=ul.getElementsByTagName('li');
console.log(unorderlist)            //shows static+ live elements

//Dimension of element
sectiTodo=document.querySelector('.todo-list');
const info=sectiTodo.getBoundingClientRect();
console.log(info);
const infoHeight=sectiTodo.getBoundingClientRect().height;
console.log(infoHeight);
