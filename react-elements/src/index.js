import React from 'react';
import ReactDOM from 'react-dom';

var element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

var $root = document.querySelector('#root');

ReactDOM.render(
  element,
  $root
);
