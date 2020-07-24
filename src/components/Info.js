import React from 'react'

import Math from './infoComponents/Math'
import Limitations from './infoComponents/Limitations'
import Citations from './infoComponents/Citations'

function Info() {
    return (
        <div className='infoCont'>
            <h1>Additional Information</h1>
            <p>This App was created at the request of Arielle Deutsh, phd. with the purpose of providing a tool for better estimating standard drinks with a focus on ease-of-use. This tool was created and researched by Tony Burch. All numbers and math used in this app are based on the best information available to me and some sacrifices were made to maintian usability.</p>
            <Math />
            <Limitations />
            <Citations />

        </div>
    )
}

export default Info