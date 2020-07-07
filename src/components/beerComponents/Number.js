import React from 'react';

function Number(props) {
    return (<section>
        <h3>Number of drinks</h3>
        <input type='text' value={props.values.volume} onChange={props.numberChange} />
        <button type='submit' >Calculate</button>
    </section>)
}
export default Number