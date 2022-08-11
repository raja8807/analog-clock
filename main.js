let barHolder = document.getElementById("bar-holder")
let smallBarHolder = document.querySelector(".small-bar-holder")
let outer = document.querySelector(".outer")

let angle = 0;

for (let i = 0; i <= 29; i++) {
    let newBar = document.createElement("div")
    if (i % 5 == 0) {
        newBar.setAttribute("class", "bar-holder")
        newBar.innerHTML = barHolder.innerHTML;
    } else {
        newBar.setAttribute("class", "small-bar-holder")
        newBar.innerHTML = smallBarHolder.innerHTML;
    }
    newBar.style.transform = "rotate(" + angle + "deg)"
    outer.appendChild(newBar)
    angle = angle + 6
}

let bars = document.querySelectorAll(".min")
console.log(bars);

let minEven = 0;
let minOdd = 30;

bars.forEach((bar, i) => {
    if (i > 3) {
        if (i % 2 == 0) {
            bar.min = minEven;
            minEven = minEven + 1
        } else {
            bar.min = minOdd;
            minOdd = minOdd + 1
        }
    }
})

// Set Time 

let generateBtn = document.getElementById("generateBtn")
let minHand = document.getElementById("minute-hand-holder")
let hourHand = document.getElementById("hour-hand-holder")

let hourOut = document.getElementById("hourOut");
let MinOut = document.getElementById("minOut");

function setTime() {

    let min = Math.floor(Math.random() * 60)
    let hour = Math.floor(Math.random() * 12);

    let minAngle = min * 6
    let hourAngle = (hour * 60 + min) * 0.5;

    minHand.style.transform = "rotate(" + minAngle + "deg)"
    hourHand.style.transform = "rotate(" + hourAngle + "deg)"

    if (hour == 0) {
        hourOut.innerText = 12
    } else {
        if (hour < 10) {
            hourOut.innerText = "0" + hour
        } else {
            hourOut.innerText = hour
        }
    }

    if (min < 10) {
        minOut.innerText = "0" + min
    } else {
        minOut.innerText = min
    }
}

generateBtn.addEventListener("click", setTime);