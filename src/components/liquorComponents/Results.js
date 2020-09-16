import React from 'react'

function Results(props) {
    return (
        <section>
            <h3>Results</h3>
            <div>{`${props.values.total.toFixed(4)} ml, ${(props.values.total / 18).toFixed(4)} standard drinks(US), ${(props.values.total / 10).toFixed(4)} units(UK)`}</div>
            {props.values.highball ?
                <div>
                    <p>Mixed drinks served on location have been shown to have an average overpour of 42%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p>
                </div> : null}
            {props.values.highball ?
                <div>
                    {`${(props.values.total * 1.42).toFixed(4)} ml, ${((props.values.total * 1.42) / 18).toFixed(4)} standard drinks(US), ${((props.values.total * 1.42) / 10).toFixed(4)} units(UK)`}
                </div> : null}
            <p>Action Code: {props.values.actionCode.bevType + props.values.actionCode.contType + props.values.actionCode.glass + props.values.actionCode.professional + props.values.actionCode.home + props.values.actionCode.draft + props.values.actionCode.amount}</p>
        </section>
    )
}
export default Results