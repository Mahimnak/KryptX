import React from 'react';
import '../assets/css/FAQ.css';
import { Navbar, Footer } from '../components';
const faqData = [
    {
        question: 'What is cryptocurrency?',
        answer: 'Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. It operates on a decentralized technology called blockchain, making it secure and transparent.'
      },
      {
        question: 'How can I buy cryptocurrencies?',
        answer: 'You can buy cryptocurrencies through cryptocurrency exchanges. First, create an account on a reputable exchange, then deposit funds and start trading.'
      },
      {
        question: 'Are cryptocurrencies legal?',
        answer: 'The legal status of cryptocurrencies varies by country. Some countries have embraced them, while others have imposed restrictions or bans.'
      },
      // Add more question and answer pairs here
      {
        question: 'What is blockchain technology?',
        answer: 'Blockchain is a decentralized and distributed ledger technology used to record transactions across multiple computers. It provides transparency and security.'
      },
      {
        question: 'How do I store my cryptocurrencies safely?',
        answer: 'Cryptocurrencies can be stored in digital wallets, either online (hot wallets) or offline (cold wallets). Cold wallets are more secure.'
      },
      {
        question: 'What is the difference between Bitcoin and Ethereum?',
        answer: 'Bitcoin is primarily a digital currency, while Ethereum is a platform for decentralized applications (smart contracts) in addition to its own cryptocurrency (Ether).'
      },
      {
        question: 'How can I protect my cryptocurrency investments from theft?',
        answer: 'Use strong, unique passwords, enable two-factor authentication, and consider hardware wallets for long-term storage. Be cautious of phishing scams.'
      },
      {
        question: 'What is a decentralized exchange (DEX)?',
        answer: 'A DEX is a cryptocurrency exchange that operates without a central authority. Users can trade directly from their wallets without the need for an intermediary.'
      },
      {
        question: 'Is it too late to invest in cryptocurrencies?',
        answer: 'Its never too late to invest in cryptocurrencies, but its essential to do thorough research and only invest what you can afford to lose.'
      },
      {
        question: 'What is an initial coin offering (ICO)?',
        answer: 'An ICO is a fundraising method where new cryptocurrencies are sold to investors. Its a way for projects to raise capital in exchange for tokens.'
      },
      {
        question: 'What is a cryptocurrency wallet address?',
        answer: 'A wallet address is a string of characters used to receive cryptocurrency. Its like your account number for a specific cryptocurrency.'
      },
      {
        question: 'What is a private key?',
        answer: 'A private key is a secret code that allows you to access and manage your cryptocurrency. It must be kept secure, as anyone with access can control your funds.'
      },
      {
        question: 'What is a public key?',
        answer: 'A public key is the counterpart to the private key and is used to create your wallet address. It can be shared openly for receiving funds.'
      },
      {
        question: 'What is a token in the cryptocurrency world?',
        answer: 'A token is a digital asset issued on a blockchain, often representing assets or utility within a specific project or platform.'
      },
      {
        question: 'How do I calculate capital gains on cryptocurrency investments?',
        answer: 'You may need to report and pay taxes on capital gains from cryptocurrency investments. Consult a tax professional or tax software for accurate calculations.'
      },
      {
        question: 'What is the difference between proof of work (PoW) and proof of stake (PoS) in blockchain consensus mechanisms?',
        answer: 'PoW involves miners solving complex mathematical puzzles to validate transactions, while PoS validators are chosen to create new blocks based on the amount of cryptocurrency they hold and are willing to "stake."'
      },
      {
        question: 'What is a hard fork in cryptocurrency?',
        answer: 'A hard fork is a significant and often contentious change in the rules of a cryptocurrencys blockchain, leading to two separate blockchains with different rules.'
      },
      {
        question: 'What is a soft fork in cryptocurrency?',
        answer: 'A soft fork is a less significant and backward-compatible change in the rules of a cryptocurrencys blockchain, where the updated software still recognizes the old rules.'
      },
];

function FAQ() {
  return (
    
<div className="gradient-bg-welcome">
<Navbar />
<div className='FAQhead'>Frequently Asked Question</div>
    <div className="faq-container">
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </div>
  );
}

export default FAQ;