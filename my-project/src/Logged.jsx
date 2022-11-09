import React, {useState} from 'react'

import NavbarLogged from '../src/components/NavbarLogged'
import FooterLogged from '../src/components/FooterLogged'
import Home from '../src/components/Home'
import Services from '../src/components/Services'
import AboutCard from '../src/components/AboutCard'

const Logged = () => {
    return (
        <>
            <NavbarLogged />
            <Home />
            <AboutCard />
            <Services />
            <FooterLogged />
        </>
    )
}
export default Logged