import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Navbar } from '../components';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { useAuth0 } from "@auth0/auth0-react";
import { FaChevronUp } from 'react-icons/fa';
import "../index.css";
const companyCommonStyles = "min-h-[100px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm ";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none white-glassmorphism"
  />
);


const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  
 const { loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
 
  

  const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

  return (
    <div className="flex w-full justify-center items-center">
    
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            {isAuthenticated && <p>Welcome {user.name}</p>}
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          
         
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-12 p-3 rounded-full cursor-pointer border-4 border-transparent hover:border-purple-900"
            >
              <AiFillPlayCircle className="mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
         

         <div className="mx-auto w-full"> 
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-5 ml-40">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="mx-auto w-full text-center">
          <div className="mt-5 ml-40">
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              <h2 className="font-semibold text-white text-lg mb-2">Crypto News</h2>
              <ul className="text-white">
                <li>
                  <span className="font-semibold">News 1:</span> Bitcoin Surges to New All-Time High
                  <p className="text-sm">In a surprising turn of events, Bitcoin reaches a new record high, surpassing previous milestones. Analysts attribute the surge to increased institutional interest and positive market sentiment.</p>
                </li>
                <li>
                  <span className="font-semibold">News 2:</span> Ethereum 2.0 Upgrade Successfully Implemented
                  <p className="text-sm">The long-awaited Ethereum 2.0 upgrade is now live, bringing scalability improvements and a shift to a proof-of-stake consensus. The crypto community celebrates the successful implementation of this major milestone.</p>
                </li>
                <li>
                  <span className="font-semibold">News 3:</span> Ripple Partners with Major Financial Institution
                  <p className="text-sm">Ripple announces a strategic partnership with a leading global financial institution, aiming to enhance cross-border payments. This collaboration is expected to bring significant advancements to the fintech industry.</p>
                </li>
                {/* Add more news items as needed */}
              </ul>
            </div>
          </div>
        </div>
        </div>
        
        
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          </div>
        <div className="fixed bottom-20 right-20 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110">
            <FaChevronUp onClick={ScrollToTop} />
        </div>
      </div>
  );
};

export default Welcome;
