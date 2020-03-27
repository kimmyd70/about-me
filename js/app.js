'use strict';

//REMEMBER to comment out console logs

//Display personal welcome
var userName = prompt('Hi. What\'s your name?');
console.log('The user\'s name is: ' + userName);
alert('Hi ' + userName + '. Welcome!');

//Ask 5 questions.  Accept y/n or yes/no in caps or lower.  Alert with answer right or wrong
//q1 = ready?
var ready;
var q1 = prompt('Are you ready to play a quiz?');
ready = q1.toLowerCase();

if ((ready === 'y') || (ready === 'yes')){
  console.log ('Great.  Let\'s start.');
  alert ('Great.  Let\'s start.');
}
else if ((ready ==='n') || (ready ==='no')){
  console.log ('Ok.  Take a deep breath and refresh the page when you are ready');
  alert('Take a deep breath.  It\'ll be ok.  Here we go!');
}
else{
  console.log ('I said....Are.  You.  Ready??');
  alert('I said....Are.  You.  Ready??');
}

//q2 = Favorite color?
var color;
var q2 = prompt('Take a look at my site. Do you think my favorite color is purple?');
color = q2.toLowerCase();

if ((color === 'y') || (color === 'yes')){
  console.log ('It\'s obvious, isn\'t it!');
  alert ('It\'s obvious, isn\'t it!');
}
else if ((color ==='n') || (color ==='no')){
  console.log ('Really?  It\'s not obvious?!');
  alert('Really?  It\'s not obvious?!');
}
else{
  console.log ('You\'re not reading the question, are you?');
  alert('You\'re not reading the question, are you?');
}

//Q3 = Greek name?
var greek;
var q3 = prompt('Do you think my last name is Greek?');
greek = q3.toLowerCase();

if ((greek === 'y') || (greek === 'yes')){
  console.log ('Yep. The spelling gives it away');
  alert ('Yep. The spelling gives it away');
}
else if ((greek ==='n') || (greek ==='no')){
  console.log ('My name and my nose are Greek.  You couldn\'t tell?');
  alert('My name and my nose are Greek.  You couldn\'t tell?');
}
else{
  console.log ('These questions aren\'t THAT hard.');
  alert('These questions aren\'t THAT hard.');
}

//Q4 = Education
var degree;
var q4 = prompt('Does anyone realllly need 3 Master\'s degrees?');
degree = q4.toLowerCase();

if ((degree === 'y') || (degree === 'yes')){
  console.log ('I know, right?!');
  alert ('I know, right?!');
}
else if ((degree ==='n') || (degree ==='no')){
  console.log ('Well....I like to learn');
  alert('Well....I like to learn');
}
else{
  console.log ('C\'mon! Pay attention!');
  alert('C\'mon! Pay attention!');
}

//Q5 = Goals
var goal;
var q5 = prompt('Working from home is pretty sweet, isn\'t it?');
goal = q5.toLowerCase();

if ((goal === 'y') || (goal === 'yes')){
  console.log ('Yoga Pants!!');
  alert ('Yoga Pants!!');
}
else if ((goal ==='n') || (goal ==='no')){
  console.log ('Weirdo. I guess you like leaving your house.');
  alert('Weirdo. I guess you like leaving your house.');
}
else{
  console.log ('I give up!');
  alert('I give up!');
}

//display final message including name
console.log('Thanks for playing, ' + userName);
alert('Thanks for playing, ' + userName);
