import React from 'react';
import { useHistory } from 'react-router-dom'
import { alc_oz_util, alc_ml_util } from '../../utils/alc_util'

function Number(props) {

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

    function handleSubmit(e) {
        props.setValues(
            {
                ...props.values,
                total: alc_ml_util(alc_oz_util(parseInt(props.values.amount) * props.values.container), props.values.abv)
            }
        )
        history.push("/beer/result")
    }

    return (<section>
        <h3>Number of drinks</h3>
        <input type='text' value={props.values.amount} onChange={numberChange} />
        <button type='button' onClick={handleSubmit} >Calculate</button>
    </section>)
}
export default Number