import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const reset = () => {
        props.setValues({
            abv: 0,
            container: 0,
            amount: "",
            total: 0,
            glass: false,
            professional: false,
            home: false,
            draft: false,
            slideCounter: 0,
            actionCode: {
                bevType: "00",
                contType: "00",
                glass: "NA",
                professional: "NA",
                home: "NA",
                draft: "NA",
                amount: "00"
            }
        })
    }
    return (
        <nav>
            <Link to='/wine' className={props.navigation && props.navigation === 'Wine' ? 'navButtonSelected' : 'navButton'} id='Wine' onClick={reset} >Wine</Link>
            <Link to='/beer' className={props.navigation && props.navigation === 'Beer' ? 'navButtonSelected' : 'navButton'} id='Beer' onClick={reset} >Beer</Link>
            <Link to='/liquor' className={props.navigation && props.navigation === 'Hard Liquor' ? 'navButtonSelected' : 'navButton'} id='Hard Liquor' onClick={reset} >Liquor</Link>
            <Link to='/info' className={props.navigation && props.navigation === 'Info' ? 'navButtonSelected' : 'navButton'} id='Info' onClick={reset} >Info</Link>
        </nav>
    )
}
export default NavBar