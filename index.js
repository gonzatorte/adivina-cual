const ejs = require('ejs');
const fs = require('fs');

const data = {
  questions: [
    {
      body: 'Como se juega?',
      answers: [
        {
          body: 'Se juega así',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'O se juega asá',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'O de otra manera',
          img: './rsc/img/sample.jpg',
        },
      ],
    },
    {
      body: 'La función tiene raíz 8?',
      answers: [
        {
          body: 'Raíz 10',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'Raíz 8',
          img: './rsc/img/sample.jpg',
        },
      ],
    },
    {
      body: 'La función tiene ordenada 3?',
      answers: [
        {
          body: 'Ordenada 6',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'Ordenada 3',
          img: './rsc/img/sample.jpg',
        },
      ],
    },
    {
      body: 'Es una gráfica?',
      answers: [
        {
          body: 'Es una expresión',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'Es una tabla',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'Gráfica',
          img: './rsc/img/sample.jpg',
        },
      ],
    },
  ],
};

const options = {root: './'};

// const template = ejs.compile(str, options);
// console.log(template(data));

ejs.renderFile('./index.html.ejs', data, options, function(err, str) {
  fs.writeFileSync('./index.html', str);
  console.log(str);
});
