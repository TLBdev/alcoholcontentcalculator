import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <button name='Wine' onClick={props.handleNav} >Wine</button>
            <button name='Beer' onClick={props.handleNav} >Beer</button>
        </nav>
    )
}
export default NavBar