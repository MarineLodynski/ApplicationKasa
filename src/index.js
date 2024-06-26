import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Logement from '../src/pages/Logement';
import Error from '../src/pages/Error';
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
              <Route path="/Home" element={<Home />} />;
              <Route path="/About" element={<About />} />;
              <Route path="/Logement" element={<Logement />} />;
              <Route path="*" element={<Error />} />;
            </Routes>
                  </Router>
    </React.StrictMode>,
document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
