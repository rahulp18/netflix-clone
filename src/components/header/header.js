import React from 'react'
import {Link } from 'react-router-dom'
import * as ROUTES from '../../constant/routes'
import logo from '../../../src/logo.svg'
import './header.css'
 
// import HeaderContent from '../HeaderContent/HeaderContent'
const header = ({children,dis,bg}) => {
    return (
        <div className={bg?'header-container bg':'header-container'} >
            <div className='header'>
             <Link to='/'> <img src={logo} alt='logo' className='logo'/></Link> 
                {
                    dis?  <Link to={ROUTES.SIGN_IN}><button className='signin'>Sign In</button></Link>:null
                }
              
              
            </div>
           
            {children}
        </div>
    )
}

export default header
