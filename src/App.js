// App.js
//import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './Components/Home';
//import Register from './Components/Register';
//import Login from './Components/Login'; // Ensure this path is correct

//function App() {
  //return (
    //<Router>
      //<div className="app-container">
        //<Routes>
          //<Route path="/" element={<Home />} />
          //<Route path="/register" element={<Register />} />
          //<Route path="/login" element={<Login />} />
        //</Routes>
      //</div>
    //</Router>
  //);
//}

//export default App;
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Use Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
