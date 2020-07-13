import React from 'react'
import ImgCredits from './infoComponents/ImgCredits'
function Info() {
    return (
        <div className='infoCont'>
            <h1>Additional Information</h1>
            <p>This App was created at the request of Arielle Deutsh, phd. with the purpose of providing a tool for better estimating standard drinks with a focus on ease-of-use. This tool was created and researched by Tony Burch. All numbers and math used in this app are based on the best information available to me and some sacrifices were made to maintian usability.</p>
            <h2>The Math</h2>
            <h3>Alcohol Content in ml</h3>
            <p>total_ml * (abv / 100)</p>
            <h3>Alcohol Content in ml from a drink measured in ounces</h3>
            <p>(total_oz * 28.3495231) * (abv / 100)</p>
            <h3>Standard Drinks</h3>
            <p>alcohol_content_in_ml / 18</p>
            <p>(total_ml * (abv / 100)) / 18 for drinks measured in ml</p>
            <p>((total_oz * 28.3495231) * (abv / 100)) / 18 for drinks measured in oz</p>
            <h2>The Measurements</h2>
            <h3>Wine</h3>
            <h4>Containers</h4>
            <p>Bottle: 750ml</p>
            <p>Glass: 147.8675ml</p>
            <p>12oz Can/Bottle: 354.882</p>
            <p>8oz can/bottle: 236.588</p>
            <h4>Alcohol Content</h4>
            <p>This app calculates wine abv as a constant with a value of 12% alcohol by volume.</p>
            <h3>Beer</h3>
            <h4>Containers</h4>
            <p>12oz Can/Bottle: 12oz</p>
            <p>16oz Can/Bottle: 16oz</p>
            <p>24oz Can/Bottle: 24oz</p>
            <p>32oz Can/Bottle: 32oz</p>
            <p>40oz Bottle: 40oz</p>
            <p>16oz Draught/Draft: 16oz</p>
            <h4>Alcohol Content</h4>
            <p>Light Domestic: 4%</p>
            <p>Standard Domestic: 5%</p>
            <p>Domestic Ice: 5.9%</p>
            <p>Low ABV Craft: 5%</p>
            <p>Average ABV Craft: 7%</p>
            <p>High ABV Craft: 10%</p>
            <p>Average ABV Malt Liquor: 7%</p>
            <p>High ABV Malt Liquor: 12%</p>
            <h3>Hard Liquor</h3>
            <h4>Containers</h4>
            <p>Cocktail Specific Glass: 2.5oz (appears to be the average size for strong cocktails, not empirically tested)</p>
            <p>Disposable Plastic Cup: 16oz</p>
            <p>Highball Glass: 14oz</p>
            <p>Tall Glass: 16oz</p>
            <p>Standard Shot Glass: 1.5oz</p>
            <p>Tall/Double Shot Glass: 3oz</p>
            <h3>Limitations</h3>
            <p>In the interest of usability several assumptions were made about alcohol content and drink sizes. Where possible an additional calculation is made to account for overpours (both the original and adjusted numbers are available on screen), but several more considerations for overpours may need to be made.</p>
            <p>This app is designed to be used to get a better estimation of standard drinks consumed, but it is far from perfect. Nothing about this app should be interpreted to be medical or legal advice.</p>
            <h4>Citations</h4>
            <ImgCredits />
        </div>
    )
}

export default Info