const form = document.getElementById("calculator")

//Show on display the current number and update the equation
const addToDisplay = (value) => {
  form.equation.value += value
  form.display.value += value
}

//Rest display
const clearDisplay = () => form.display.value = ''
const clearAll = () => {
  clearDisplay()
  form.equation.value = ''
}

//Add operator to the equation and clear display
const addOperator = (operator) => {
  form.equation.value += operator
  clearDisplay()
}


//Solve equation and show the result on the display
const displayResult = () => {
  try {
    form.display.value = eval(form.equation.value)
  } catch (e) {
    form.display.value = 0
  }
}