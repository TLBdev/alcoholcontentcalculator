import React from 'react';
import { useHistory } from 'react-router-dom';

function Results(props) {
    const history = useHistory()
    function handleSubmit() {
        props.setCart({
            list: [
                ...props.cart.list,
                {
                    id: props.cart.idTicker,
                    ...props.values
                }

            ],
            total: props.cart.total + props.values.total / 18,
            idTicker: props.cart.idTicker + 1
        })
        console.log(props.cart.list)
        history.push('/')
    }
    return (<section>
        <h3>Results</h3>
        <div>{`${props.values.total.toFixed(4)} ml, ${(props.values.total / 18).toFixed(4)} standard drinks(US), ${(props.values.total / 10).toFixed(4)} units(UK)`}</div>
        {props.values.glass && props.values.professional ? <p> Glasses of wine served on location have been shown to have an average overpour of 43.3%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p> : null}

        {props.values.glass && props.values.professional ? <div>{`${(props.values.total * 1.433).toFixed(4)} ml, ${((props.values.total * 1.433) / 18).toFixed(4)} standard drinks(US), ${((props.values.total * 1.433) / 10).toFixed(4)} units(UK)`}</div> : null}

        {props.values.glass && props.values.home ? <p> Glasses of wine served at home have been shown to have particularly high variance(Kerr et al., 2005). It may be more reliable to calculate this number again with the amount of the bottle that was consumed if possible.</p> : null}
        <p>Action Code: {props.values.actionCode.bevType + props.values.actionCode.contType + props.values.actionCode.glass + props.values.actionCode.professional + props.values.actionCode.home + props.values.actionCode.draft + props.values.actionCode.amount}</p>
        <button type="button" onClick={handleSubmit} >add to total</button>
    </section>)
}
export default Results