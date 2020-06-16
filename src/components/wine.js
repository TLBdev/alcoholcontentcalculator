import React, { useState } from 'react';
import '../App.css';


function Wine() {
    const [values, setValues] = useState({
        amount: 0,
        container: 0,
        total: 0,
        glass: false,
        professional: false,
        home: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            total: (values.amount * values.container) * .12
        })
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
            glass: e.target.id === 'Glass'
        })
    }
    const locationChange = (e) => {
        setValues({
            ...values,
            professional: e.target.id === "Poured By Professional",
            home: e.target.id === "Poured by Self/Friend/Family"
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

                {values && values.glass ?
                    <><h3>Poured By</h3>
                        <div>
                            <input type="radio" id="Poured By Professional" name="pouredBy" value='750' onClick={locationChange} />
                            <label for="Poured By Professional">Poured By Professional</label><br />
                            <input type="radio" id="Poured by Self/Friend/Family" name="pouredBy" value='750' onClick={locationChange} />
                            <label for="Poured by Self/Friend/Family">Poured by Self/Friend/Family</label><br />
                        </div></> : null}
                <button type='submit'>Calculate</button>
            </form>
            <div>{`${values.total} ml, ${values.total / 18} standard drinks(US), ${values.total / 10} units(UK)`}</div>
            {values.professional ? <p> Glasses of wine served on location have been shown to have an average overpour of 43.3%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p> : null}

            {values.professional ? <div>{`${values.total * 1.433} ml, ${(values.total * 1.433) / 18} standard drinks(US), ${(values.total * 1.433) / 10} units(UK)`}</div> : null}

            {values.home ? <p> Glasses of wine served at home have been shown to have particularly high variance(Kerr et al., 2005). It may be more reliable to calculate this number again with the amount of the bottle that was consumed if possible.</p> : null}

        </div>

    )
}
export default Wine;