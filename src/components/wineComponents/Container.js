import React from 'react';
function Container(props) {
    return (
        <section>
            <h3>Container</h3>
            <div className='buttonDiv' id="Bottle" name="container" value='750' onClick={props.containerChange} >
                <p>Bottle</p>
                <h4>{'>'}</h4>
            </div>
            <div className='buttonDiv' id="Glass" name="container" value='147.8675' onClick={props.containerChange} >
                <p>Glass</p>
                <h4>{'>'}</h4>
            </div>
            <div className="buttonDiv" id="12oz Can/Bottle" name="container" value='354.882' onClick={props.containerChange} >
                <p>12oz Can/Bottle</p>
                <h4>{'>'}</h4>
            </div>
            <div className='buttonDiv' id="8oz Can/Bottle" name="container" value='236.588' onClick={props.containerChange} >
                <p>8oz Can/Bottle</p>
                <h4>{'>'}</h4>
            </div>
        </section>)
}
export default Container