var display = document.getElementById('calc-display')

function appendNumber(number) {
  var stringValue = String(number)
  display.innerHTML += stringValue
  console.log("display.innerHTML: " + display.innerHTML)
}

function solve() {
  var items = display.innerHTML.split('+')
  var fullString = display.innerHTML
  display.innerHTML = eval(fullString)

  console.log("items: " + items)
  console.log("fullString: " + fullString)
}

function clearDisplay() {
  display.innerHTML = ''
}

function sliceStr() {
  var str = display.innerHTML
  var strLen = str.length
  display.innerHTML = display.innerHTML.slice(0,strLen-1)
}

function percent() {
  var amount = display.innerHTML
  amount=Number(amount/100)
  display.innerHTML = amount
}