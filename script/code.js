// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
const heading = document.getElementById('heading')

const header = document.createElement('h1');
header.innerText = "Javascript";
heading.parentElement.replaceChild(header, heading);

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

const paragraph = document.getElementsByClassName('paragraph')[0];



