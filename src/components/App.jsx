import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom"
import { About } from "./About";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { Navbar } from "./Navbar";
import '../styles.css'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
