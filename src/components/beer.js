import React, { useState } from 'react';

import '../App.css';
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'
function Beer() {
    const [values, setValues] = useState({
        number: 0,
        beverage: 0,
        container: 0,
        alc_cont: 0,
        draft: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        let result = 0
        result = alc_ml_util(alc_oz_util(values.number * values.container), values.beverage)
        setValues({
            ...values,
            alc_cont: result
        })
    }
    const numberChange = (e) => {
        setValues({
            ...values,
            number: parseFloat(e.target.value)
        })
    }
    const containerChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values,
            container: parseInt(e.target.value),
            draft: e.target.id === '16oz Draught/Draft'
        })
    }
    const beverageChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values,
            beverage: parseFloat(e.target.value)
        })
    }
    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                <div>Number of drinks</div>
                <input type='text' value={values.volume} onChange={numberChange} />
                <div>Container</div>
                <input type="radio" id="12oz Can/Bottle" name="container" value='12' onClick={containerChange} />
                <label for="12oz Can/Bottle">12oz Can/Bottle</label><br />
                <input type="radio" id="16oz Can/Bottle" name="container" value='16' onClick={containerChange} />
                <label for="16oz Can/Bottle">16oz Can/Bottle</label><br />
                <input type="radio" id="24oz Can/Bottle" name="container" value='24' onClick={containerChange} />
                <label for="24oz Can/Bottle">24oz Can/Bottle</label><br />
                <input type="radio" id="32oz Can/Bottle" name="container" value='32' onClick={containerChange} />
                <label for="32oz Can/Bottle">32oz Can/Bottle</label><br />
                <input type="radio" id="40oz Can/Bottle" name="container" value='40' onClick={containerChange} />
                <label for="40oz Bottle">40oz Bottle</label><br />
                <input type="radio" id="16oz Draught/Draft" name="container" value='16' onClick={containerChange} />
                <label for="16oz Draught/Draft">16oz Draught/Draft</label>
                <div>Beverage Type</div>
                <div className='beverageCont'>
                    <div><input type="radio" id="Light Domestic" name="beverage" value="4" onClick={beverageChange} />
                        <label for="Light Domestic">Light Domestic(~4% ABV, Bud Light, Keystone Light, etc.)</label></div>
                    <div><input type="radio" id="Standard Domestic" name="beverage" value="5" onClick={beverageChange} />
                        <label for="Standard Domestic">Standard Domestic (~5% abv, Budweiser, Michelob, etc.) </label></div>
                    <div><input type="radio" id="Domestic Ice" name="beverage" value="5.9" onClick={beverageChange} />
                        <label for="Domestic Ice">Domestic Ice (~5.9% abv, Keystone Ice, Bud Ice, etc.) </label></div>
                    <div><input type="radio" id="Lower ABV Craft" name="beverage" value="5" onClick={beverageChange} />
                        <label for="Lower ABV Craft">Lower ABV Craft (~5% abv, German Pilsner, American Blonde Ale, etc.) </label></div>
                    <div><input type="radio" id="Average ABV Craft" name="beverage" value="7" onClick={beverageChange} />
                        <label for="Average ABV Craft">Average ABV Craft (~7% abv, Belgian IPA, Imperial Pilsner, etc.) </label></div>
                    <div><input type="radio" id="High ABV Craft" name="beverage" value="10" onClick={beverageChange} />
                        <label for="High ABV Craft">High ABV Craft (~10% abv, Imperial Stout, Wheatwine, etc.) </label></div>
                    <div><input type="radio" id="Average Malt Liquor" name="beverage" value="7" onClick={beverageChange} />
                        <label for="High ABV Malt Liquor">Average Malt Liquor (~7% abv, Mickey's, Steel Reserve, etc.) </label></div>
                    <div><input type="radio" id="High ABV Malt Liquor" name="beverage" value="12" onClick={beverageChange} />
                        <label for="High ABV Malt Liquor">High ABV Malt Liquor (~12% abv, Four Loko, Blast Colt 45, etc.) </label></div>

                </div>
                <button type='submit'>Calculate</button>
            </form>
            <div>{`${values.alc_cont} ml, ${values.alc_cont / 18} standard drinks(US), ${values.alc_cont / 10} units(UK)`}</div>
            {values.draft ? <p>Draft/Draught Selected, the following numbers are adjusted to assume a 22% overpour(Kerr et al., 2008)</p> : null}

            {values.draft ? <div>{`${values.alc_cont * 1.22} ml, ${(values.alc_cont * 1.22) / 18} standard drinks(US), ${(values.alc_cont * 1.22) / 10} units(UK)`}</div> : null}
        </div>
    );
}

export default Beer;