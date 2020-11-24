'use strict';

const userNames = ['Finn', 'David', 'Kate', 'Paul', 'Zuzana', 'Ito', 'Houdini'];



const users = userNames.map(userName => generateUser(userName));
console.log(users);

for (let i = 0; i < users.length; i++) {
    let user = {
        name: users[i].name,
        description: users[i].description
    };
    console.log(user);
    let card = createElement(user);
    document.getElementById('container').appendChild(card);
}





/**
 * DONT CHANGE THIS CODE!
 */
function generateUser(name) {
    return {
        name: name,
        age: Math.floor(Math.random() * 10) + 10,
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
        city: 'Lorem ipsum',
    };
}

function createElement(object) {
    /**
     * Only fort training purpose!
     */
    if (object.hasOwnProperty('city')) {
        throw 'Change object to valid form!';
    }

    const card = document.createElement('div');
    const headline = createParagraph(object.name);
    const body = createParagraph(object.description);

    card.classList.add('card');
    headline.classList.add('headline');
    body.classList.add('body');

    card.appendChild(headline);
    card.appendChild(body);
    return card;
}

function createParagraph(content) {
    const paragraph = document.createElement('p');
    const text = document.createTextNode(content);
    paragraph.appendChild(text);
    return paragraph;
}