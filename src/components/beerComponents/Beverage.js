import React from 'react';

function Beverage(props) {
    return (<section>
        <h3 className='secTitle'>Beverage Type</h3>
        <div classname='secContent' >
            <div><input type="radio" id="Light Domestic" name="beverage" value="4" onClick={props.beverageChange} />
                <label for="Light Domestic">Light Domestic(~4% ABV, Bud Light, Keystone Light, etc.)</label></div>
            <div><input type="radio" id="Standard Domestic" name="beverage" value="5" onClick={props.beverageChange} />
                <label for="Standard Domestic">Standard Domestic (~5% abv, Budweiser, Michelob, etc.) </label></div>
            <div><input type="radio" id="Domestic Ice" name="beverage" value="5.9" onClick={props.beverageChange} />
                <label for="Domestic Ice">Domestic Ice (~5.9% abv, Keystone Ice, Bud Ice, etc.) </label></div>
            <div><input type="radio" id="Lower ABV Craft" name="beverage" value="5" onClick={props.beverageChange} />
                <label for="Lower ABV Craft">Lower ABV Craft (~5% abv, German Pilsner, American Blonde Ale, etc.) </label></div>
            <div><input type="radio" id="Average ABV Craft" name="beverage" value="7" onClick={props.beverageChange} />
                <label for="Average ABV Craft">Average ABV Craft (~7% abv, Belgian IPA, Imperial Pilsner, etc.) </label></div>
            <div><input type="radio" id="High ABV Craft" name="beverage" value="10" onClick={props.beverageChange} />
                <label for="High ABV Craft">High ABV Craft (~10% abv, Imperial Stout, Wheatwine, etc.) </label></div>
            <div><input type="radio" id="Average Malt Liquor" name="beverage" value="7" onClick={props.beverageChange} />
                <label for="Average ABV Malt Liquor">Average Malt Liquor (~7% abv, Mickey's, Steel Reserve, etc.) </label></div>
            <div><input type="radio" id="High ABV Malt Liquor" name="beverage" value="12" onClick={props.beverageChange} />
                <label for="High ABV Malt Liquor">High ABV Malt Liquor (~12% abv, Four Loko, Blast Colt 45, etc.) </label></div>

        </div>
    </section>)
}
export default Beverage