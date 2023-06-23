var tripInfoButton = document.querySelector(".trip-info");

var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function(){

    var totalBudget = Number(prompt("What is your total budget?"));
    var accomodation = Number(prompt("“What are your accommodation costs?”"));
    var numDays = Number(prompt("How many days does your trip last?"));

    calculateDailyBudget(totalBudget, accomodation, numDays);
};



var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
  };
  
  tripInfoButton.addEventListener("click", tripInfo);



