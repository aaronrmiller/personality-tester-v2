// import sum from './sum.js';

// console.log('Hello Project.');
// console.log(sum(2, 5));

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Test and Babel';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();