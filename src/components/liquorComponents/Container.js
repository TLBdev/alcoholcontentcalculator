import React from 'react';

function Container(props) {
    return (
        <section >
            <h3>Container</h3>
            {props.values.drinkType !== 'Shot' ? <div className='buttonDiv' id="Cocktail Specific Glass" name="container" value='2.5' onClick={props.containerChange} >
                <p for="Cocktail Specific Glass">Cocktail Specific Glass (Martini Glass, Lowball Glass)</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.drinkType !== 'Shot' ? <div className='buttonDiv' id="Disposable Plastic Cup" name="container" value='16' onClick={props.containerChange} >
                <p for="Disposable Plastic Cup">Disposable Plastic Cup (Red Solo Cup)</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.drinkType !== 'Shot' ? <div className='buttonDiv' id="Short Glass" name="container" value='14' onClick={props.containerChange} >
                <p for="Short Glass">Short Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.drinkType !== 'Shot' ? <div className='buttonDiv' id="Tall Glass" name="container" value='16' onClick={props.containerChange} >
                <p for="Tall Glass">Tall Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.drinkType === 'Shot' ? <div className='buttonDiv' id="Standard Shot Glass" name="container" value='1.5' onClick={props.containerChange} >
                <p for="Standard Shot Glass">Standard Shot Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.drinkType === 'Shot' ? <div className='buttonDiv' id="Tall/Double Shot Glass" name="container" value='3' onClick={props.containerChange} >
                <p for="Tall/Double Shot Glass">Tall/Double Shot Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
        </section>
    )
}
export default Container