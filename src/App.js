import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student/Create';
import ViewStudent from './Student/List'
import {useName} from './contexts/nameContext'

function App() {
  const {name} = useName()
  return (
    <div className="App">      
      Hello {name}, from global state
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/view" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
