// form
const todosForm = document.querySelector('.todos__form')
const todosFormInput = document.querySelector('.todos__form--input')
const todosFormBnt = document.querySelector('.todos__form--btn')

// boxes
const box = document.querySelector('.box')
const todos = document.querySelectorAll('.todos__list')
const todosList = todos[0]
const doneList = todos[1]

async function generatorTodos() {
    try {
        const data = await fetch('http://localhost:3000/todos', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        const todos = await data.json()
        todosList.innerHTML = todos.map((item) =>`
            <li class="todos__item">
                <p class="todos__list_text">${item.title}</p>
                <div class="btn__box">
                    <button id="${item._id}" class="todos__list_btn confirm__btn">c</button>
                    <button id="${item._id}" class="todos__list_btn delete__btn">d</button>
                </div>
            </li>
        `).join("")
    } catch (error) {
        alert(error.message)
    }
}

async function generatorDone() {
    try {
        const data = await fetch('http://localhost:3000/todos', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        const todos = await data.json()
        doneList.innerHTML = todos.map((item) =>`
            <li class="todos__item">
                <p class="todos__list_text">${item.title}</p>
                <div class="btn__box">
                    <button id="${item._id}" class="todos__list_btn delete__btn">d</button>
                </div>
            </li>
        `).join("")
    } catch (error) {
        alert(error.message)
    }
}

todosForm.addEventListener('submit', async (e) =>{
    console.log('a');
    
    e.preventDefault()
    const newData = {
        title: todosFormInput.value
    }
    console.log(newData);
    
    await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newData)
    })
    todosFormInput.value = ''
    await generatorTodos()
})


todosList.addEventListener('click', async (e) =>{
    if(e.target.className === 'confirm__btn') {
        await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status: 'done'})
        })
    }
})