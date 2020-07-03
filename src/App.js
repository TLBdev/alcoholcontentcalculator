import React, { useState } from 'react';
import './App.css';
import Beer from './components/beer'
import Wine from './components/wine'
import NavBar from './components/NavBar'
function App() {
  const [navigation, setNavigation] = useState('')
  function handleNav(e) {
    setNavigation(e.target.name)
  }
  return (
    <div className="App-header">
      <NavBar handleNav={handleNav} />
      {navigation && navigation === 'Beer' ? <Beer /> : null}
      {navigation && navigation === 'Wine' ? <Wine /> : null}
    </div>
  );
}

export default App;
