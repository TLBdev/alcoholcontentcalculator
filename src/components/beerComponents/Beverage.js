import React from 'react';
import { useHistory } from 'react-router-dom';

function Beverage(props) {

    const history = useHistory()

    function beverageChange(e) {
        e.preventDefault()
        props.setValues(
            {
                ...props.values,
                abv: parseInt(e.currentTarget.attributes.value.value),
                actionCode: {
                    ...props.values.actionCode,
                    bevType: e.currentTarget.attributes.code.value
                }
            }
        )
        history.push('/beer/container')
    }

    return (<section>
        <h3 className='secTitle'>Beverage Type</h3>
        <div className='secContent' >
            <div className='buttonDiv' id="Light Domestic" name="beverage" code="LD" value="4" onClick={beverageChange} >
                <p >Light Domestic(~4% ABV, Bud Light, Keystone Light, etc.)</p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Standard Domestic" name="beverage" code="SD" value="5" onClick={beverageChange} >
                <p >Standard Domestic (~5% abv, Budweiser, Michelob, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Domestic Ice" name="beverage" code="DI" value="5.9" onClick={beverageChange} >
                <p >Domestic Ice (~5.9% abv, Keystone Ice, Bud Ice, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Lower ABV Craft" name="beverage" code="LC" value="5" onClick={beverageChange} >
                <p >Lower ABV Craft (~5% abv, German Pilsner, American Blonde Ale, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Average ABV Craft" name="beverage" code="AC" value="7" onClick={beverageChange} >
                <p >Average ABV Craft (~7% abv, Belgian IPA, Imperial Pilsner, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="High ABV Craft" name="beverage" code="HC" value="10" onClick={beverageChange} >
                <p >High ABV Craft (~10% abv, Imperial Stout, Wheatwine, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="Average Malt Liquor" name="beverage" code="AM" value="7" onClick={beverageChange} >
                <p >Average Malt Liquor (~7% abv, Mickey's, Steel Reserve, etc.) </p><h4>{'>'}</h4></div>
            <div className='buttonDiv' id="High ABV Malt Liquor" name="beverage" code="HM" value="12" onClick={beverageChange} >
                <p >High ABV Malt Liquor (~12% abv, Four Loko, Blast Colt 45, etc.) </p><h4>{'>'}</h4></div>

        </div>
    </section>)
}
export default Beverage