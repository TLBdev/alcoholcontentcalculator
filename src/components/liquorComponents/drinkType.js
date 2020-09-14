import React from 'react';
import { useHistory } from 'react-router-dom'

function DrinkType(props) {

    const history = useHistory()

    function beverageChange(e) {
        e.preventDefault()
        props.setValues(
            {
                ...props.values,
                container: e.currentTarget.attributes.code.value === "SH"
                    || e.currentTarget.attributes.code.value === "DH"
                    ? e.currentTarget.attributes.code.value === "DH"
                        ? 3 : 1.5 : 0,
                abv: parseInt(e.currentTarget.attributes.value.value),
                highball: e.currentTarget.attributes.code.value === "SH" || e.currentTarget.attributes.code.value === "DH",
                shot: e.currentTarget.attributes.code.value === "ST",
                actionCode: {
                    ...props.values.actionCode,
                    bevType: e.currentTarget.attributes.code.value,
                    highball: e.currentTarget.attributes.code.value === "SH" || e.currentTarget.attributes.code.value === "DH" ? "01" : "00"
                }
            }
        )
        if (e.currentTarget.attributes.code.value === "SH" || e.currentTarget.attributes.code.value === "DH") {
            history.push('/liquor/amount')
        } else {
            history.push('/liquor/container')
        }
    }


    return (<section >
        <h3>Drink Type</h3>
        <p>Note: For the purposes of this app, a highball is a mixed drink of hard liquor and a non alcoholic mixer. i.e. Whiskey Soda, Rum and Coke, Seven and Seven</p>
        <p>Note: Weak Cocktails are cocktails that contain a significant amount of non-alcoholic mixer such as juice or sodas. While these tend to be more fruity, some fruity drinks such as a cosmopolitan or a non-frozen margherita are strong cocktails for the purposes of this app.</p>
        <div className='buttonDiv' id="Shot" code="ST" name="drinkType" value='40' onClick={beverageChange}>
            <p for="Shot">Shot</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Single-Shot Highball" code="SH" name="drinkType" value='40' onClick={beverageChange} >
            <p for="Single">Single-Shot Highball(Rum and Coke, Seven and Seven)</p>
            <h4>{'>'}</h4></div>
        <div className='buttonDiv' id="Double-Shot Highball" code="DH" name="drinkType" value='40' onClick={beverageChange} >
            <p for="Double">Double-Shot Highball(Rum and Coke, Seven and Seven)</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Strong Cocktail" code="SC" name="drinkType" value='35' onClick={beverageChange} >
            <p for="Strong Cocktail">Strong Cocktail (Old-fashioned, Martini, Sazerac)</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Weak Cocktail" code="WC" name="drinkType" value='13' onClick={beverageChange} >
            <p for="Weak/Fruity Cocktail">Weak/Fruity Cocktail (Tom Collins, Tequila Sunrise)</p>
            <h4>{'>'}</h4>
        </div >
        <div className='buttonDiv' id="Frozen Cocktail" code="FC" name="drinkType" value='8' onClick={beverageChange} >
            <p for="Frozen Cocktail">Frozen Cocktail (Margherita, Pina Colada, Daquiri)</p>
            <h4>{'>'}</h4>
        </div>
    </section>)
}
export default DrinkType