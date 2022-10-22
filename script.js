var form = document.getElementById("forms");
form.onsubmit = function(e) {
  e.preventDefault();


  var userName = document.getElementById("name").value;
  var userPredict = document.getElementById("predictno").value;

  let score = 0;
  let level = 1;
  let maxNo = 2;

  function guessNumber() {
    let userRange = Math.floor(Math.random() * maxNo) + 1;
    if (userRange === userPredict) {
      score += 10;
      let msg = "Weldone " + userName + " CORRECT! your score is ";
      document.getElementById("msgout").innerHTML = msg;
      level += 1;
      document.getElementById("attempt").innerHTML = level;
      document.getElementById("total-score").innerHTML = score;

      maxNo += 1;
      guessNumber();
    } else {
      let isOver = "You enter a wrong number. GAME OVER!";
      document.getElementById("gameover").innerHTML = isOver;
      level -= 1;
      document.getElementById("total-score").innerHTML = score;
    }
  }
  guessNumber();
}





/*
$(document).ready(function() {
  //Declaring initial max number
  var maxNo = 2;
  var score = 0;

  //to get the username
  const userName = document.getElementById("name");

  var userInput = document.getElementById("predictno");
  console.log(userInput);
  //userInput = userInput.text();



  //funnction for the game

  function checkGuessno(randomVal, userInput) {

    if (randomVal == userInput) {
      maxNo++;
      score += 10;

      setValue("result", randomVal); // Set the value of result element
      setValue("total-score", score);  // set the value of the user total score

    }

  }

  function randomVal(maxNo) {
    // Random number is generated
    var randomNo = Math.floor(Math.random() * maxNo) + 1;
    return randomNo;
  }

  var runBtn = document.getElementById("run");
  runBtn.addEventListener("click", () => {

    let randomValue = randomVal(maxNo);
    alert(randomValue + " - " + userInput);
    checkGuessno(randomValue, userInput);
  })

  function setValue(id, value) {
    var ele = document.getElementById(id);
    ele.setAttribute("value", value);
  }

  function getValue(id, value) {
    var ele = document.getElementById(id);
    ele = ele.getAttribute("value");
    return ele.value;
  }





  let initNo = document.getElementsByClassName("init-no");



})
*/