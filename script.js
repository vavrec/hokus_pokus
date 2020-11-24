'use strict';

const userNames = ['Finn', 'David', 'Kate', 'Paul', 'Zuzana', 'Ito', 'Houdini'];
const users = userNames.map(userName => generateUser(userName));

const a = document.getElementById('container');

users.forEach(user => {
  const b = createElement(user);
  a.appendChild(b);
});
/**
 * DONT CHANGE THIS CODE!
 */
function generateUser(name) {
  return {
    name: name,
    age: Math.floor(Math.random() * 10) + 10,
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    city: 'Lorem ipsum',
  };
}

function createElement(object) {
  /**
   * Only fort training purpose!
   */
  // if (object.hasOwnProperty('city')) {
  // throw 'Change object to valid form!';
  // }

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
