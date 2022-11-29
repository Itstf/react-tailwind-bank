import React, {useState} from 'react'

import NavbarLogged from '../src/components/NavbarLogged'
import FooterLogged from '../src/components/FooterLogged'
import Home from '../src/components/Home'
import Services from '../src/components/Services'
import User from '../src/components/User'

const Logged = () => {
    return (
        <>
            <NavbarLogged />
            <User />
            <Home />
            <Services />
            <FooterLogged />
        </>
    )
}
export default Logged