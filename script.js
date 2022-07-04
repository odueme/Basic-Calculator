class Calculator{
    constructor(currentOperand, previousOperand){
        this.currentOperand = currentOperand
        this.previousOperand = previousOperand
        
    }

    clear(){
        this.currentOperand.innerText = ''
        this.previousOperand.innerText = ''

    }

    allClear(){
        this.currentOperand.innerText = ''
        this.previousOperand.innerText = ''
    }
    


    setPreviousNum(operation){
        this.operation = operation
      this.previousOperand.innerText = `${this.currentOperand.innerText} `
      this.currentOperand.innerText = ''
    
    }   

    compute(){
        let answer
        const previousNum = parseFloat(this.previousOperand.innerText)
        const currentNum = parseFloat(this.currentOperand.innerText)
       
        switch(this.operation){
            case '+': 
            answer = previousNum + currentNum
            break

            case '-': 
            answer = previousNum - currentNum
            break

            case 'x': 
            answer = previousNum * currentNum
            break

            case '/': 
            answer = previousNum / currentNum
            break

            default: return
         
        }
       
        
        this.currentOperand.innerText = answer
        
        this.previousOperand.innerText = ''
      
        

        
    }

    Append(number){
        
       
        currentOperand.innerText = currentOperand.innerText + number
    }

    
    
}


const numberClicked = document.querySelectorAll('.num')
const operationClicked =  document.querySelectorAll('#operation')
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#del')
const currentOperand = document.querySelector('.current')
const previousOperand = document.querySelector('.previous')
const enterButton = document.querySelector('#enter')

const calculator = new Calculator(currentOperand, previousOperand)





//created for loop to loop through the array of num class
for(let number of numberClicked){
    
//created an event listner to check for a button click
number.addEventListener('click', () =>{



    calculator.Append(number.innerText)
    
   
    
})
}


for(let numbers of operationClicked){
    
    
    numbers.addEventListener('click', () =>{

        
        currentOperand.innerText = currentOperand.innerText + ' ' + numbers.innerText
        calculator.setPreviousNum(numbers.innerText)
       
        
    })
    }

    enterButton.addEventListener('click', () =>{
              
       calculator.compute()
    
        
    })


    clearButton.addEventListener('click', () =>{
        calculator.allClear()
    })


    

