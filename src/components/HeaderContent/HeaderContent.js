import React from 'react'
import InputBox from '../opt-input/InputBox'
import './headerContent.css'
 
const HeaderContent = () => {
    return (
        <div className='content'>
         <h1 className='content-h1'>
            Unlimited movies, TV shows and more.
            
         </h1>
         <h3 className='content-h3'>Watch anywhere. Cancel anytime.</h3>
        <InputBox/>
        </div>
    )
}

export default HeaderContent
