import { useState } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Web3 from "web3";

function Connect() {

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
        <div className="Connect">
            <div className="space"></div>
            <div className="big-div">
                <a href="/">{currentAccount}</a>
            </div>
            <div className="flex">
                <h2>Espace Partenaires</h2>
                <h2>Espace Clients</h2>
            </div>
            <div className="cartes">
                <div className="carte c-left">
                    {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
                    {isConnected && <Home currentAccount={currentAccount} />}
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2"></div>
                    </div>
                </div>
                <div className="carte c-right">
                    {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
                    {isConnected && <Home currentAccount={currentAccount} />}
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;