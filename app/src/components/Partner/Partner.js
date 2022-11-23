import { ethers } from "ethers";
import { useState } from "react";

const Partner = props => {

    const [partnerConnected, setPartnerConnected] = useState(false);
    const [partnerData, setPartnerData] = useState("");
    const [carData, setCarData] = useState("");
    const [contract, setContract] = useState();

    const connectContractDealer = async() => {
        setPartnerConnected(true);
        document.getElementById("c-left").style.width = "100%";
        document.getElementById("c-right").style.width = "0%";
        document.getElementById("flex").style.width = "200%";
        document.getElementById("flex").style.marginLeft = "0%";
        const Address = "0xe45275861868d38686341632AEFef5E2183Cd7eD";
        const ABI = [
            {
              "type": "constructor",
              "inputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "Approval",
              "type": "event",
              "inputs": [
                {
                  "name": "owner",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "approved",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "indexed": true,
                  "internalType": "uint256"
                }
              ],
              "anonymous": false
            },
            {
              "name": "ApprovalForAll",
              "type": "event",
              "inputs": [
                {
                  "name": "owner",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "operator",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "approved",
                  "type": "bool",
                  "indexed": false,
                  "internalType": "bool"
                }
              ],
              "anonymous": false
            },
            {
              "name": "NewCar",
              "type": "event",
              "inputs": [
                {
                  "name": "carID",
                  "type": "uint256",
                  "indexed": false,
                  "internalType": "uint256"
                },
                {
                  "name": "vin_number",
                  "type": "string",
                  "indexed": false,
                  "internalType": "string"
                },
                {
                  "name": "model",
                  "type": "string",
                  "indexed": false,
                  "internalType": "string"
                }
              ],
              "anonymous": false
            },
            {
              "name": "OwnershipTransferred",
              "type": "event",
              "inputs": [
                {
                  "name": "previousOwner",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "newOwner",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                }
              ],
              "anonymous": false
            },
            {
              "name": "Transfer",
              "type": "event",
              "inputs": [
                {
                  "name": "from",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "to",
                  "type": "address",
                  "indexed": true,
                  "internalType": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "indexed": true,
                  "internalType": "uint256"
                }
              ],
              "anonymous": false
            },
            {
              "name": "_createCar",
              "type": "function",
              "inputs": [
                {
                  "name": "_vin_number",
                  "type": "string",
                  "internalType": "string"
                },
                {
                  "name": "_model",
                  "type": "string",
                  "internalType": "string"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "approve",
              "type": "function",
              "inputs": [
                {
                  "name": "_to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "_tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "balanceOf",
              "type": "function",
              "inputs": [
                {
                  "name": "_owner",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "outputs": [
                {
                  "name": "_balance",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "carToOwner",
              "type": "function",
              "inputs": [
                {
                  "name": "",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "cars",
              "type": "function",
              "inputs": [
                {
                  "name": "",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [
                {
                  "name": "vin_number",
                  "type": "string",
                  "internalType": "string"
                },
                {
                  "name": "model",
                  "type": "string",
                  "internalType": "string"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "getApproved",
              "type": "function",
              "inputs": [
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "isApprovedForAll",
              "type": "function",
              "inputs": [
                {
                  "name": "owner",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "operator",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "bool",
                  "internalType": "bool"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "name",
              "type": "function",
              "inputs": [],
              "outputs": [
                {
                  "name": "",
                  "type": "string",
                  "internalType": "string"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "owner",
              "type": "function",
              "inputs": [],
              "outputs": [
                {
                  "name": "",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "ownerCarCount",
              "type": "function",
              "inputs": [
                {
                  "name": "",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "ownerOf",
              "type": "function",
              "inputs": [
                {
                  "name": "_tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [
                {
                  "name": "_owner",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "renounceOwnership",
              "type": "function",
              "inputs": [],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "safeTransferFrom",
              "type": "function",
              "inputs": [
                {
                  "name": "from",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "safeTransferFrom",
              "type": "function",
              "inputs": [
                {
                  "name": "from",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes",
                  "internalType": "bytes"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "setApprovalForAll",
              "type": "function",
              "inputs": [
                {
                  "name": "operator",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "approved",
                  "type": "bool",
                  "internalType": "bool"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "supportsInterface",
              "type": "function",
              "inputs": [
                {
                  "name": "interfaceId",
                  "type": "bytes4",
                  "internalType": "bytes4"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "bool",
                  "internalType": "bool"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "symbol",
              "type": "function",
              "inputs": [],
              "outputs": [
                {
                  "name": "",
                  "type": "string",
                  "internalType": "string"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "takeOwnership",
              "type": "function",
              "inputs": [
                {
                  "name": "_tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "tokenURI",
              "type": "function",
              "inputs": [
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [
                {
                  "name": "",
                  "type": "string",
                  "internalType": "string"
                }
              ],
              "stateMutability": "view"
            },
            {
              "name": "transfer",
              "type": "function",
              "inputs": [
                {
                  "name": "_to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "_tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "transferFrom",
              "type": "function",
              "inputs": [
                {
                  "name": "from",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "to",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenId",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            },
            {
              "name": "transferOwnership",
              "type": "function",
              "inputs": [
                {
                  "name": "newOwner",
                  "type": "address",
                  "internalType": "address"
                }
              ],
              "outputs": [],
              "stateMutability": "nonpayable"
            }
          ];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setContract(new ethers.Contract(Address, ABI, signer));
    }

    const getData = async () => {
        var carID = document.getElementById("carID").value;
        const phrase = await contract.carToOwner(carID);
        setPartnerData(phrase);
    }

    const setCar = async () => {
        var vinNumber = document.getElementById("vinNumber").value;
        var model = document.getElementById("model").value;
        console.log(vinNumber);
        console.log(model);
        const phrase = await contract._createCar(vinNumber, model);
        setCarData(phrase);
    }

    return (
        <div className="div">
            {!partnerConnected && 
                <div className="div">
                    <p>{}</p>
                    <button className="button" onClick={connectContractDealer}>Je suis un concessionaire</button>
                </div>
            }
            {partnerConnected && 
                <div className="div block">
                    <input type="number" placeholder="Enter the car ID" className="w250" id="carID"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={getData}>Get client address</button>
                    <div className="space"></div>
                    <code className="big-font">{partnerData}</code>
                    <div className="space"></div>
                    <input type="text" placeholder="Enter the vin number" className="w250" id="vinNumber"></input>
                    <div className="space"></div>
                    <input type="text" placeholder="Enter the model" className="w250" id="model"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={setCar}>Create a new car</button>
                    <div className="space"></div>
                    <code className="big-font">{carData}</code>
                </div>
            }
        </div>
    );
};

export default Partner;