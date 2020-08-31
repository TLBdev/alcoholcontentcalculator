import React from 'react';
import { useHistory } from 'react-router-dom';

function Container(props) {

    const history = useHistory()

    function containerChange(e) {
        props.setValues(
            {
                ...props.values,
                container: parseInt(e.currentTarget.attributes.value.value),
                actionCode: {
                    ...props.values.actionCode,
                    contType: e.currentTarget.attributes.code.value
                }
            }
        )
        history.push("/beer/amount")
    }

    return (
        <section>
            <h3>Container</h3>
            <div className='buttonDiv' id="12oz Can/Bottle" code="12" name="container" value='12' onClick={containerChange} >
                <p >12oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="16oz Can/Bottle" code="16" name="container" value='16' onClick={containerChange} >
                <p >16oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="24oz Can/Bottle" code="24" name="container" value='24' onClick={containerChange}>
                <p >24oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="32oz Can/Bottle" code="32" name="container" value='32' onClick={containerChange} >
                <p >32oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="40oz Can/Bottle" code="40" name="container" value='40' onClick={containerChange} >
                <p >40oz Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="16oz Draught/Draft" code="DR" name="container" value='16' onClick={containerChange} >
                <p >16oz Draught/Draft</p><h4>{'>'}</h4></div>
        </section>)
}
export default Container