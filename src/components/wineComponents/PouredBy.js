import React from 'react';
import { useHistory } from 'react-router-dom'

function PouredBy(props) {
    const history = useHistory()

    function locationChange(e) {
        props.setValues(
            {
                ...props.values,
                professional: e.currentTarget.attributes.id.value === "professional",
                home: e.currentTarget.attributes.id.value === "home",
                actionCode: {
                    ...props.values.actionCode,
                    professional: e.currentTarget.attributes.id.value === "professional" ? "01" : "00",
                    home: e.currentTarget.attributes.id.value === "home" ? "01" : "00"
                }
            }
        )
        history.push("/wine/amount")
    }

    return (
        <section>
            <h3>Poured By</h3>
            <div>
                <div className='buttonDiv' id="professional" name="pouredBy" value='750' onClick={locationChange} >
                    <p>Poured By Professional</p>
                    <h4>{'>'}</h4>
                </div>
                <div className='buttonDiv' id="home" name="pouredBy" value='750' onClick={locationChange} >
                    <p>Poured by Self/Friend/Family</p>
                    <h4>{'>'}</h4>
                </div>
            </div>
        </section >)
}
export default PouredBy