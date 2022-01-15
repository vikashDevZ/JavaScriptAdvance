//UnderStanding Callback better

function myFunc(callback){
    console.log('function is doing tesk 1');
    callback();
}

function myFunc2(){
    console.log('function is doing task 2')
}
myFunc(myFunc2);


//function inside callback function 
function print(number1,number2,callback,onError){
    if(typeof number1== "number" && typeof number2=="number" ){
        callback(number1,number2);
    }else{
        onError();
    }
}

const numbers=print('i',3,(num1,num2)=>{
    console.log(num1+num2)},()=>console.log('wrong data type'));


//Callbacks with ASYNCRONOUS programming

//CALLBACK HELL

heading=document.querySelector('.heading1');
heading2=document.querySelector('.heading2');
heading3=document.querySelector('.heading3');
heading4=document.querySelector('.heading4');
heading5=document.querySelector('.heading5');
heading6=document.querySelector('.heading6');
heading7=document.querySelector('.heading7');
heading8=document.querySelector('.heading8');
heading9=document.querySelector('.heading9');
heading10=document.querySelector('.heading10');


// console.log(heading);
// setTimeout(()=>{
//     heading.textContent='null1';
//     heading.style.color='red';
//     setTimeout(()=>{
//         heading2.textContent='null2';
//         heading2.style.color='brown';
//         setTimeout(()=>{
//             heading3.textContent='null3';
//             heading3.style.color='purple';
//             setTimeout(()=>{
//                 heading4.textContent='null4';
//                 heading4.style.color='cyan';
//                 setTimeout(()=>{
//                     heading5.textContent='null5';
//                     heading5.style.color='green';
//                     setTimeout(()=>{
//                         heading6.textContent='null6';
//                         heading6.style.color='pink';
//                         setTimeout(()=>{
//                             heading7.textContent='null7';
//                             heading7.style.color='orange';
//                             setTimeout(()=>{
//                                 heading8.textContent='null8';
//                                 heading8.style.color='indigo';
//                                 setTimeout(()=>{
//                                     heading9.textContent='null9';
//                                     heading9.style.color='magenta';
//                                     setTimeout(()=>{
//                                         heading10.textContent='null10';
//                                         heading10.style.color='blue';
//                                         },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
        
//         },1000)
    
//     },1000)



//Pymarid Of DOOOOOOM

function changeText(element,text,color,time,onSuccess,onFailure){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccess){                  //will run when the onSuccess is passed
                onSuccess();
            }
        }else{
            console.log('elemet does not exist');
            onFailure();
        }
            
    },time)
}
changeText(heading,'hhe','blue',1000,()=>{
    changeText(heading2,'yoyo','green',1000,()=>{
        changeText(heading3,'xDD','yellow',1000,()=>{
            changeText(heading4,'LOL','red',1000,()=>{
                changeText(heading5,'rofl','pink',1000,()=>{
                    changeText(heading6,'lmao','orange',1000,()=>{
                        changeText(heading7,'lol','indigo',1000,()=>{
                            changeText(heading8,'LOL','magenta',1000,()=>{
                                changeText(heading9,'Haha','purple',1000,()=>{
                                    changeText(heading10,'BRB','cyan',1000,()=>{

                                    },()=>{console.log('element does not exist')})  
                                },()=>{console.log('element does not exist')})  
                            },()=>{console.log('element does not exist')})  
                        },()=>{console.log('element does not exist')})  
                    },()=>{console.log('element does not exist')})  
                },()=>{console.log('element does not exist')})  
            },()=>{console.log('element does not exist')})  
        },()=>{console.log('element does not exist')})
    },()=>{console.log('element does not exist')})
},()=>{console.log('element does not exist')});


