import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <div className={props.navigation && props.navigation === 'Wine' ? 'navButtonSelected' : 'navButton'} id='Wine' onClick={props.handleNav} >Wine</div>
            <div className={props.navigation && props.navigation === 'Beer' ? 'navButtonSelected' : 'navButton'} id='Beer' onClick={props.handleNav} >Beer</div>
            <div className={props.navigation && props.navigation === 'Hard Liquor' ? 'navButtonSelected' : 'navButton'} id='Hard Liquor' onClick={props.handleNav} >Liquor</div>
            <div className={props.navigation && props.navigation === 'Info' ? 'navButtonSelected' : 'navButton'} id='Info' onClick={props.handleNav} >Info</div>
        </nav>
    )
}
export default NavBar