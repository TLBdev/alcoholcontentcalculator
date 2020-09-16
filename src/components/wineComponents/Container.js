import React from 'react';
import { useHistory } from 'react-router-dom'
function Container(props) {

    const history = useHistory()

    function containerChange(e) {
        props.setValues(
            {
                ...props.values,
                container: parseInt(e.currentTarget.attributes.value.value),
                glass: e.currentTarget.attributes.code.value === "GL",
                actionCode: {
                    ...props.values.actionCode,
                    contType: e.currentTarget.attributes.code.value,
                    glass: e.currentTarget.attributes.code.value === "GL" ? "01" : "00",
                }
            }
        )
        if (e.currentTarget.attributes.code.value === "GL") {
            history.push("/wine/location")
        } else {
            history.push("/wine/amount")
        }
    }
    return (
        <section>
            <h3>Container</h3>
            <div className='buttonDiv' id="Bottle" name="container" code='BO' value='750' onClick={containerChange} >
                <p>Bottle</p>
                <h4>{'>'}</h4>
            </div>
            <div className='buttonDiv' code='GL' id="Glass" name="container" value='147.8675' onClick={containerChange} >
                <p>Glass</p>
                <h4>{'>'}</h4>
            </div>
            <div className="buttonDiv" code='CB' id="12oz Can/Bottle" name="container" value='354.882' onClick={containerChange} >
                <p>12oz Can/Bottle</p>
                <h4>{'>'}</h4>
            </div>
            <div className='buttonDiv' code='08' id="8oz Can/Bottle" name="container" value='236.588' onClick={containerChange} >
                <p>8oz Can/Bottle</p>
                <h4>{'>'}</h4>
            </div>
        </section>)
}
export default Container