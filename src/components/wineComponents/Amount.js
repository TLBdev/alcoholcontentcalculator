import React from 'react';
import { useHistory } from 'react-router-dom'
import { alc_ml_util } from '../../utils/alc_util'
function Amount(props) {

    const history = useHistory()

    function numberChange(e) {
        props.setValues(
            {
                ...props.values,
                amount: e.target.value,
                actionCode: {
                    ...props.values.actionCode,
                    amount: e.target.value
                }
            }
        )


    }

    function handleSubmit() {
        props.setValues(
            {
                ...props.values,
                total: alc_ml_util(props.values.container * props.values.amount, 12)
            }
        )
        history.push("/wine/result")
    }
    return (<section>
        <h3>Amount</h3>
        <p>Note: Please use decimals when noting partial containers</p>
        <input type='text' value={props.values.amount} onChange={numberChange} />
        <button type='button' onClick={handleSubmit}>Calculate</button>
    </section>)
}
export default Amount