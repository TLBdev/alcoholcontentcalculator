import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Beer from './components/Beer'
import Wine from './components/Wine'
import HardLiquor from './components/HardLiquor'
import Info from './components/Info'
import NavBar from './components/NavBar'
import Main from './components/Main'


function App() {
  const [navigation, setNavigation] = useState('')

  const [values, setValues] = useState({
    amount: 0,
    container: 0,
    total: 0,
    glass: false,
    professional: false,
    home: false,
    draft: false,
    slideCounter: 0
  })

  function handleNav(e) {
    setNavigation(e.target.id)
  }
  return (
    <div className="App-header">
      <NavBar handleNav={handleNav} navigation={navigation} />
      <Switch>
        <Route exact path='/'><Main /></Route>
        <Route path='/beer'><Beer values={values} setValues={setValues} /></Route>
        <Route path='/wine'><Wine values={values} setValues={setValues} /></Route>
        <Route path='/liquor'><HardLiquor values={values} setValues={setValues} /></Route>
        <Route path='/info'><Info /></Route>
      </Switch>
    </div>
  );
}

export default App;
