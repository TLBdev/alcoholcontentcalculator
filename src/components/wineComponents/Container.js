import React from 'react';

function Container(props) {
    return (<section>
        <h3>Container</h3>
        <input type="radio" id="Bottle" name="container" value='750' onClick={props.containerChange} />
        <label for="Bottle">Bottle</label><br />
        <input type="radio" id="Glass" name="container" value='147.8675' onClick={props.containerChange} />
        <label for="Glass">Glass</label><br />
        <input type="radio" id="12oz Can/Bottle" name="container" value='354.882' onClick={props.containerChange} />
        <label for="12oz Can/Bottle">12oz Can/Bottle</label><br />
        <input type="radio" id="8oz Can/Bottle" name="container" value='236.588' onClick={props.containerChange} />
        <label for="8oz Can/Bottle">8oz Can/Bottle</label><br />
    </section>)
}
export default Container