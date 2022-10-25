import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Application from './components/Application';
import AllInOne from './components/AllInOne';
import Prime from './components/Prime';
import Footer from './components/Footer';
import Login from './components/Sign_in';

function DefaultScreen() {
    return (
        <>
            <Navbar />
            <Hero />
            <Application />
            <About />
            <AllInOne />
            <Prime />
            <Footer />
        </>
    )
} 

export default DefaultScreen;