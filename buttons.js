const buttons=document.querySelectorAll('.my-buttons button')
console.log(buttons.length)
const bodycolor=document.querySelector('body');
console.log(bodycolor.lastChild);

const hcolor=document.querySelector('.info h3');
console.log(hcolor);

const Red=Math.floor(Math.random()*255);
const Green=Math.floor(Math.random()*255);
const Blue=Math.floor(Math.random()*255);

let color=`rgb(${Red},${Green},${Blue})`;

random =function(){
    const Red=Math.floor(Math.random()*255);
    const Green=Math.floor(Math.random()*255);
    const Blue=Math.floor(Math.random()*255);
    let color=`rgb(${Red},${Green},${Blue})`;
    return color;
}

for(let button of buttons){
    console.log(button);
    button.addEventListener('click',function(e){console.log(e.target)
    e.target.style.color=random();
    e.target.style.background=random();
    bodycolor.style.background=random()})
    // button.addEventListener('click',function(){bodycolor.style.color="green"})
    hcolor.textContent=random();
}

mainButton=document.querySelector('.main-button');
console.log(mainButton)
mainButton.addEventListener('click',function (){
    bodycolor.style.background=random();
    hcolor.textContent=random();
})