import React from 'react';

function DrinkType(props) {
    return (<section >
        <h3>Drink Type</h3>
        <p>Note: For the purposes of this app, a highball is a mixed drink of hard liquor and a non alcoholic mixer. i.e. Whiskey Soda, Rum and Coke, Seven and Seven</p>
        <p>Note: Weak Cocktails are cocktails that contain a significant amount of non-alcoholic mixer such as juice or sodas. While these tend to be more fruity, some fruity drinks such as a cosmopolitan or a non-frozen margherita are strong cocktails for the purposes of this app.</p>
        <div className='buttonDiv' id="Shot" name="drinkType" value='40' onClick={props.abvChange}>
            <p for="Shot">Shot</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Single-Shot Highball" name="drinkType" value='40' onClick={props.abvChange} >
            <p for="Single">Single-Shot Highball(Rum and Coke, Seven and Seven)</p>
            <h4>{'>'}</h4></div>
        <div className='buttonDiv' id="Double-Shot Highball" name="drinkType" value='40' onClick={props.abvChange} >
            <p for="Double">Double-Shot Highball(Rum and Coke, Seven and Seven)</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Strong Cocktail" name="drinkType" value='35' onClick={props.abvChange} >
            <p for="Strong Cocktail">Strong Cocktail (Old-fashioned, Martini, Sazerac)</p>
            <h4>{'>'}</h4>
        </div>
        <div className='buttonDiv' id="Weak Cocktail" name="drinkType" value='13' onClick={props.abvChange} >
            <p for="Weak/Fruity Cocktail">Weak/Fruity Cocktail (Tom Collins, Tequila Sunrise)</p>
            <h4>{'>'}</h4>
        </div >
        <div className='buttonDiv' id="Frozen Cocktail" name="drinkType" value='8' onClick={props.abvChange} >
            <p for="Frozen Cocktail">Frozen Cocktail (Margherita, Pina Colada, Daquiri)</p>
            <h4>{'>'}</h4>
        </div>
    </section>)
}
export default DrinkType