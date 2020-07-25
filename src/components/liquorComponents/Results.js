import React from 'react'

function Results(props) {
    return (
        <section>
            <div>{`${props.values.alc_cont.toFixed(4)} ml, ${(props.values.alc_cont / 18).toFixed(4)} standard drinks(US), ${(props.values.alc_cont / 10).toFixed(4)} units(UK)`}</div>
            {props.values.drinkType === 'Single-Shot Highball' || props.values.drinkType === 'Double-Shot Highball' ?
                <div>
                    <p>Mixed drinks served on location have been shown to have an average overpour of 42%(Kerr et al., 2008) The following numbers have been adjusted to reflect this.</p>
                </div> : null}
            {props.values.drinkType === 'Single-Shot Highball' || props.values.drinkType === 'Double-Shot Highball' ?
                <div>
                    {`${(props.values.alc_cont * 1.42).toFixed(4)} ml, ${((props.values.alc_cont * 1.42) / 18).toFixed(4)} standard drinks(US), ${((props.values.alc_cont * 1.42) / 10).toFixed(4)} units(UK)`}
                </div> : null}
        </section>
    )
}
export default Results