import React from 'react';

function Container(props) {
    return (
        <section>
            <h3>Container</h3>
            <div className='buttonDiv' id="12oz Can/Bottle" name="container" value='12' onClick={props.containerChange} >
                <p for="12oz Can/Bottle">12oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="16oz Can/Bottle" name="container" value='16' onClick={props.containerChange} >
                <p for="16oz Can/Bottle">16oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="24oz Can/Bottle" name="container" value='24' onClick={props.containerChange}>
                <p for="24oz Can/Bottle">24oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="32oz Can/Bottle" name="container" value='32' onClick={props.containerChange} >
                <p for="32oz Can/Bottle">32oz Can/Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="40oz Can/Bottle" name="container" value='40' onClick={props.containerChange} >
                <p for="40oz Bottle">40oz Bottle</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="16oz Draught/Draft" name="container" value='16' onClick={props.containerChange} >
                <p for="16oz Draught/Draft">16oz Draught/Draft</p><h4>{'>'}</h4></div>
        </section>)
}
export default Container