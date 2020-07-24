import React from 'react';

function Amount(props) {
    return (
        <section>
            <h3>Amount</h3>
            <p>Note: Please use decimals when noting partial containers</p>
            <input type='text' value={props.values.amount} onChange={props.amountChange} />
            <button type='submit'>Calculate</button>
        </section>
    )
}
export default Amount