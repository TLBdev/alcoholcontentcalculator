import React, { useState } from 'react'
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'
import DrinkType from './liquorComponents/drinkType'
import Container from './liquorComponents/Container'
import Amount from './liquorComponents/Amount'
import Results from './liquorComponents/Results'

function HardLiquor() {
    const [values, setValues] = useState({
        amount: 1,
        container: 0,
        abv: 0,
        alc_cont: 0,
        slideCounter: 0,
        drinkType: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        let result = 0
        result = alc_ml_util(alc_oz_util(values.amount * values.container), values.abv)
        setValues({
            ...values,
            alc_cont: result,
            slideCounter: values.slideCounter + 1
        })
    }
    const amountChange = (e) => {
        setValues({
            ...values,
            amount: parseFloat(e.target.value)
        })

    }
    const abvChange = (e) => {
        setValues({
            ...values,
            abv: parseFloat(e.currentTarget.attributes.value.value),
            container: e.currentTarget.attributes.id.value === 'Single-Shot Highball' ? 1.5 : e.currentTarget.attributes.id.value === 'Double-Shot Highball' ? 3 : 0,
            slideCounter: e.currentTarget.attributes.id.value === 'Single-Shot Highball' ? values.slideCounter + 2 : e.currentTarget.attributes.id.value === 'Double-Shot Highball' ? values.slideCounter + 2 : values.slideCounter + 1,
            drinkType: e.currentTarget.attributes.id.value
        })

    }
    const containerChange = (e) => {
        setValues({
            ...values,
            container: parseFloat(e.currentTarget.attributes.value.value),
            slideCounter: values.slideCounter + 1
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
                {values && values.slideCounter === 0 ? <DrinkType abvChange={abvChange} /> : null}
                {values && values.slideCounter === 1 ? <Container values={values} containerChange={containerChange} /> : null}
                {values && values.slideCounter === 2 ? <Amount values={values} amountChange={amountChange} /> : null}

            </form>
            {values && values.slideCounter === 3 ? <Results values={values} /> : null}
        </div>
    )
}

export default HardLiquor