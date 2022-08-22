# js-analog-clock

## Description
A simple analog clock, meant to practise some vanilla javascript with. 

### HTML + CSS
The HTML and CSS is straightforward, a div for every hand of the clock, each number, and the clock itself with basic styles applied.

### JavaScript
#### clock hands
The main logic of this app is being able to apply CSS styles using JavaScript to the corresponding hands or numbers.
With the hands, a new Date object is created in order to save the current time into 3 variables: seconds, minutes, and hours. Then, apply a transform: rotate property onto the hands using and set them in place according to whatever the current time is. 
Then, with a setInterval function, it runs the above function every 100ms to ensure the clock updates accordingly to match current time.

#### clock numbers
I could have aligned the clock's numbers using some CSS and the rotate property for each individual number, however it seemed for elegant to write a function to do that all at once. I selected all the divs with a number class with querySelectorAll, and then looped through all of them at once using the forEach method, and applying a simple function to each div so that based on the current iteration of the loop, the number's position on the clock is applied using transform: rotate 
