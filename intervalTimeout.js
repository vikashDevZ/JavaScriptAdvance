
//setTimeout  

//input as a funcion and time
//setTimeout is provided by browser
//it will go first in callback queue and then even loop will pass it into event loop after gec is completed

function hello(){
    console.log('hello!');
}
let id=setTimeout(hello,2000);     //minimum time needed before callback
console.log('script end')
clearTimeout(id);

//setInterval

//execute after the given interval every time 
setInterval(() => {
   console.log(Math.random()) 
}, 5000);
console.log('script end')


random= function(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const color=`rgb(${red},${green},${blue})`;
    return color;
}

const body=document.body;

const interval=setInterval(() => {
   body.style.background=random();
   console.log(random());
}, 1000);

const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    clearInterval(interval)
    btn.textContent=body.style.background;
});




