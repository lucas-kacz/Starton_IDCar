pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";


contract Dealer is Ownable {

    event NewCar(uint carID, string vin_number, string model);

    struct Car{
        string vin_number;  //Serial number of the car : contains all the informations regarding the model/options/...
        string model;
    }

    Car[] public cars;

    address [] public addresses;

    mapping (uint => address) public carToOwner;
    mapping (address => uint) public ownerCarCount;

    /*address dealer = "0x77DbD1ddF6d9BfaB2aD5e76986A0628BB09B8Ae9";

    function _defineDealer (address _dealer)public onlyOwner returns(address){
        return _dealer;
    }*/
}