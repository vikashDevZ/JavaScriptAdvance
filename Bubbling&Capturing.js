//keypress event

const Body=document.body;
//pressed key info will be return
Body.addEventListener('keypress',(e)=>{
    console.log(e);
    console.log(e.key);
});

const child=document.querySelector('.child');
child.addEventListener('mouseover',()=>console.log('mouse over event occured'));
child.addEventListener('mouseleave',(e)=>console.log(e,'mouse leave event occured'));

//event bubbling/propogation  
//event capturing
//event deligation
const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');


grandparent.addEventListener('click',()=>console.log('you clicked on grandparent'));
//true will capture event first
parent.addEventListener('click',()=>console.log('clicked on parent'),true) 
child.addEventListener('click',()=>console.log('clicked on child element'))

//when the 3rd argument is true the even will start capturing from parent -> child
//when the 3rd argument is false/default the even will start capturing from child -> parent
