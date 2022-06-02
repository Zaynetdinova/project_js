let questions = [
    {
        id: 1,
        title: 'Как преобразовать строку в верхний регистр?',
        answer: ['toLowerCase', 'toUpperCase', 'push', 'pop']
    },
    {
        id: 2,
        title: 'Какой метод window показывает сообщение и запрашивает ввод текст пользователя?',
    },
    {
        id: 3,
        title: 'Для чего используется опрератор ||',
    },
]

let root = document.querySelector('#root')

function addQuestions (id=1) {
   root.insertAdjacentHTML('beforeend', `<div class="title" id=${questions[id-1].id}>${questions[id-1].title}</div>`);
}

function addInput(id=1) {
    questions[id-1].answer.forEach(function(item){
        root.insertAdjacentHTML('beforeend', `<input name="r1" type="radio" value="${item}">${item}`);
    })   
}

function addButton() {
    root.insertAdjacentHTML('beforeend', '<input id="button" type="submit" value="Отправить">')
}

function clickButton() {
    let elem = document.querySelector('#button')
    elem.addEventListener( 'click' , () => createElem());
}


function createElem() {
    addQuestions()
    addInput()
}
createElem()
addButton()
clickButton()



