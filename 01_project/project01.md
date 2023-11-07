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



```
 

