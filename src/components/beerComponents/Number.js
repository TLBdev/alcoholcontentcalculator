import React from 'react';

function Number(props) {
    return (<section>
        <div>Number of drinks</div>
        <input type='text' value={props.values.volume} onChange={props.numberChange} />
        <button type='submit' >Calculate</button>
    </section>)
}
export default Number