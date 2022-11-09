let localStorage = window.localStorage; // localStorage made cleaner
let time = document.getElementById("time"); // time, self-explanatory
let count = JSON.parse(localStorage.getItem("count")); // Displays the count with the LocalStorage
const number = document.getElementById("number");
const clickableSection = document.getElementById("clickable-section");
const resetBtn = document.getElementById("resetBtn");
const multiBtn = document.getElementById("multiplierBtn");
const soundToggle = document.getElementById("sound-toggle");

let soundIsOn = true;


number.textContent = count; // Displays count
clickableSection.addEventListener("click", () => {
    count += multiplier; // Adds the count with the multiplier
    localStorage.setItem("count", JSON.stringify(count)); 
    number.textContent = count; // Update the count
    const audio = new Audio("/Sounds/mixkit-slide-click-1130.wav");
    if (soundIsOn) {
        audio.play(); // Plays the sound
    }
    
});


let multiplier = 1; //Default multiplier number.

multiBtn.addEventListener("click", () => {
    // Clicking the multiplier button does the following.
    let multiplierStr = prompt("Choose a number from 1 to 100 to count by.", "1"); // Displays prompt to choose what is the multiplier
    if (multiplierStr <= 100 && multiplierStr >= 1) {
        // If the multiplier that the users chose is between 1 and 100.
        alert(`The multiplier has changed to ${multiplierStr}`); // displays an alert.
        multiplier = Number(multiplierStr); // changes the string into a number.
    } else {
        // If the number isn't between 1 and 100 it displays an alert and changes the multiplier to the basic value.
        alert(`You must choose a number between 1 to 100.`); // Displays an alert.
        multiplier = 1; // changes the multiplier to 1
    }
    multiBtn.textContent = `By ${multiplier}'s`; // Changes the button's text to the current multiplier.
});


resetBtn.addEventListener("click", () => {
    // Clicking the reset button makes it the count and the display's count 0, also displays an alert.
    number.textContent = 0; // Changes the text of the number.
    count = 0; // Sets the value of the variable to 0.
    alert("The counter has been reset!"); // Displays an alert.
});


soundToggle.addEventListener("click", () => {
   soundIsOn = !soundIsOn;
   
   soundToggle.style.color = soundIsOn ? "white" : "grey";
   
});
// let today = new Date(); // Gets current date
// time.textContent = today.getHours() + ":" + today.getMinutes(); // Here we choose what functions we want from the Date() Function.
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var timeStr = hours + ":" + ("" + minutes).padStart(2, '0') + " ";
    document.getElementById('time').textContent = timeStr;
}
setInterval(updateTime, 1000);