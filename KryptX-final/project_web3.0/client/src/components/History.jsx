import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '.';
import axios from 'axios';
import '../assets/css/history.css';
import '../assets/css/background.css';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const loadTransactions = async () => {
      setLoading(true);

      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
          setAddress(accounts[0]);

          const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${accounts[0]}&startblock=0&endblock=99999999&sort=desc&apikey=YourApiKeyToken`; // Sort by 'desc' for the latest transactions first

          axios
            .get(url)
            .then((response) => {
              const sortedTransactions = response.data.result;
              setTransactions(sortedTransactions);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching transactions:', error);
              setLoading(false);
            });

          // Replace 'YourApiKeyToken' with your actual API key
          const balanceApiUrl = `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=${accounts[0]}&tag=latest&apikey=XB8ZNJA7UTCQBJZ5XKWETTXQW3D8AW3PKA`;

          axios
            .get(balanceApiUrl)
            .then((balanceResponse) => {
              // The balance is usually returned as wei, so convert it to ETH.
              const userBalance = balanceResponse.data.result / 10 ** 18;
              setBalance(userBalance);
            })
            .catch((balanceError) => {
              console.error('Error fetching user balance:', balanceError);
              setLoading(false);
            });
        });
      } else {
        console.error('MetaMask is not installed');
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  return (
    <div className="body-background custom-background">
      <div className="transactions-container">
        <Navbar />
        <div className="account-info">
          <div className="info-text">
            <h2 className="Thistory">Transaction History</h2>
            <p className="account-address">Account Address: {address}</p>
            <p className="account-balance">Account Balance: {balance} ETH</p>
          </div>
        </div>
        <div className="table-background">
          <table className="table-container">
            <thead>
              <tr>
                <th>Hash</th>
                <th>From</th>
                <th>To</th>
                <th>Value (ETH)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.hash}>
                  <td>{transaction?.hash.substring(0, 10) + '...' + transaction?.hash.substring(55, 66)}</td>
                  <td>{transaction.from}</td>
                  <td>{transaction.to}</td>
                  <td>{parseFloat(transaction.value) / 10 ** 18}</td>
                  <td>{new Date(transaction.timeStamp * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
