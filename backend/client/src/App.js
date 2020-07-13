import React from 'react';
import AppNavbar from './components/AppNavbar';
import Acoes from './components/acoes';

// import './components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Acoes />
    </div>
  );
}

export default App;
