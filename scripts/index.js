let time_form = document.querySelector(".time-form");
let converted_time = document.querySelector(".converted-time");



// HANDLE FORM SUBMISSION
time_form.addEventListener("submit", e => {
    // PREVENT THE DEFAULT ACTION WHICH WOULD RELOAD THE PAGE
    e.preventDefault();

    let hours = document.querySelector(".hours").value;
    let minutes = document.querySelector(".minutes").value;

    // CONVERT TIME TO MINUTES
    let new_minutes = time_to_miutes(hours, minutes);

    // CONVERT MINUTES TO HOURS
    minutes_to_hours(new_minutes);
})

// FUNCTION WILL TAKE IN hous AND minutes AND CONVERT THEM TO TOTAL MINUTES
function time_to_miutes(hours, minutes) {
    // GET HOURS IN MINUTES
    hours = hours * 60;
    // ADD THE TWO TOGETHER AND RETURN THE RESULT
    return parseInt(hours) + parseInt(minutes);
}

// FUNCTION WILL ROUND A NUMBER TO A SPECIFIED AMOUNT OF DECIMAL PLACES
// article: https://learnersbucket.com/examples/javascript/learn-how-to-round-to-2-decimal-places-in-javascript/
function round_off(num, places) {
    // To round off any number to any decimal place we, first multiply the input number with 10 ^ decimal place
    const x = Math.pow(10,places);
    // and then divide it by 10 ^ decimal place
    return Math.round(num * x) / x;
}

// FUNCTION TAKES IN minutes AND CONVERTS IT TO DECIMAL HOURS AND OUTPUTS IT TO THE SCREEN
function minutes_to_hours(minutes) { 
    let decimal_time = round_off(minutes / 60, 2);

    converted_time.textContent = `The converted time is: ${decimal_time}`;
}

