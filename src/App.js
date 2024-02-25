import React from 'react'
import Navbar from './components/Navbar'
import FeaturingCircle from './components/FeaturingCircle'
import TrustedBy from './components/TrustedBy'
import Footer from './components/Footer'
import AboutProduct from './components/AboutProduct'

const App = () => {
    return (
        <div className="">
            <Navbar />
            <FeaturingCircle />
            <TrustedBy />
            <AboutProduct />
            <Footer />
        </div>
    )
}

export default App