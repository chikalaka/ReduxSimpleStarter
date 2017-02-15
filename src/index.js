import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCnyw2WXgkrWB3KD7qbCiztX2UAiW3eN6o';

// 1. Create a new component - this component produce html

// 2. Take this component's generated HTML and add it to the DOM

const App = () => {
  return <div>Hi!</div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));;
