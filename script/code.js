// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
const heading = document.getElementById('heading')

const header = document.createElement('h1');
header.innerText = "Javascript";
heading.parentElement.replaceChild(header, heading);

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself'

const paragraph = document.getElementsByClassName('paragraph');
const selectedElement = paragraph[0]; //Note to self: use index because getElementsbyClass returns an array
selectedElement.innerText = "This is a language I have mastered and I am proud of myself. I accomplished this because I believed in myself";
//selectedElement.parentElement
//.replaceChild(paragraph, selectedElement);

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
let subHeading = document.querySelector("h3");
subHeading.innerText = "Things I've accomplished so far";

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index

let subParagaph = document.querySelectorAll('p')[1];
subParagaph.innerText = "I have discovered that I can accomplish anything I put my mind to";
