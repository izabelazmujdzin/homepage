const firstName='Iza'; 
const age = 27;

console.log(firstName);
console.log(age);


const emptyParagraph = document.querySelector('.section__paragraph--js');




function greetOld(firstName, age) {
    console.log(`Hej , nazywam się ${firstName} i mam ${age} lat `);
}

const greet = (firstName, age) => {
    console.log(`Hej , nazywam się ${firstName} i mam ${age} lat `);
}

greet('Iza', age);


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content; 
}

createContent('.section__paragraph--js', 'Zanim to zapamiętam to miną wieki!');

function helloWorld() {
    console.log('Witaj świecie!');
}
helloWorld();

const goodbye = (firstName, age) => {
    console.log(`Żegnam się z Wami, dziękuję, że byliście ${firstName}, ${age}`);
}

goodbye('Iza', age);