import React from 'react'
import '../Coin.css'
import '../assets/css/Coin.css'
import Tooltip from "@material-ui/core/Tooltip";
// import '../public/styles.css'
const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <Tooltip title="Price">
                <p>${props.coins.current_price.toLocaleString()}</p>
            </Tooltip>

            <Tooltip title="24H">
                <p >{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            </Tooltip>
            
            <Tooltip title="Volume">
                <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
            </Tooltip>
            
            <Tooltip title="Mrkt. Cap">
                <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>   
            </Tooltip>
        </div>
    )
}

export default CoinItem
