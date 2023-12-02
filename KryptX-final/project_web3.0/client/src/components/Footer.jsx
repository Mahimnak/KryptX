import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
      <a href="/Home"><img src={logo} alt="logo" className="w-32 cursor-pointer" /></a>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a className="text-white text-base text-center mx-2 cursor-pointer" href="http://localhost:3000/coin">Market</a>
        <a className="text-white text-base text-center mx-2 cursor-pointer" href="http://localhost:3000/faq">Learn</a>
        <a className="text-white text-base text-center mx-2 cursor-pointer" href="http://localhost:3000/Transactions">Transactions</a>
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p> */}
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Crypto Trading Karni hai? Aa jao kara dunga!</p>
      <p className="text-white text-sm text-center font-medium mt-2">KryptX@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      
    </div>
  </div>
);

export default Footer;
