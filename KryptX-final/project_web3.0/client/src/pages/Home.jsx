import React from 'react'
import { Navbar, Welcome, Footer } from '../components'

const Home = () => {
    return (
        <>
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
            </div>
        </>
    )
}

export default Home
