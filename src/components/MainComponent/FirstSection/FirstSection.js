import React from 'react'
import './FirstSection.css'
const FirstSection = () => {
    return (
        <div className='fs-container'>
            <div className='fs-head'>
                <h1>watch Jocker now</h1>
            </div>
            <article className='fs-details'>
                <h3>In 1981 Gotham City, a struggling, mentally ill comic battles to be seen.
                    His life takes a dark, gut-wrenching turn after he lashes back at attackers.
                    Joker.
                    “Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man disregarded by society,
                    is not only a gritty character study, but also a broader cautionary tale.</h3>
            </article>
            <div className='fs-btn'>
                <button className='fs-play'>play</button>
            </div>
        </div>
    )
}

export default FirstSection
