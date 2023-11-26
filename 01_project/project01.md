# PROJECTS Related to DOM

## project link
[Click here!](https://stackblitz.com/edit/web-platform-qacqzs?file=colorchanger%2Findex.html,colorchanger%2Fstyle.css,colorchanger%2Fcolor.js)

# project 1 :- @Solution code (Color Changer)

```javascript
const button = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener(
    'click',
    function (e) {
      // console.log(e);
      console.log(e.target);
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      } else if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'orange') {
        body.style.backgroundColor = e.target.id;
      }
    },
    false
  );
});

```
# project 2 :- @Solution code (Calculate Body mass Index)

```javascript
const form = document.querySelector('form');
// this usercase will give you empty value.
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener(
  'submit',
  function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please gie a valid weight ${weight}`;
    } else {
      const BMI = (weight / ((height * height) / 10000)).toFixed(2); //toFixed is used for (upto what decimal value).

      //to show result
      result.innerHTML = `<span>${BMI}</span>`;
    }
  },
  false
);



```
 # project 3 :- @Solution code (Digital clock)

 ```javascript
 const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

 
 ```
 # project 4 :- @Solution code (Guess the number)
 ```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessfield');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastresult');
let loworhi = document.querySelector('.loworhigh');
let StartOver = document.querySelector('.resultparas');

let p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a Valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number more than One');
  } else if (guess > 100) {
    alert('Please enter a Number less than Hundred');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage(`You guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`You guessed number is Too low`);
  } else if (guess > randomNumber) {
    displaymessage(`You guessed number is Too high`);
  }
}

function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `[${guess}]  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  StartOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebtn = document.querySelector('#newGame');
  newgamebtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    displaymessage('');
    playgame = true;
  });
}



 ```
# project 5 :- @Solution code (background Color shifting)

 ```javascript

  
    const  randomcolor = function(){
        let hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let intervalid;
    let Start = function(){
        if(!intervalid){
        intervalid = setInterval(changecolor,2000);
        }

        function changecolor(){
        document.body.style.backgroundColor = randomcolor();
        };
    };

    let Stop = function(){
        clearInterval(intervalid);
        // intervalid = null;
    };

   document.querySelector('#start').addEventListener('click',Start);
   document.querySelector('#stop').addEventListener('click',Stop);


 ```

 # project 5 :- @Solution code (BACKGROUND BLINKER)

 ``` javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="colors">
  <table style="border:2px solid black; border-right:2px solid black;">
  <tr>
    <th style=" border:1px solid black;">key</th>
    <th style=" border:1px solid black;">keycode</th>
    <th style=" border:1px solid black;">Code</th>
  </tr>
  <tr>
    <td style=" border:1px solid black;">${
      e.key === ' ' ? 'Spacebar' : e.key
    }</td>
    <td style=" border:1px solid black;">${e.keyCode}</td>
    <td style=" border:1px solid black;">${e.code}</td>
  </tr>
</table>
</div>
  `;
});


 ```

