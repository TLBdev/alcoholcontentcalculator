import React from 'react'
import singleShot from '../../alcImg/singleShot/shot-glasses-1532293-639x555.jpg'
import doubleShot from '../../alcImg/double shot/flame-shot-1187258-640x480.jpg'
import highball from '../../alcImg/highball/whiskey-626254_640.jpg'
import highball2 from '../../alcImg/highball2/alcohol-1869282_640.jpg'
import strongCocktails from '../../alcImg/cocktail/cocktails-of-the-deep-south-1323527-639x427.jpg'
import weakCocktail from '../../alcImg/light cocktail/cocktail-3327242_640.jpg'
import frozenCocktail from '../../alcImg/frozen cocktail/lime-closeup-1580143-639x427.jpg'
import soloCup from '../../alcImg/solo cup/red-cup-1327412-639x557.jpg'

export default function ImgCredits() {
    return (
        <div>
            <h3>Image Credits</h3>
            <img src={strongCocktails} />
            <p>Photo by <a href="/photographer/theswedish-32171">Roger Kirby</a> from <a href="https://freeimages.com/">FreeImages</a></p>
            <img src={singleShot} />
            <p>Photo by <a href="/photographer/CathyK-39700">Cathy Kaplan</a> from <a href="https://freeimages.com/">FreeImages</a>
            </p>
            <img src={doubleShot} />
            <p>Credit Missing</p>
            <img src={highball} />
            <p>Image by <a href="https://pixabay.com/users/kaicho20-86142/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=626254">Ira Lee Nesbitt</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=626254">Pixabay</a>
            </p>
            <img src={highball2} />
            <p>Credit Missing</p>
            <img src={weakCocktail} />
            <p>Image by <a href="https://pixabay.com/users/SocialButterflyMMG-5413276/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3327242">Social Butterfly</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3327242">Pixabay</a>
            </p>
            <img src={frozenCocktail} />
            <p>Photo by <a href="/photographer/bigevil600-57066">ramzi hashisho</a> from <a href="https://freeimages.com/">FreeImages</a>
            </p>
            <img src={soloCup} />
            <p>Photo by <a href="/photographer/drig-53011">David Rigotti</a> from <a href="https://freeimages.com/">FreeImages</a>
            </p>
        </div>
    )
}