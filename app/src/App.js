import { useState } from "react";
import Connect from "./components/Connect/Connect";
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
  };

  const connectContract = async () => {
    const Address = "";
  }


  return (
    <div className="App">
      <div className="nav">
      </div>
      <div className="title_block">
        <h1>ID Car</h1>
      </div>
      <Connect></Connect>
      <div className="footer">
        <p>
          Created with <span className="heart" id="heart">♥</span> for the Online Web3 Starton Hackathon
          <br></br><br></br>
          Copyright ©IdCar - November 2022  
        </p>
      </div>
    </div>
  );
}

export default App;