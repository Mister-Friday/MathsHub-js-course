//ИГРА
//Нажва на кнопку "Начать" игра запускается, генерируется задача
//Пользователь вводит ответ, должна появиться кнопка "Проверить"
//Нажав на кнопку "Проверить" мы сравниваем введенное значение пользователя с ответом
//Выводим результат и правильное значение, сменить кнопку на "Начать заново"
//
//
//
// const testValue = "string"

// function test(str) {

//     return str + null

// }

// console.log(test(testValue))

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {

    // const randomNum1 = getRandomNumInRange(0,100)
    // const randomNum2 = getRandomNumInRange(0,100)

    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // }else {
    //     symbol = "-"
    // }
    // Или:
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
//console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        //генерируем задачу и ответ
        //const task = getTask()
        //показыаем задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        //меняю кнопку
        btnGame.innerText = "Проверить >"
        //меняю состояние
        toggleGameState()
    } else {
        //Сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        //Вывести результат
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        //Вывести поздравление
        title.innerText = (isRight) ? "Верно!" : "Фу-у-у! Не правильно! Иди учи математику, балбес!"
        //Поменять кнопку и состояние
        btnGame.innerText = "Начать заново?"
        toggleGameState()

    }
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})


// ТОЖЕ САМОЕ:
// btnGame.onclick = () => {
//     if (!gameState.taskInProcess) {
//         title.innerText = "Игра началась!"
//         userAnswer.value = null
//         //генерируем задачу и ответ
//         //const task = getTask()
//         //показыаем задачу пользователю
//         userTask.innerText = getTask()
//         userAnswer.hidden = false
//         //меняю кнопку
//         btnGame.innerText = "Проверить >"
//         //меняю состояние
//         toggleGameState()
//     } else {
//         //Сравнить ответ пользователя с правильным
//         const isRight = gameState.rightAnswer == userAnswer.value
//         //Вывести результат
//         userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
//         //Вывести поздравление
//         title.innerText = (isRight) ? "Верно!" : "Фу-у-у! Не правильно! Иди учи математику, балбес!"
//         //Поменять кнопку и состояние
//         btnGame.innerText = "Начать заново?"
//         toggleGameState()

//     }


const choosedEl = document.querySelectorAll(".choosed_block-conteiner > div")
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", (e) => {
        if (e.target.className === "") {
            e.target.className = "choosed_element"
            choosedState.setCountValue(1)
        } else {
            e.target.className = ""
            choosedState.setCountValue(-1)
        }
    })
}
// ДАЛЕЕ ТОТ ЖЕ ФУНКЦИОНАЛ:

// const eventFunc = (e) => {
//     if (e.target.className === "") {
//         e.target.className = "choosed_element"
//         choosedState.setCountValue(1)
//     } else {
//         e.target.className = ""
//         choosedState.setCountValue(-1)
//     }
// }

// for (let i = 0; i < choosedEl.length; i++) {
//     choosedEl[i].addEventListener("click", eventFunc)
// }

// choosedEl[2].removeEventListener("clbck", eventFunc)

// const choosedEl = document.querySelectorAll(".choosed_block-conteiner > div")
// const counterEl = document.querySelector(".choosed_block span")
// for (let i = 0; i < choosedEl.length; i++) {
//     choosedEl[i].addEventListener("click", (e) => {
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             counterEl.innerText = +counterEl.innerText + 1
//         } else {
//             e.target.className = ""
//             counterEl.innerText = counterEl.innerText - 1
//         }
//     })
// }

// const choosedEl = document.querySelectorAll(".choosed_block-conteiner > div")
// const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
// countElements: 0,
// }
// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements
// }

// for (let i = 0; i < choosedEl.length; i++ ) {
//     choosedEl[i].addEventListener("click", (e) => {
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             //counterEl.innerText = +counterEl.innerText + 1
//             changeCount(1)
//         } else {
//             e.target.className = ""
//             changeCount(-1)
//         }
//     })
// }
