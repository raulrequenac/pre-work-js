const form = document.getElementById("calculator")

const addToDisplay = (char) => form.display.value += char
const clearDisplay = () => form.display.value = ''
const displayResult = () => form.display.value = eval(form.display.value)