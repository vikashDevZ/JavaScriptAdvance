const myInput= document.getElementById('input-event')
const btn= document.getElementById('btn')
//Trailing debouncing
//calling function only after the timeout is completed


function debounce(func,delay){
    
    let timeId;

    return function(...args){
        if(timeId){
            clearTimeout(timeId)
        }
        timeId=setTimeout(()=>{
            func.call(this, ...args)
        },delay)
    }
}

//leading debouncing
//always runs function first time and then runs when the user rest the keys

function leadingDebouncing(func,delay){
    let timeId;
    return function(...args){
        if(!timeId){
            func.call(this,...args)
        }
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
            timeId=null;
        },delay)
    }
}

function findSuggestion(e){
    console.log(e.target.value)
}

const decoratedFunc=debounce(findSuggestion,500)

myInput.addEventListener('input',decoratedFunc)

function handleClick(){
    console.log(Math.random())
}

// btn.addEventListener('click',leadingDebouncing(handleClick,400))

btn.addEventListener('click',betterDebouncing(handleClick,400,{leading:true,trailing:true}))


//leading + trailling
function betterDebouncing(func,delay,option={leading:false,trailing:true}){
    let timeId=null;
    return function(...args){
        let isInvoked=false;
        if(!timeId && option.leading){
            func.call(this,...args);
            isInvoked=true;
        }
        clearTimeout(timeId);
        timeId=setTimeout(()=>{
            if(option.trailing && !isInvoked){
                func.call(this,...args)
            }
            timeId=null;
        },delay)
    }
}