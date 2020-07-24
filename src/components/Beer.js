import React, { useState } from 'react';
import '../App.css';
import Container from './beerComponents/Container'
import Beverage from './beerComponents/Beverage'
import Number from './beerComponents/Number'
import Results from './beerComponents/Results'
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'
function Beer() {
    const [values, setValues] = useState({
        number: 0,
        beverage: 0,
        container: 0,
        alc_cont: 0,
        draft: false,
        slideCounter: 0
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        let result = 0
        result = alc_ml_util(alc_oz_util(values.number * values.container), values.beverage)
        setValues({
            ...values,
            alc_cont: result,
            slideCounter: values.slideCounter + 1
        })
    }
    const numberChange = (e) => {
        setValues({
            ...values,
            number: parseFloat(e.target.value)
        })
    }
    const containerChange = (e) => {

        setValues({
            ...values,
            container: parseInt(e.currentTarget.attributes.value.value),
            draft: e.currentTarget.attributes.id.value === '16oz Draught/Draft',
            slideCounter: values.slideCounter + 1
        })
    }
    const beverageChange = (e) => {

        setValues({
            ...values,
            beverage: parseFloat(e.currentTarget.attributes.value.value),
            slideCounter: values.slideCounter + 1
        })
    }
    const goBack = (e) => {
        setValues({
            ...values,
            slideCounter: values.slideCounter === 0 ? 0 : values.slideCounter - 1,
            draft: values.slideCounter === 1 ? false : values.draft
        })
    }

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                {values && values.slideCounter > 0 ? <button type='button' onClick={goBack}>Go Back</button> : null}
                {values && values.slideCounter === 2 ? <Number numberChange={numberChange} values={values} /> : null}
                {values && values.slideCounter === 1 ? <Container containerChange={containerChange} /> : null}
                {values && values.slideCounter === 0 ? <Beverage beverageChange={beverageChange} /> : null}
            </form>
            {values && values.slideCounter === 3 ? <Results values={values} /> : null}
        </div>
    );
}

export default Beer;