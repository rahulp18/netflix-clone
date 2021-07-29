import React,{useState} from 'react'
 
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const SingleQuestion = ({item}) => {
     
    const [toggle,setToogle]=useState(false);
    const ToogleValue=()=>{
        setToogle(!toggle)
    }
    return (
        <article className='q-item' key={item.id}  >
                         <div className='header' onClick={ToogleValue}><h3 className='question' >{item.question}</h3> 
                         <span className='toggle'>{toggle?<AiOutlineMinus/>:<AiOutlinePlus/>}</span> </div>
                         {
                             toggle ?<section className='ans'>
                                 <p>{item.ans_1}</p>
                                 <p>{item.ans_2}</p>
                                 </section>:null
                         }

                           </article>
    )
}

export default SingleQuestion
