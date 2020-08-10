import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <nav>
            <Link to='/wine' className={props.navigation && props.navigation === 'Wine' ? 'navButtonSelected' : 'navButton'} id='Wine' onClick={props.handleNav} >Wine</Link>
            <Link to='/beer' className={props.navigation && props.navigation === 'Beer' ? 'navButtonSelected' : 'navButton'} id='Beer' onClick={props.handleNav} >Beer</Link>
            <Link to='/liquor' className={props.navigation && props.navigation === 'Hard Liquor' ? 'navButtonSelected' : 'navButton'} id='Hard Liquor' onClick={props.handleNav} >Liquor</Link>
            <Link to='/info' className={props.navigation && props.navigation === 'Info' ? 'navButtonSelected' : 'navButton'} id='Info' onClick={props.handleNav} >Info</Link>
        </nav>
    )
}
export default NavBar