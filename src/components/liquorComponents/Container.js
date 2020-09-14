import React from 'react';
import { useHistory } from "react-router-dom"

function Container(props) {

    const history = useHistory()

    function containerChange(e) {
        props.setValues(
            {
                ...props.values,
                container: parseFloat(e.currentTarget.attributes.value.value),
                actionCode: {
                    ...props.values.actionCode,
                    contType: e.currentTarget.attributes.code.value
                }
            }
        )

        history.push("/liquor/amount")

    }

    return (
        <section >
            <h3>Container</h3>
            {!props.values.shot ? <div code="CG" className='buttonDiv' id="Cocktail Specific Glass" name="container" value='2.5' onClick={containerChange} >
                <p >Cocktail Specific Glass (Martini Glass, Lowball Glass)</p>
                <h4>{'>'}</h4>
            </div> : null}
            {!props.values.shot ? <div code="DC" className='buttonDiv' id="Disposable Plastic Cup" name="container" value='16' onClick={containerChange} >
                <p for="Disposable Plastic Cup">Disposable Plastic Cup (Red Solo Cup)</p>
                <h4>{'>'}</h4>
            </div> : null}
            {!props.values.shot ? <div className='buttonDiv' code="SG" id="Short Glass" name="container" value='14' onClick={containerChange} >
                <p for="Short Glass">Short Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {!props.values.shot ? <div className='buttonDiv' code="TG" id="Tall Glass" name="container" value='16' onClick={containerChange} >
                <p for="Tall Glass">Tall Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.shot ? <div className='buttonDiv' code="SS" id="Standard Shot Glass" name="container" value='1.5' onClick={containerChange} >
                <p for="Standard Shot Glass">Standard Shot Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
            {props.values.shot ? <div className='buttonDiv' code="DS" id="Tall/Double Shot Glass" name="container" value='3' onClick={containerChange} >
                <p for="Tall/Double Shot Glass">Tall/Double Shot Glass</p>
                <h4>{'>'}</h4>
            </div> : null}
        </section>
    )
}
export default Container