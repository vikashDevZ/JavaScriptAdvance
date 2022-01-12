//classList
const sectionClass=document.querySelector(".todosection")
console.log(sectionClass)
console.log(sectionClass.classList);

//adding class using javacript

sectionClass.classList.toggle('bg-dark');  //dont put . seriously i wasted so much of my time

//Adding html element
//bad way
const todolist= document.querySelector('.todosection');
console.log(todolist.innerHTML);
// todolist.innerHTML+=`<li class= ".bg-dark"> New Todo List </li>`;        ??//??


//to remove class
// todolist.classList.remove('container');

//to find if call exist
console.log(todolist.classList.contains('container'));

const header=document.querySelector('.header')
console.log(header);            // header.classList.add('bg-dark')


//adding todoList //BAD WAY
const newTodoList=document.querySelector('.todo-list');
newTodoList.innerHTML+='<li> created by bad method </li>'; //bad practice

//GOOD WAY
const newtoDolist=document.querySelector('.todo-list');
//document.createNewTextNode("this is long method")

let newlist=document.createElement('li')
newlist.textContent="this was probably the best method";
newTodoList.append(newlist);                        //prepend will pre add it


//to remove an element          //item name.remove();

// newlist.remove();                                   

//before and after addling element as sibling 
newlist=document.createElement('li')
newlist.textContent="using before method";
newTodoList.before(newlist);            

//beforeend afterend beforebegin afterbegin
newElement=document.querySelector('.todo-list');
newElement.insertAdjacentHTML("beforeend","<li>using before end</li>")
newElement.insertAdjacentHTML("afterend","<li>using After end</li>")
newElement.insertAdjacentHTML("afterbegin","<li>using After begin</li>")

//Clone Nodes
newElement=document.querySelector('.todo-list');
const newli=document.createElement('li');
newli.textContent="______new todo main______";
//clone
const newli2=newli.cloneNode(true);             //true will deep clone (inner elements)
newElement.append(newli);
newElement.prepend(newli2);

//__________________________________OLD BROWSER CODE HERE__________________________________

//to insert before the main element using inserBefore
newElement=document.querySelector('.todo-list');
const li=document.createElement('li');
//reference element
const referenceNode=document.querySelector(".first-todo")
li.textContent="new first";
newElement.insertBefore(li,referenceNode);      //(insert to be inserted,reference element)

//replace child
newElement.replaceChild(li, referenceNode); // will replace the main element
//remove child
newElement.removeChild(li);
// newElement=document.querySelector('.todo-list');
// const newli3=document.createElementelement(li);

// _______________________________________END_____________________________________________

