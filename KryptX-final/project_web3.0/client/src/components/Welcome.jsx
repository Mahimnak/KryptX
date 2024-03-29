import React, { useContext, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Navbar } from '../components';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
// import { useAuth0 } from "@auth0/auth0-react";
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
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading , user , getUser} = useContext(TransactionContext);
  
//  const { loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
 
  // console.log("v",user);

  const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

  return (
    <div className="flex w-full justify-center items-center">
    
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            {/* {isAuthenticated && <p>Welcome {user.name}</p>} */}
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          
         
          {user && (
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
          {/* {!currentAccount && (
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
          )} */}
         
        <div className="mx-auto w-full"> 
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-[80px] ml-40">
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
        </div>
            
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-0 eth-card .white-glassmorphism ">
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
