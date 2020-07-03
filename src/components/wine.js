import React, { useState } from 'react';
import '../App.css';


function Wine() {
    const [values, setValues] = useState({
        amount: 0,
        container: 0,
        total: 0,
        glass: false,
        professional: false,
        home: false,
        slideCounter: 0
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            total: (values.amount * values.container) * .12,
            slideCounter: 3
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
            glass: e.target.id === 'Glass',
            slideCounter: e.target.id === "Glass" ? 4 : 1
        })

    }
    const locationChange = (e) => {
        setValues({
            ...values,
            professional: e.target.id === "Poured By Professional",
            home: e.target.id === "Poured by Self/Friend/Family",
            slideCounter: 1
        })
    }
    const goBack = (e) => {
        e.stopPropagation()

        setValues({
            ...values,
            slideCounter: values && values.slideCounter === 4 ? 0 : values.slideCounter - 1,
            glass: values.slideCounter === 4 ? false : values.glass
        })
    }
    const goForward = (e) => {
        setValues({
            ...values,
            slideCounter: values.slideCounter + 1
        })
    }
    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                {values && values.slideCounter > 0 ? <button type='button' onClick={goBack}>Go Back</button> : null}
                <p>Note: Please use decimals when noting partial containers</p>
                {values && values.slideCounter === 1 ?
                    <section>
                        <h3>Amount</h3>
                        <input type='text' value={values.volume} onChange={amountChange} />
                        <button type='button' onClick={goForward}>Continue</button>
                    </section> : null}

                {values && values.slideCounter === 0 ?
                    <section>
                        <h3>Container</h3>
                        <input type="radio" id="Bottle" name="container" value='750' onClick={containerChange} />
                        <label for="Bottle">Bottle</label><br />
                        <input type="radio" id="Glass" name="container" value='147.8675' onClick={containerChange} />
                        <label for="Glass">Glass</label><br />
                        <input type="radio" id="12oz Can/Bottle" name="container" value='354.882' onClick={containerChange} />
                        <label for="12oz Can/Bottle">12oz Can/Bottle</label><br />
                        <input type="radio" id="8oz Can/Bottle" name="container" value='236.588' onClick={containerChange} />
                        <label for="8oz Can/Bottle">8oz Can/Bottle</label><br />
                    </section> : null}

                {values && values.slideCounter === 4 ?
                    <><h3>Poured By</h3>
                        <section>
                            <input type="radio" id="Poured By Professional" name="pouredBy" value='750' onClick={locationChange} />
                            <label for="Poured By Professional">Poured By Professional</label><br />
                            <input type="radio" id="Poured by Self/Friend/Family" name="pouredBy" value='750' onClick={locationChange} />
                            <label for="Poured by Self/Friend/Family">Poured by Self/Friend/Family</label><br />
                        </section>
                    </> : null}
                {values && values.slideCounter === 2 ?
                    <button type='submit'>Calculate</button> : null}
            </form>
            {values && values.slideCounter === 3 ?
                <section>
                    <div>{`${values.total} ml, ${values.total / 18} standard drinks(US), ${values.total / 10} units(UK)`}</div>
                    {values.glass && values.professional ? <p> Glasses of wine served on location have been shown to have an average overpour of 43.3%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p> : null}

                    {values.glass && values.professional ? <div>{`${values.total * 1.433} ml, ${(values.total * 1.433) / 18} standard drinks(US), ${(values.total * 1.433) / 10} units(UK)`}</div> : null}

                    {values.glass && values.home ? <p> Glasses of wine served at home have been shown to have particularly high variance(Kerr et al., 2005). It may be more reliable to calculate this number again with the amount of the bottle that was consumed if possible.</p> : null}
                </section> : null}
        </div>

    )
}
export default Wine;