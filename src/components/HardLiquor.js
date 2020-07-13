import React, { useState } from 'react'
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'
import singleShot from '../alcImg/singleShot/shot-glasses-1532293-639x555.jpg'
import doubleShot from '../alcImg/double shot/flame-shot-1187258-640x480.jpg'
import highball from '../alcImg/highball/whiskey-626254_640.jpg'
import highball2 from '../alcImg/highball2/alcohol-1869282_640.jpg'
import strongCocktails from '../alcImg/cocktail/cocktails-of-the-deep-south-1323527-639x427.jpg'
import weakCocktail from '../alcImg/light cocktail/cocktail-3327242_640.jpg'
import frozenCocktail from '../alcImg/frozen cocktail/lime-closeup-1580143-639x427.jpg'
import soloCup from '../alcImg/solo cup/red-cup-1327412-639x557.jpg'

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
            abv: parseFloat(e.currentTarget.attributes.value.value),
            slideCounter: values.slideCounter + 1
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
                {values && values.slideCounter === 0 ? <section className='secWithImg'>
                    <h3>Drink Type</h3>
                    <p>Note: For the purposes of this app, a highball is a mixed drink of hard liquor and a non alcoholic mixer. i.e. Whiskey Soda, Rum and Coke, Seven and Seven</p>
                    <p>Note: Weak Cocktails are cocktails that contain a significant amount of non-alcoholic mixer such as juice or sodas. While these tend to be more fruity, some fruity drinks such as a cosmopolitan or a non-frozen margherita are strong cocktails for the purposes of this app.</p>
                    <div className='imgDiv' id="Shot" name="drinkType" value='40' onClick={abvChange}>
                        <img alt='a shot glass' src={singleShot} />
                        <label for="Shot">Shot</label>
                    </div>
                    <div className='imgDiv' id="Single-Shot Highball" name="drinkType" value='13' onClick={abvChange} >
                        <img alt='a mixed drink with soda' src={highball} />
                        <label for="Single">Single</label></div>
                    <div className='imgDiv' id="Double-Shot Highball" name="drinkType" value='26' onClick={abvChange} >
                        <img alt='a mixed drink with soda and lime' src={highball2} />
                        <label for="Double">Double</label>
                    </div>
                    <div className='imgDiv' id="Strong Cocktail" name="drinkType" value='35' onClick={abvChange} >
                        <img alt='several cocktails' src={strongCocktails} />
                        <label for="Strong Cocktail">Strong Cocktail (Old-fashioned, Martini, Sazerac)</label>
                    </div>
                    <div className='imgDiv' id="Weak Cocktail" name="drinkType" value='13' onClick={abvChange} >
                        <img alt='a light and fruity cocktail' src={weakCocktail} />
                        <label for="Weak/Fruity Cocktail">Weak/Fruity Cocktail (Tom Collins, Tequila Sunrise)</label>
                    </div >
                    <div className='imgDiv' id="Frozen Cocktail" name="drinkType" value='8' onClick={abvChange} >
                        <img alt='a frozen margherita' src={frozenCocktail} />
                        <label for="Frozen Cocktail">Frozen Cocktail (Margherita, Pina Colada, Daquiri)</label>
                    </div>
                </section> : null}
                {values && values.slideCounter === 1 ? <section className='secWithImg'>
                    <h3>Container</h3>
                    <div className='imgDiv' id="Cocktail Specific Glass" name="container" value='2.5' onClick={containerChange} >
                        <img alt='several cocktails' src={strongCocktails} />
                        <label for="Cocktail Specific Glass">Cocktail Specific Glass (Martini Glass, Lowball Glass)</label>
                    </div>
                    <div className='imgDiv' id="Disposable Plastic Cup" name="container" value='16' onClick={containerChange} >
                        <img alt='a red solo cup' src={soloCup} />
                        <label for="Disposable Plastic Cup">Disposable Plastic Cup (Red Solo Cup)</label>
                    </div>
                    <div className='imgDiv' id="Short Glass" name="container" value='14' onClick={containerChange} >
                        <img alt='a mixed drink with soda' src={highball} />
                        <label for="Short Glass">Short Glass</label>
                    </div>
                    <div className='imgDiv' id="Tall Glass" name="container" value='16' onClick={containerChange} >
                        <img alt='a mixed drink with soda and lime' src={highball2} />
                        <label for="Tall Glass">Tall Glass</label>
                    </div>
                    <div className='imgDiv' id="Standard Shot Glass" name="container" value='1.5' onClick={containerChange} >
                        <img alt='a shot glass' src={singleShot} />
                        <label for="Standard Shot Glass">Standard Shot Glass</label>
                    </div>
                    <div className='imgDiv' id="Tall/Double Shot Glass" name="container" value='3' onClick={containerChange} >
                        <img alt='a tall shot glass' src={doubleShot} />
                        <label for="Tall/Double Shot Glass">Tall/Double Shot Glass</label>
                    </div>
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