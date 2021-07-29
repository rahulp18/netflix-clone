import React from 'react'
import './Loading.css'
const Loading = ({src}) => {
    // console.log('This is loading page')
    return (
        <div className='loading-container'>
            <div className="lds-hourglass"/>
            <div className="lds-hourglass"/>
            <div className="lds-hourglass"/>
             
        </div>
    )
}

export default Loading
