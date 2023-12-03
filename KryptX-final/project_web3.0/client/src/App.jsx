import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// For ReacRouter starts here
import { Routes, Route } from 'react-router-dom'
// For ReacRouter end here
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Coins from "./pages/Coins";
import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import Chart from "./components/Chart";
import FAQ from "./components/FAQ";
import History from "./components/History";
import Exchange from "./components/Exchange";

const App = () => {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return(
      <>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/coin" element={<Coins coins={coins} />} />
            <Route path='/coin/:coinId' element={<Coin />} />
            <Route path="/History" element={<History />} />
            <Route path="/Exchange" element={<Exchange />} />
            <Route path="/charts" element={<Chart />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </>
  )
  }

export default App;
