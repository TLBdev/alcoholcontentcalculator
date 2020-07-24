import React, { useState } from 'react';
import './App.css';
import Beer from './components/Beer'
import Wine from './components/Wine'
import HardLiquor from './components/HardLiquor'
import Info from './components/Info'
import NavBar from './components/NavBar'


function App() {
  const [navigation, setNavigation] = useState('')
  function handleNav(e) {

    setNavigation(e.target.id)
  }
  return (
    <div className="App-header">
      <NavBar handleNav={handleNav} navigation={navigation} />
      {navigation && navigation === 'Beer' ? <Beer /> : null}
      {navigation && navigation === 'Wine' ? <Wine /> : null}
      {navigation && navigation === 'Hard Liquor' ? <HardLiquor /> : null}
      {navigation && navigation === 'Info' ? <Info /> : null}
    </div>
  );
}

export default App;
