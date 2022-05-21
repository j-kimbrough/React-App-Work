import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< daf7b72c93603e1a70d3a69f9e0197c8a9f7c700
<<<<<<< 55dc06a7f3fb7a65d18baae213e1ff5bf535cf18
import { NameProvider } from './contexts/nameContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
>>>>>>> Initialize project using Create React App
=======
import { NameProvider } from './contexts/nameContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
>>>>>>> Update
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
