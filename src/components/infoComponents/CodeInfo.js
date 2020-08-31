import React from 'react'

export default function CodeInfo() {
    return (
        <div>
            <h4>Code info</h4>
            <h3>1122334455667777</h3>
            <br />
            <h4>11: These 2 digits indicate drink type chosen.</h4>
            <p>LD - Light Domestic Draft</p>
            <p>SD - Standard Domestic Draft </p>
            <p>DI - Domestic Ice </p>
            <p>LC - Low ABV Craft  </p>
            <p>AC - Average ABV Craft</p>
            <p>HC - High ABV Craft</p>
            <p>AM - Average Malt Liquor</p>
            <p>HM - High ABV Malt Liquor  </p>
            <br />
            <h4>22: These digits indicate the size of the container chosen. </h4>
            <p>12 - 12OZ Can/Bottle (beer)</p>
            <p>16 - 16OZ Can/Bottle (beer)</p>
            <p>24 - 24OZ Can/Bottle (beer)</p>
            <p>32 - 32OZ Can/Bottle (beer)</p>
            <p>40 - 40OZ Bottle (beer)</p>
            <p>DR - 16OZ Draft (beer)</p>
            <br />
            <h4>33: Indicate whether a glass was chosen as the container for wine</h4>
            <p>NA - Not Applicable</p>
            <p>TR - True</p>
            <p>FA - False</p>
            <h4>44: Indicates whether the drink was poured by a professionalm i.e. at a bar</h4>
            <p>NA - Not Applicable</p>
            <p>TR - True</p>
            <p>FA - False</p>
            <h4>55: Indicates whether the drink was poured at home.</h4>
            <p>NA - Not Applicable</p>
            <p>TR - True</p>
            <p>FA - False</p>
            <h4>66 Indicates if a beer is a draft beer or not</h4>
            <p>NA - Not Applicable</p>
            <p>TR - True</p>
            <p>FA - False</p>
            <h4>7777 Indicates the number of drinks consumed entered by the user. This may be of any length and may contain decimals.</h4>
        </div>
    )
}