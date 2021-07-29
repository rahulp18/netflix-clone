import React from 'react'
import Form from '../components/form/Form'
import '../components/SignIn/SignIn.css'
import HeaderContainer from '../components/header/header'
import Footer from '../components/Footer/Footer'

const signup = () => {
    return (
         <>
        <HeaderContainer bg={true} dis={true} text='Sign In'>
        <div className='s-container'> 
            <Form/>
        </div>
        </HeaderContainer>
        <Footer/>
    </>
    )
}

export default signup
