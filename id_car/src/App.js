import { useState } from "react";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Web3 from "web3";
//import SignMessage from "./components/SignMessage/SignMessage";

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts()
    if (accounts.length === 0){
      console.log("Please conntect to Metamask!")
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  }

  return (
    <div className="App">
      <h1>ID Car</h1>
      <h2>Your car is YOUR car</h2>
      <div className="space"></div>
      <div className="big-div">
        <a href="/">{currentAccount}</a>
      </div>
      <div className="big-div">
        {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
        {isConnected && <Home currentAccount={currentAccount} />}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;