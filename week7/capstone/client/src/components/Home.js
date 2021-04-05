import React from 'react'
import avengerImg from '../img/avengers.jpg'

export default function Home() {
    return (
        <div className='home-page'>
            <div className='home-page-img'>
                <img src={avengerImg} alt='' />
            </div>
        </div>
    )
}
