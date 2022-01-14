const form=document.querySelector('.formList');
const todoform = document.querySelector('.formList input[type="text"]');
const todoSubmit = document.querySelector('.formList input[type="submit"]')

const parent = todoform.parentElement.nextElementSibling;
console.log(parent);


const removeBtn=document.querySelector('.remove')
console.log(removeBtn);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let newliText= todoform.value;
    let newli = document.createElement('li');
    todoform.value="";
    newli.innerHTML = `<span class="text">${newliText}</span>
    <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>`;
    parent.append(newli);

    let doneBtn=todoform.parentElement
    console.log(doneBtn);
})

parent.addEventListener('click',function (e){
    if(e.target.classList.contains('done')){
        const goals=e.target.parentElement.previousElementSibling;
        goals.style.textDecoration='line-through';
    }
    else if(e.target.classList.contains('remove')){
        const goals=e.target.parentElement.parentElement;
        goals.remove();
    }
})


