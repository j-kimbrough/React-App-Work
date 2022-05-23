
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
    </div>
  );
}

export default App;
