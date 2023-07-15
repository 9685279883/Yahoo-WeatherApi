import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
