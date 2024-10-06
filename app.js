function calc () {

    const submitBtn = document.querySelector('#submit')
    const resultEl = document.querySelector('#result') 
    const firstNum = document.querySelector('#input1')
    const secondNum = document.querySelector('#input2')

    const minusBtn = document.querySelector('#minus')
    const plusBtn = document.querySelector('#plus')
    const multiplicationBtn = document.querySelector('#multiplication')

    minusBtn.onclick = () => {

        action = '-'

    }

    plusBtn.onclick = () => {

        action = '+'

    }

    multiplicationBtn.onclick = () => {
        action = '*'
    }

    // мы получается задаем ключ action для хранения данных для проверки на if
    // получается когда мы задаем if (action == 'какое то действие, скажем минус или плюс') - он обращается к функциям кликам, чтобы плюс и т.д кнопки работали тоже
    // if в функции  submit обращается по ключу action к функциям кнопок вычисления и таким образом работают плюсы и минусы 



    submitBtn.onclick = () => {

        if(action == '+'){
            const sum = Number(firstNum.value) + Number(secondNum.value)
            resultEl.textContent = sum
        }else if(action == '-'){
            const sum = Number(firstNum.value) - Number(secondNum.value)
            resultEl.textContent = sum

        }else if(action == '*'){
            const sum = Number(firstNum.value) * Number(secondNum.value)
            resultEl.textContent = sum
        }

    }


    // const result =  Number(firstNum) + Number(secondNum)
    // resultBtn.textContent = result
    // console.log(resultBtn.textContent)

}

calc()