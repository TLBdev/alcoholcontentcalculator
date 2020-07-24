import React from 'react';

function Beverage(props) {
    return (<section>
        <h3 className='secTitle'>Beverage Type</h3>
        <div classname='secContent' >
            <div className='buttonDiv' id="Light Domestic" name="beverage" value="4" onClick={props.beverageChange} >
                <p for="Light Domestic">Light Domestic(~4% ABV, Bud Light, Keystone Light, etc.)</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Standard Domestic" name="beverage" value="5" onClick={props.beverageChange} >
                <p for="Standard Domestic">Standard Domestic (~5% abv, Budweiser, Michelob, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Domestic Ice" name="beverage" value="5.9" onClick={props.beverageChange} >
                <p for="Domestic Ice">Domestic Ice (~5.9% abv, Keystone Ice, Bud Ice, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Lower ABV Craft" name="beverage" value="5" onClick={props.beverageChange} >
                <p for="Lower ABV Craft">Lower ABV Craft (~5% abv, German Pilsner, American Blonde Ale, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Average ABV Craft" name="beverage" value="7" onClick={props.beverageChange} >
                <p for="Average ABV Craft">Average ABV Craft (~7% abv, Belgian IPA, Imperial Pilsner, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="High ABV Craft" name="beverage" value="10" onClick={props.beverageChange} >
                <p for="High ABV Craft">High ABV Craft (~10% abv, Imperial Stout, Wheatwine, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Average Malt Liquor" name="beverage" value="7" onClick={props.beverageChange} >
                <p for="Average ABV Malt Liquor">Average Malt Liquor (~7% abv, Mickey's, Steel Reserve, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="High ABV Malt Liquor" name="beverage" value="12" onClick={props.beverageChange} >
                <p for="High ABV Malt Liquor">High ABV Malt Liquor (~12% abv, Four Loko, Blast Colt 45, etc.) </p><h4>{'>'}</h4></div>

        </div>
    </section>)
}
export default Beverage