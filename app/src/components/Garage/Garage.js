import { ethers } from "ethers";
import { useState } from "react";

function Garage() {

    const [garageConnected, setGarageConnected] = useState(false);
    const [garageData, setGarageData] = useState("");
    const [carData, setCarData] = useState("");
    const [contract, setContract] = useState();

    const connectContractDealer = async() => {
        setGarageConnected(true);
        document.getElementById("c-left").style.width = "0%";
        document.getElementById("c-center").style.width = "0%";
        document.getElementById("c-right").style.width = "100%";
        document.getElementById("flex").style.width = "300%";
        document.getElementById("flex").style.marginLeft = "-200%";
        const Address = "0xBBE73FEf27F4E26C3221B363fE3d08F50C750a3B";
        const ABI = [
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
                "name": "vin",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
              }
            ],
            "anonymous": false
          },
          {
            "name": "NewService",
            "type": "event",
            "inputs": [
              {
                "name": "serviceID",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
              },
              {
                "name": "carID",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
              },
              {
                "name": "vin",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "operation",
                "type": "string",
                "indexed": false,
                "internalType": "string"
              },
              {
                "name": "mileage",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
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
            "name": "Garages",
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
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "Partners",
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
                "type": "bool",
                "internalType": "bool"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "_createCar",
            "type": "function",
            "inputs": [
              {
                "name": "_vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_production_year",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "_address",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "_createService",
            "type": "function",
            "inputs": [
              {
                "name": "_carID",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "_vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_operation",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "_mileage",
                "type": "uint256",
                "internalType": "uint256"
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
            "name": "carApprovals",
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
                "name": "vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "contains_garage",
            "type": "function",
            "inputs": [
              {
                "name": "_garage",
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
            "name": "contains_partner",
            "type": "function",
            "inputs": [
              {
                "name": "_partner",
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
            "name": "garages",
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
            "name": "ownerOfVin",
            "type": "function",
            "inputs": [
              {
                "name": "_vin",
                "type": "string",
                "internalType": "string"
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
            "name": "ownerServiceCount",
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
            "name": "owners",
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
                "name": "vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "brand",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "model",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "color",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "production_year",
                "type": "uint256",
                "internalType": "uint256"
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
            "name": "serviceToCar",
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
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
          },
          {
            "name": "serviceToOwner",
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
            "name": "services",
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
                "name": "carID",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "vin",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "operation",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "mileage",
                "type": "uint256",
                "internalType": "uint256"
              }
            ],
            "stateMutability": "view"
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
            "name": "setGarage",
            "type": "function",
            "inputs": [
              {
                "name": "_garage",
                "type": "address",
                "internalType": "address"
              }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
          },
          {
            "name": "setPartner",
            "type": "function",
            "inputs": [
              {
                "name": "_partner",
                "type": "address",
                "internalType": "address"
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
          },
          {
            "name": "vinToOwner",
            "type": "function",
            "inputs": [
              {
                "name": "",
                "type": "string",
                "internalType": "string"
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
          }
        ];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setContract(new ethers.Contract(Address, ABI, signer));
    }

    const getData = async () => {
        var vin = document.getElementById("vin_g").value;//.toUpperCase();//.replace(/\s+/g, '-');
        const phrase = await contract.vinToOwner(vin);
        setGarageData(phrase);
    }

    const setService = async () => {
        var vinNumber = document.getElementById("vinNumber_g").value;//.toUpperCase();
        var address = document.getElementById("clientAddress_g").value;
        var operation = document.getElementById("operation").value;
        var mileage = document.getElementById("mileage").value;
        const phrase = await contract._createCar(vinNumber, operation, mileage, address);
        setCarData(phrase);
    }

    return (
        <div className="div">
            {!garageConnected && 
                <div className="div">
                    <button className="button" onClick={connectContractDealer}>I am a mechanic</button>
                </div>
            }
            {garageConnected && 
                <div className="div block">
                  <div className="part">
                    <input type="text" placeholder="Enter the vin number" maxLength="17" className="w250" id="vin_g"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={getData}>Get client address</button>
                    <div className="space"></div>
                    <code className="big-font">{garageData}</code>
                  </div>
                  <div className="space"></div>
                  <div className="part">
                    <input type="text" placeholder="Enter the Owner's address" maxLength="42" className="w500" id="clientAddress_g"></input>
                    <div className="space"></div>
                    <input type="text" placeholder="Enter the vin number" maxLength="17" className="w500" id="vinNumber_g"></input>
                    <div className="space"></div>
                    <select className="w250" id="operation">
                      <option value="select" defaultValue>Select the operation</option>
                      <option value="Check-up">Check-up</option>
                      <option value="Emptying">Emptying</option>
                      <option value="Repair">Repair</option>
                      <option value="Aesthetics">Aesthetics</option>
                    </select>
                    <span className="sp-space"></span>
                    <input type="number" placeholder="Enter the mileage" className="w250" min="0" max="500000" id="mileage"></input>
                    <div className="space"></div>
                    <button className="button w250" onClick={setService}>Create the service</button>
                    <div className="space"></div>
                    <code className="big-font">{carData}</code>
                  </div>
                </div>
            }
        </div>
    );
};

export default Garage;