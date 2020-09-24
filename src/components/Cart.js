import React from 'react'
import '../App.css';

function Cart(props) {
    function handleDelete(e) {
        console.log(e.target.attributes.name.value)
        let newlist = []
        let del = {}
        props.cart.list.forEach((i) => {
            console.log(i)
            if (i.id === parseInt(e.target.attributes.name.value)) {
                del = i
            } else {
                newlist.push(i)
            }
        })

        props.setCart({
            ...props.cart,
            list: newlist,
            total: props.cart.total - (del.total / 18)
        })
    }
    return (
        <div className='sideBar'>
            <div className='cartList' >
                {props.cart.list.map((e) => { return (<div key={e.id} className="cartItem"><p>{`${e.drinkType} :  ${(e.total / 18).toFixed(4)}`}</p> <p onClick={handleDelete} name={parseInt(e.id)} >X </p></div>) })}
            </div>
            <div>
                <p>{`Total: ${props.cart.total.toFixed(4)}`}</p>
            </div>
        </div>
    )
}

export default Cart