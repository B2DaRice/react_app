import React from 'react';
import Home from './components/home/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// I attempted to add a header with a small dropdown menu but ran out of time
function App() {
  return (
    <div className="App">
      <header className="appHeader">
        {/* <div class="dropdown">
          <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">more_vert</i>
          </button>
          <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
            <button class="dropdown-item" type="button">Change User</button>
            <button class="dropdown-item" type="button">Contact Us</button>
          </div>
        </div> */}
      </header>
      <Home />
    </div>
  );
}

export default App;
