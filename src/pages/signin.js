import React from 'react'
import SignIn from '../components/SignIn/SignIn'
import HeaderContainer from '../components/header/header'
import Footer from '../components/Footer/Footer'

const signin = () => {
    return (
        <div>
            <HeaderContainer bg={true} dis={true} text='Sign Up'>
                <SignIn/>
            </HeaderContainer>
            <Footer/>
        </div>
    )
}

export default signin
