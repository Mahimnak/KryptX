import React, { useEffect, useState } from 'react'
import CoinItem from '../components/CoinItem'
import Coin from '../components/Coin'
import { Link } from 'react-router-dom'
import { Navbar, Footer} from '../components'
import '../Coins.css'
import '../assets/css/Coins.css'
import { FaChevronUp } from 'react-icons/fa';
// import '../public/styles.css'

const Coins = (props) => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };
    return (
        <div className="gradient-bg-welcome">
            <div className='container-fluid'>
                <Navbar/>
                {/* <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                    <tr>
                        <th>#</th>
                        <th className='col-3'>Coin</th>
                        <th>Price</th>
                        <th>Volume</th>
                        <th>Mkt. Cap</th>
                    </tr>
                </div> */}
                {props?.coins?.map((coins,index) => {
                    return (
                        <>
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                        </>
                    )
                })}
        </div>
        <div className="fixed bottom-20 right-20 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110">
            <FaChevronUp onClick={ScrollToTop} />
        </div>
        </div>

    )
}

export default Coins
