import React from 'react';

function Results(props) {
    return (<section>
        <div>{`${props.values.total.toFixed(4)} ml, ${(props.values.total / 18).toFixed(4)} standard drinks(US), ${(props.values.total / 10).toFixed(4)} units(UK)`}</div>
        {props.values.glass && props.values.professional ? <p> Glasses of wine served on location have been shown to have an average overpour of 43.3%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p> : null}

        {props.values.glass && props.values.professional ? <div>{`${(props.values.total * 1.433).toFixed(4)} ml, ${((props.values.total * 1.433) / 18).toFixed(4)} standard drinks(US), ${((props.values.total * 1.433) / 10).toFixed(4)} units(UK)`}</div> : null}

        {props.values.glass && props.values.home ? <p> Glasses of wine served at home have been shown to have particularly high variance(Kerr et al., 2005). It may be more reliable to calculate this number again with the amount of the bottle that was consumed if possible.</p> : null}
    </section>)
}
export default Results