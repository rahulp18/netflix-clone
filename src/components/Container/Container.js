import React from 'react'
import SingleComponent from '../SingleComponent/SingleComponent'
 
import './container.css'
const Container = ({jumboData}) => {
    return (
        <div className='container'>
            {
   jumboData.map((item)=>{
    return <SingleComponent key={item.id} {...item}/>
  })
            }
        </div>
    )
}

export default Container

