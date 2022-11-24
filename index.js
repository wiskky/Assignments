let userName = prompt("Enter your username");

//Initial declaration
let score = 0;
let level = 1;
let maxNo = 2;

console.log(userName + " Start level " + level);   //Output some information

//Declaring function
function noGame() {
  let userRange = Math.floor(Math.random() * maxNo) + 1;
  //generating range from 1 to 2
  console.log("Enter number from 1 to " + maxNo);
  let userGuess = parseInt(prompt("Enter your number "));
  if (userRange === userGuess) {
    score += 10;
    console.log("CORRECT! your score is " + score);
    level += 1;
    console.log("MOVE TO LEVEL " + level);

    maxNo += 1;
    noGame();
  } else {
    console.log("You enter a wrong number. GAME OVER!");
    level -= 1;
    console.log("Your total score is " + score + " and your level is " + level);
  }
}

noGame();
