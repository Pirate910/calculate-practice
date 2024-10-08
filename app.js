function calc () {

    const submitBtn = document.querySelector('#submit')
    const resultEl = document.querySelector('#result') 
    const firstNum = document.querySelector('#input1')
    const secondNum = document.querySelector('#input2')

    const minusBtn = document.querySelector('#minus')
    const plusBtn = document.querySelector('#plus')
    // const multiplicationBtn = document.querySelector('#multiplication')

    minusBtn.onclick = () => {

        action = '-'

    }

    plusBtn.onclick = () => {

        action = '+'

    }

    // multiplicationBtn.onclick = () => {
    //     action = '*'
    // }

    // мы получается задаем ключ action для хранения данных для проверки на if
    // получается когда мы задаем if (action == 'какое то действие, скажем минус или плюс') - он обращается к функциям кликам, чтобы плюс и т.д кнопки работали тоже
    // if в функции  submit обращается по ключу action к функциям кнопок вычисления и таким образом работают плюсы и минусы 


    const printResult = (result) => {
        if(result < 0){
            resultEl.style.color = 'red'
        }else if(result>0){
            resultEl.style.color = 'green'
        }
        resultEl.textContent = result
    }

    const computeNumbersWithAction = (firstSum, secondSum, actionSymbol) => {
        const num1 = Number(firstSum.value)
        const num2 = Number(secondSum.value)
        if(actionSymbol == '+'){
            return num1 + num2
        }else if(actionSymbol == '-'){
            return num1 - num2
        }
    }


    submitBtn.onclick = () => {

        const result = computeNumbersWithAction(input1, input2, action) //шпаргалка: можно поменять input1 на fistNum и от этого ничего не изменится
                                                                        //потому что и обе обращаются к id input1 (можно посмотреть тот же input1 в значении firstNum = ....)
        printResult(result)

        // почему input1?
        // потому что получается он отсылается к существующему классу firstNum и т,
        console.log(input1, input2)
        console.log(action)

    }


    // const result =  Number(firstNum) + Number(secondNum)
    // resultBtn.textContent = result
    // console.log(resultBtn.textContent)

}

calc()