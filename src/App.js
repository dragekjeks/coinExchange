import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'
import {useMoralis} from "react-moralis";


function App() {

  const {authenticate, isAuthenticated, logout} = useMoralis();

  if(isAuthenticated){
    return(
    <div className="App">
      <header className="App-header">
        <a href="app.js">
          <img src="CharitableLogo.png" alt="Charitable logo" className="App-logo"></img>
        </a>
        <h1 className="App-title">
          Charitable
        </h1>
        <button onClick={() => logout()} className="connect-wallet">Logout</button>
      </header>
    </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href="app.js">
        <img src="CharitableLogo.png" alt="Charitable logo" className="App-logo"></img>
        </a>
        <h1 className="App-title">
          Charitable
        </h1>
        <button onClick={() => authenticate()} className="connect-wallet">Connect wallet</button>
      </header>
      <AccountBalance amount={10000}/>
      <table className="coin-table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={60000.99}/>
          <Coin name="Ethereum" ticker="ETH" price={3500.50}/>
          <Coin name="Tether" ticker="USDT" price={1.0}/>
          <Coin name="Ripple" ticker="XRP" price={1.5}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
