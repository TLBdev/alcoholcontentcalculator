import React from 'react';

function Results(props) {
    return (<section>
        <div>{`${props.values.alc_cont.toFixed(4)} ml, ${(props.values.alc_cont / 18).toFixed(4)} standard drinks(US), ${(props.values.alc_cont / 10).toFixed(4)} units(UK)`}</div>
        {props.values.draft ? <p>Draft/Draught Selected, the following numbers are adjusted to assume a 22% overpour(Kerr et al., 2008)</p> : null}

        {props.values.draft ? <div>{`${(props.values.alc_cont * 1.22).toFixed(4)} ml, ${((props.values.alc_cont * 1.22) / 18).toFixed(4)} standard drinks(US), ${((props.values.alc_cont * 1.22) / 10).toFixed(4)} units(UK)`}</div> : null}
    </section>)
}
export default Results