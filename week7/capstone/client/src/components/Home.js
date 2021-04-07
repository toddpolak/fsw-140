import React from 'react'
import avengerImg from '../img/avengers.jpg'

export default function Home() {
    return (
        <div className='home-page'>
            <div className='home-page-img'>
                <img src={avengerImg} alt='' />
            </div>
            <div className='home-info-container'>
                <div className='home-info'>
                    With more than 250,000 articles, the Marvel Comics Database is the largest Marvel encyclopedia ever written, as well as being one of the five largest wiki on Fandom. The Database covers comics, characters, teams, games, television shows, movies, and more. Browse one of nearly 70,000 character pages, over 50,000 comics, or nearly 250,000 images in our galleries. There's something for every fan!
                </div>
            </div>
        </div>
    )
}
