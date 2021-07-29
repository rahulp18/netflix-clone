import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import './input.css'
const InputBox = () => {
    return (
        <div className='input-container'>
            <div className='box'>
                <div className='box-header'>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <div className='input'>
                    <input placeholder='E-mail Address' />
                    <button className='start-btn'>get started<FaAngleRight /></button>
                </div>
            </div>
        </div>
    )
}

export default InputBox
