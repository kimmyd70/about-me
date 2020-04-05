'use strict';


//Display personal welcome
var userName = prompt('Hi. What\'s your name?');
alert('Hi ' + userName + '. Welcome!');

//Count number of right answers

var correct = 0;

//Ask 5 questions.  Accept y/n or yes/no in caps or lower.  Alert with answer right or wrong
//q1 = ready?

function askReady(){
  var ready = prompt('Are you ready to play a quiz?').toLowerCase();

if ((ready === 'y') || (ready === 'yes')){
  alert ('Great.  Let\'s start.');
  correct ++;
}
else if ((ready ==='n') || (ready ==='no')){
  alert('Take a deep breath.  It\'ll be ok.  Here we go!');
}
else{
  alert('I said....Are.  You.  Ready??');
}
askReady();

//q2 = Favorite color?

function askColor(){
  var color = prompt('Take a look at my site. Do you think my favorite color is purple?').toLowerCase();

if ((color === 'y') || (color === 'yes')){
  alert ('It\'s obvious, isn\'t it!');
  correct ++;
}
else if ((color ==='n') || (color ==='no')){
  alert('Really?  It\'s not obvious?!');
}
else{
  alert('You\'re not reading the question, are you?');
}
askColor();

//Q3 = Greek name?
function askGreek(){
  var greek = prompt('Do you think my last name is Greek?').toLowerCase();

if ((greek === 'y') || (greek === 'yes')){
  alert ('Yep. The spelling gives it away');
  correct ++;
}
else if ((greek ==='n') || (greek ==='no')){
  alert('My name and my nose are Greek.  You couldn\'t tell?');
}
else{
  alert('These questions aren\'t THAT hard.');
}
askGreek();

//Q4 = Education
function askDegree(){
  var degree = prompt('Does anyone realllly need 3 Master\'s degrees?').toLowerCase();

if ((degree === 'y') || (degree === 'yes')){
  alert ('I know, right?!');
  correct ++;
}
else if ((degree ==='n') || (degree ==='no')){
  alert('Well....I like to learn');
}
else{
  alert('C\'mon! Pay attention!');
}
askDegree();

//Q5 = Goals
function askGoal(){
  var goal = prompt('Working from home is pretty sweet, isn\'t it?').toLowerCase();

if ((goal === 'y') || (goal === 'yes')){
  alert ('Yoga Pants!!');
  correct ++;
}
else if ((goal ==='n') || (goal ==='no')){
  alert('Weirdo. I guess you like leaving your house.');
}
else{
  alert('I give up!');
}
askGoal();

//Q6 = Guess a number; 4 attempts
function askSecretNumber(){
  var guessCount = 1;
  var numRight = false;

  while ((guessCount <= 4) && (numRight === false)){
    var secretNum = prompt('Guess a number between 0 and 200');

  if ((secretNum < 151) && (secretNum >= 0) && (secretNum !== '')) {
    alert ('The secret number is higher.');
  }
  else if (secretNum === '151'){
    alert ('Yay. You guessed the secret number!');
    numRight = true;
    correct ++;
  }
  else if ((secretNum > 151) && (secretNum <= 200) && (secretNum !== '')){
    alert ('The secret number is lower.');
  }
  else {
    alert ('Please guess a number between 100 and 200');

    }
    guessCount ++;
  }

<<<<<<< HEAD
//wrong show secret number
if ((guessCount > 4) && (numRight === false)){
  alert ('Good try. The secret number is 151.');
=======
  //wrong show secret number
  if ((guessCount > 4) && (numRight === false)){
    //console.log ('Good try. The secret number is 151.');
    alert ('Good try. The secret number is 151.');
  }
>>>>>>> 93061fe3bf6ca4c11aa6be4da84fd66754974271
}
askSecretNumber();

//Q7 = guess answer with multiple correct answers; 6 attempts;
//display all correct answers if correct guess or 6 attempts

function askCountry(){
  var guessCount2 = 1;
  var countryRight = false;
  var countryArr = ['US', 'Germany', 'Greenland', 'England', 'Iraq'];

  while ((guessCount2 <= 6) && (countryRight === false)){
    var country = prompt('Guess a country I\'ve live in').toLowerCase();
    var index;
    for (index= 0; index <= 4; index ++){
    // check array for match to var country
      if (country === countryArr[index].toLowerCase()){
        countryRight = true;
        correct ++;
      }
    }
    if (countryRight === false){
      //console.log ('Try again.');
      alert ('Try again.');
      guessCount2 ++;
    }
  }
<<<<<<< HEAD
  if (countryRight === false){
    alert ('Try again.');
    guessCount2 ++;
  }
}
//wrong--show country list messages
if ((guessCount2 > 6) && (countryRight === false)){
  alert ('Sorry.  You\'re out of guesses.  The countries are: ');
}
else{
  alert ('Yay. You guessed one! The countries are: ');
  countryRight = true;
}
=======
  //wrong--show country list messages
  if ((guessCount2 > 6) && (countryRight === false)){
    //console.log ('Sorry.  You\'re out of guesses.  The contries are: ');
    alert ('Sorry.  You\'re out of guesses.  The countries are: ');
  }
  else{
    //console.log ('Yay. You guessed one! The countries are: ');
    alert ('Yay. You guessed one! The countries are: ');
    countryRight = true;
  }
>>>>>>> 93061fe3bf6ca4c11aa6be4da84fd66754974271

  //show country list
  var countryList = '';
  for (index = 0; index < countryArr.length; index++){
    countryList += countryArr[index] + '\n';
  }

<<<<<<< HEAD
alert (countryList);
=======
  //console.log (countryList);
  alert (countryList);
}
askCountry();
>>>>>>> 93061fe3bf6ca4c11aa6be4da84fd66754974271

//display final message including name
alert('You got ' + correct + ' out of 7 correct. Thanks for playing, ' + userName);
