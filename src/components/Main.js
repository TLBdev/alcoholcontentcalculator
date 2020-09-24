import React from 'react'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

function Main(props) {

    const history = useHistory()



    const reset = (e) => {

        props.setValues({
            drinkType: e.currentTarget.attributes.id.value,
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

    const handleClick = (e) => {
        reset(e)
        history.push(`/${e.currentTarget.attributes.name.value}`)
    }

    return (


        <div className='App-header'>
            <section>
                <div className='buttonDiv' id="Wine" name="wine" onClick={handleClick} >
                    <p>Wine</p>
                    <h4>{'>'}</h4>
                </div>
                <div className='buttonDiv' id="Beer" name="beer" onClick={handleClick} >
                    <p>Beer</p>
                    <h4>{'>'}</h4>
                </div>
                <div className="buttonDiv" id="Liquor" name="beer" onClick={handleClick} >
                    <p>Liquor</p>
                    <h4>{'>'}</h4>
                </div>
                <div className='buttonDiv' id="Info" name="beer" onClick={handleClick} >
                    <p>Info</p>
                    <h4>{'>'}</h4>
                </div>
                <Link to='/wine' name="Wine" onClick={reset} >Wine</Link>
                <Link to='/beer' name="Beer" onClick={reset} >Beer</Link>
                <Link to='/liquor' name="Liquor" onClick={reset} >Liquor</Link>
                <Link to='/info' >Info</Link>
            </section>
        </div>
    )
}

export default Main