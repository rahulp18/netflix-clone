import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import Container from '../components/Container/Container'
import Queries from '../components/Queries/Queries'
import Footer from '../components/Footer/Footer'
import HeadrContainer from '../components/header/header'
import HeaderContent from '../components/HeaderContent/HeaderContent'
 
const home = () => {
    return (
        <>  
            <HeadrContainer bg={true} dis={true} text='Sign In' >
               <HeaderContent/>
            </HeadrContainer>
            
             
            <Container jumboData={jumboData}/>
             <Queries/>
            <Footer/>
        </>
    )
}

export default home
