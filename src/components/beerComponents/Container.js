import React from 'react';

function Container(props) {
    return (<section>
        <div>Container</div>
        <input type="radio" id="12oz Can/Bottle" name="container" value='12' onClick={props.containerChange} />
        <label for="12oz Can/Bottle">12oz Can/Bottle</label><br />
        <input type="radio" id="16oz Can/Bottle" name="container" value='16' onClick={props.containerChange} />
        <label for="16oz Can/Bottle">16oz Can/Bottle</label><br />
        <input type="radio" id="24oz Can/Bottle" name="container" value='24' onClick={props.containerChange} />
        <label for="24oz Can/Bottle">24oz Can/Bottle</label><br />
        <input type="radio" id="32oz Can/Bottle" name="container" value='32' onClick={props.containerChange} />
        <label for="32oz Can/Bottle">32oz Can/Bottle</label><br />
        <input type="radio" id="40oz Can/Bottle" name="container" value='40' onClick={props.containerChange} />
        <label for="40oz Bottle">40oz Bottle</label><br />
        <input type="radio" id="16oz Draught/Draft" name="container" value='16' onClick={props.containerChange} />
        <label for="16oz Draught/Draft">16oz Draught/Draft</label>
    </section>)
}
export default Container