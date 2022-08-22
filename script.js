const secondsHand = getElement('#seconds-hand')
const minutesHand = getElement('#minutes-hand')
const hoursHand = getElement('#hours-hand')
const getNumbers = document.querySelectorAll('.number')

getNumbers.forEach(printNumbers)

function printNumbers(element, index) {
  const degree = 30
  console.log(element, index)
  element.style.transform = `rotate(${degree * (index + 1)}deg)`
}

function getTime() {
  const currentTime = new Date()
  const seconds = currentTime.getSeconds()
  const minutes = currentTime.getMinutes()
  const hours = currentTime.getHours()

  // 360degrees in a circle, 60s in an hour. 360/60 = 6
  const timeInterval = 6

  secondsHand.style.transform = `rotate(${(seconds * timeInterval)}deg)`
  secondsHand.style.transformOrigin = '0 100%'

  minutesHand.style.transform = `rotate(${(minutes * timeInterval)}deg)`
  minutesHand.style.transformOrigin = '0 100%'

  hoursHand.style.transform = `rotate(${(hours * timeInterval)}deg)`
  hoursHand.style.transformOrigin = '0 100%'
}

setInterval(getTime, 100)


// query Selector function
function getElement (selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error (`Please check "selection" selector, no such element exists`)
}

