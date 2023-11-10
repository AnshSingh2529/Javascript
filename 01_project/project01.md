# PROJECTS Related to DOM

## project link
[Click here!](https://stackblitz.com/edit/web-platform-qacqzs?file=colorchanger%2Findex.html,colorchanger%2Fstyle.css,colorchanger%2Fcolor.js)

# project 1 :- @Solution code

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
# project 2 :- @Solution code

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
 # project 3 :- @Solution code

 ```javascript
 
 
 ```

