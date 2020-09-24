import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Beer from './components/Beer'
import Wine from './components/Wine'
import HardLiquor from './components/HardLiquor'
import Info from './components/Info'
import Main from './components/Main'
import Cart from "./components/Cart"


function App() {

  const [values, setValues] = useState({
    abv: 0,
    container: 0,
    amount: "",
    total: 0,
    glass: false,
    professional: false,
    home: false,
    draft: false,
    highball: false,
    shot: false,
    slideCounter: 0,
    actionCode: {
      bevType: "00",
      contType: "00",
      glass: "NA",
      professional: "NA",
      highball: "NA",
      home: "NA",
      draft: "NA",
      amount: "00"
    }
  })

  const [cart, setCart] = useState({
    list: [],
    total: 0,
    idTicker: 0
  })

  return (
    <div className="App-header-one">
      <Cart cart={cart} setCart={setCart} />
      <div>
        <Switch>
          <Route exact path='/'><Main cart={cart} setCart={setCart} values={values} setValues={setValues} /></Route>
          <Route path='/beer'><Beer values={values} setValues={setValues} cart={cart} setCart={setCart} /></Route>
          <Route path='/wine'><Wine values={values} setValues={setValues} cart={cart} setCart={setCart} /></Route>
          <Route path='/liquor'><HardLiquor values={values} setValues={setValues} cart={cart} setCart={setCart} /></Route>
          <Route path='/info'><Info /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
