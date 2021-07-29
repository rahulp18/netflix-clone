import React from 'react'
import {useGlobalContext} from '../../context'
import InputBox from '../opt-input/InputBox'
import SingleQuestion from '../SingleQuestion/SingleQuestion'
import './Queries.css'

 
const Queries = () => {
    
    const {data } =useGlobalContext()
    console.log(data)
    return (
        <div className='q-container'>
            <div className='q_box'>
            <h1 className='q-h1'>Frequently Asked Questions</h1>
            {
                data.map((item)=>{
                    return  <SingleQuestion item={item}  key={item.id}/>
                })
            }
            <InputBox/>
            </div>
        </div>
    )
}

export default Queries
