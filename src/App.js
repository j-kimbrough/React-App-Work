<<<<<<< 55dc06a7f3fb7a65d18baae213e1ff5bf535cf18
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './views/Student/Create';
import {useName} from './contexts/nameContext'

import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://reqres.in/api'
})

const cache = new LRU({ max: 10 })

configure({ axios, cache })

function App() {
  const {name} = useName()
  return (
    <div className="App">
      Hello {name}, from global state
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
        </Routes>
      </BrowserRouter>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> Initialize project using Create React App
    </div>
  );
}

export default App;
