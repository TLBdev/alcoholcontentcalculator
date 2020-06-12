import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { alc_ml_util, alc_oz_util } from './utils/alc_util'
import Beer from './components/beer'
function App() {
  const [values, setValues] = useState({
    volume: 0,
    abv: 0,
    unit: 0,
    alc_cont: 0
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    let result = 0
    values.unit == 0 || values.unit == 'ml' ?
      result = alc_ml_util(values.volume, values.abv) :
      result = alc_ml_util(alc_oz_util(values.volume), values.abv)
    setValues({
      ...values,
      alc_cont: result
    })
  }
  const volumeChange = (e) => {
    setValues({
      ...values,
      volume: e.target.value
    })
  }
  const abvChange = (e) => {
    setValues({
      ...values,
      abv: e.target.value
    })
  }
  const unitChange = (e) => {
    console.log(e.target.value)
    setValues({
      ...values,
      unit: e.target.value
    })
  }
  return (
    <div className="App-header">
      <Beer />
    </div>
  );
}

export default App;
