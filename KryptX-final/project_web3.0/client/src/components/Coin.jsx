import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Navbar, Footer } from '../components';
import '../Coin.css';
import '../assets/css/Coin.css';
import Chart from './Chart';

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('usd'); // Default currency is USD
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  const apiCall = async () => {
    try {
      const response = await axios.get(`${url}?vs_currency=${selectedCurrency}`);
      setCoin(response.data);
    } catch (error) {
      console.error('Error fetching coin data: ', error);
    }
  };

  useEffect(() => {
    apiCall();
  }, [selectedCurrency, params.coinId]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        {/* Dropdown menu for currency selection */}
        <div className="content">
          <label htmlFor="currencySelect" className="currency-label">
            Select Currency:
          </label>
          <select
            id="currencySelect"
            onChange={handleCurrencyChange}
            value={selectedCurrency}
            className="currency-select"
          >
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          </select>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image && <img src={coin.image.small} style={{height: "100%", width:"100", padding:"10px"}} alt="" />}
              <p>{coin.name}</p>
              {coin.symbol && (
                <p>{coin.symbol.toUpperCase()}/{selectedCurrency.toUpperCase()}</p>
              )}
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price && (
                <h1>
                  {selectedCurrency === 'inr' ? '₹' : '$'}
                  {coin.market_data.current_price[selectedCurrency].toLocaleString()}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency[
                        selectedCurrency
                      ].toFixed(1)}
                      %
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h && (
                  <p>
                    {selectedCurrency === 'inr' ? '₹' : '$'}
                    {coin.market_data.low_24h[selectedCurrency].toLocaleString()}
                  </p>
                )}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h && (
                  <p>
                    {selectedCurrency === 'inr' ? '₹' : '$'}
                    {coin.market_data.high_24h[selectedCurrency].toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap && (
                  <p>
                    {selectedCurrency === 'inr' ? '₹' : '$'}
                    {coin.market_data.market_cap[selectedCurrency].toLocaleString()}
                  </p>
                )}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data && <p>{coin.market_data.circulating_supply}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <Chart coinId={params.coinId} selectedCurrency={selectedCurrency} />
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
              }}
            ></p>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Coin;
