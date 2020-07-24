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
            container: parseInt(e.currentTarget.attributes.value.value),
            glass: e.currentTarget.attributes.id.value === 'Glass',
            slideCounter: e.currentTarget.attributes.id.value === "Glass" ? 4 : 1
        })

    }
    const locationChange = (e) => {
        setValues({
            ...values,
            professional: e.currentTarget.attributes.id.value === "Poured By Professional",
            home: e.currentTarget.attributes.id.value === "Poured by Self/Friend/Family",
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