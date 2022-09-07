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
          body: 'O se juega asá',
          img: './rsc/img/sample.jpg',
        },
      ],
    },
    {
      body: 'La función tiene raíz 8?',
      answers: [
        {
          body: 'No tiene',
          img: './rsc/img/sample.jpg',
        },
        {
          body: 'Si tiene',
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
