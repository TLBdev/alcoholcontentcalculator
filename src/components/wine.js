import React, { useState } from 'react';
import '../App.css';
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'

function Wine() {
    const [values, setValues] = useState({
        amount: 0,
        container: 0,
        total: 0,
        abv: 0,
        glass: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const amountChange = (e) => {
        setValues({
            ...values,
            amount: parseFloat(e.target.value)
        })
    }
    const containerChange = (e) => {

        setValues({
            ...values,
            container: parseInt(e.target.value),
            draft: e.target.id === 'Glass'
        })
    }
    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                <p>Note: Please use decimals when noting partial containers</p>
                <h3>Amount</h3>
                <input type='text' value={values.volume} onChange={amountChange} />
                <h3>Container</h3>
                <div>
                    <input type="radio" id="Bottle" name="container" value='750' onClick={containerChange} />
                    <label for="Bottle">Bottle</label><br />
                    <input type="radio" id="Glass" name="container" value='147.8675' onClick={containerChange} />
                    <label for="Glass">Glass</label><br />
                    <input type="radio" id="12oz Can/Bottle" name="container" value='354.882' onClick={containerChange} />
                    <label for="12oz Can/Bottle">12oz Can/Bottle</label><br />
                    <input type="radio" id="8oz Can/Bottle" name="container" value='236.588' onClick={containerChange} />
                    <label for="8oz Can/Bottle">8oz Can/Bottle</label><br />
                </div>
                <div>
                    <input type="radio" id="Poured By Professional" name="container" value='750' onClick={containerChange} />
                    <label for="Poured By Professional">Poured By Professional</label><br />
                    <input type="radio" id="Poured by Self/Friend/Family" name="container" value='750' onClick={containerChange} />
                    <label for="Poured by Self/Friend/Family">Poured by Self/Friend/Family</label><br />
                </div>
                <div>
                    <input type="radio" id="Red" name="container" value='750' onClick={containerChange} />
                    <label for="Red">Red</label><br />
                    <input type="radio" id="White" name="container" value='750' onClick={containerChange} />
                    <label for="White">White</label><br />
                    <input type="radio" id="Pink" name="container" value='750' onClick={containerChange} />
                    <label for="Pink">Pink</label><br />
                </div>
            </form>
        </div >
    )
}