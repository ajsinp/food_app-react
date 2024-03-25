import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS files or stylesheets
import App from './App'; // Import the root component of your application
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the root component into the DOM element with id 'root'
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
