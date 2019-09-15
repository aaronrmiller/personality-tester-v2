// import sum from './sum.js';

// console.log('Hello Project.');
// console.log(sum(2, 5));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.tsx';

const title = 'React with Test and Babel';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();