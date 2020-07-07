import React, { useState } from 'react';
import '../App.css';
import Amount from './wineComponents/Amount'
import Container from './wineComponents/Container'
import PouredBy from './wineComponents/PouredBy'
import Results from './wineComponents/Results'

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
            slideCounter: 2
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

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                {values && values.slideCounter > 0 ? <button type='button' onClick={goBack}>Go Back</button> : null}

                {values && values.slideCounter === 1 ? <Amount values={values} amountChange={amountChange} /> : null}

                {values && values.slideCounter === 0 ? <Container containerChange={containerChange} /> : null}

                {values && values.slideCounter === 4 ? <PouredBy locationChange={locationChange} /> : null}

            </form>
            {values && values.slideCounter === 2 ? <Results values={values} /> : null}
        </div>

    )
}
export default Wine;