import React, {useState} from 'react'

import Navbar from '../src/componentsLogged/Navbar'
import Footer from '../src/components/Footer'
import Home from '../src/componentsLogged/Home'
import Services from '../src/componentsLogged/Services'
import AboutCard from '../src/componentsLogged/AboutCard'


const Logged = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <AboutCard />
            <Footer />
        </>
    )
}
export default Logged