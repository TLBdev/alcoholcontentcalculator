import React from 'react';

function PouredBy(props) {
    return (
        <section>
            <h3>Poured By</h3>
            <div>
                <div className='buttonDiv' id="Poured By Professional" name="pouredBy" value='750' onClick={props.locationChange} >
                    <p>Poured By Professional</p>
                    <h4>{'>'}</h4>
                </div>
                <div className='buttonDiv' id="Poured by Self/Friend/Family" name="pouredBy" value='750' onClick={props.locationChange} >
                    <p>Poured by Self/Friend/Family</p>
                    <h4>{'>'}</h4>
                </div>
            </div>
        </section >)
}
export default PouredBy