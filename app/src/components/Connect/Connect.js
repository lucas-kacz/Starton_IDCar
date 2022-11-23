import { useState } from "react";
import Login from "../Login/Login";
import Partner from "../Partner/Partner";
import Client from "../Client/Client";
import Web3 from "web3";
import { ethers } from "ethers";

function Connect() {

    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);

    function init() {
        document.getElementById("c-left").style.width = "50%";
        document.getElementById("c-right").style.width = "50%";
        document.getElementById("flex").style.width = "100%";
        document.getElementById("flex").style.marginLeft = "0%";
    }

    return (
        <div>
            <div className="big-div">
                <Login />
            </div>
            <div className="div space"></div>
            <div className="div space"></div>
            <div id="flex">
                <h2 id="partner">Espace Partenaires</h2>
                <h2 id="client">Espace Clients</h2>
            </div>
            <div className="cartes">
                <div className="carte" id="c-left">
                    <Partner />
                </div>
                <div className="carte" id="c-right">
                    <Client />
                </div>
            </div>
            <div className="div space">
                <button className="button large" onClick={init}>Changer d'espace</button>
            </div>
        </div>
    );
};

export default Connect;