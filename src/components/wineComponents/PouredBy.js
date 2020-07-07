import React from 'react';

function PouredBy(props) {
    return (
        <section>
            <h3>Poured By</h3>
            <div>
                <input type="radio" id="Poured By Professional" name="pouredBy" value='750' onClick={props.locationChange} />
                <label for="Poured By Professional">Poured By Professional</label><br />
                <input type="radio" id="Poured by Self/Friend/Family" name="pouredBy" value='750' onClick={props.locationChange} />
                <label for="Poured by Self/Friend/Family">Poured by Self/Friend/Family</label><br />
            </div>
        </section>)
}
export default PouredBy