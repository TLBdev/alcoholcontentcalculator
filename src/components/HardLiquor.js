import React, { useState } from 'react'
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'

function HardLiquor() {
    const [values, setValues] = useState({
        amount: 1,
        container: 0,
        abv: 0,
        alc_cont: 0,
        slideCounter: 0
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
            abv: parseFloat(e.target.value),
            slideCounter: values.slideCounter + 1
        })

    }
    const containerChange = (e) => {
        setValues({
            ...values,
            container: parseFloat(e.target.value),
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
                {values && values.slideCounter === 0 ? <section>
                    <h3>Drink Type</h3>
                    <p>Note: For the purposes of this app, a highball is a mixed drink of hard liquor and a non alcoholic mixer. i.e. Whiskey Soda, Rum and Coke, Seven and Seven</p>
                    <p>Note: Weak Cocktails are cocktails that contain a significant amount of non-alcoholic mixer such as juice or sodas. While these tend to be more fruity, some fruity drinks such as a cosmopolitan or a non-frozen margherita are strong cocktails for the purposes of this app.</p>
                    <input type="radio" id="Shot" name="drinkType" value='40' onClick={abvChange} />
                    <label for="Shot">Shot</label><br />
                    <input type="radio" id="Single-Shot Highball" name="drinkType" value='13' onClick={abvChange} />
                    <label for="Single">Single</label><br />
                    <input type="radio" id="Double-Shot Highball" name="drinkType" value='26' onClick={abvChange} />
                    <label for="Double">Double</label><br />
                    <input type="radio" id="Strong Cocktail" name="drinkType" value='35' onClick={abvChange} />
                    <label for="Strong Cocktail">Strong Cocktail (Old-fashioned, Martini, Sazerac)</label><br />
                    <input type="radio" id="Weak Cocktail" name="drinkType" value='13' onClick={abvChange} />
                    <label for="Weak/Fruity Cocktail">Weak/Fruity Cocktail (Tom Collins, Tequila Sunrise)</label><br />
                    <input type="radio" id="Frozen Cocktail" name="drinkType" value='8' onClick={abvChange} />
                    <label for="Frozen Cocktail">Frozen Cocktail (Margherita, Pina Colada, Daquiri)</label><br />
                </section> : null}
                {values && values.slideCounter === 1 ? <section>
                    <h3>Container</h3>
                    <input type="radio" id="Cocktail Specific Glass" name="container" value='2.5' onClick={containerChange} />
                    <label for="Cocktail Specific Glass">Cocktail Specific Glass (Martini Glass, Lowball Glass)</label><br />
                    <input type="radio" id="Disposable Plastic Cup" name="container" value='16' onClick={containerChange} />
                    <label for="Disposable Plastic Cup">Disposable Plastic Cup (Red Solo Cup)</label><br />
                    <input type="radio" id="Highball Glass" name="container" value='14' onClick={containerChange} />
                    <label for="Highball Glass">Highball Glass</label><br />
                    <input type="radio" id="Tall Glass" name="container" value='16' onClick={containerChange} />
                    <label for="Tall Glass">Tall Glass</label><br />
                    <input type="radio" id="Standard Shot Glass" name="container" value='1.5' onClick={containerChange} />
                    <label for="Standard Shot Glass">Standard Shot Glass</label><br />
                    <input type="radio" id="Tall/Double Shot Glass" name="container" value='3' onClick={containerChange} />
                    <label for="Tall/Double Shot Glass">Tall/Double Shot Glass</label>
                </section> : null}
                {values && values.slideCounter === 2 ? <section>
                    <h3>Amount</h3>
                    <p>Note: Please use decimals when noting partial containers</p>
                    <input type='text' value={values.amount} onChange={amountChange} />
                    <button type='submit'>Calculate</button>
                </section> : null}

            </form>
            {values && values.slideCounter === 3 ? <section>
                <div>{`${values.alc_cont} ml, ${values.alc_cont / 18} standard drinks(US), ${values.alc_cont / 10} units(UK)`}</div>
            </section> : null}
        </div>
    )
}

export default HardLiquor