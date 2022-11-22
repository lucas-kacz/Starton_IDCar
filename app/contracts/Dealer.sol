pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";



contract Dealer is Ownable {

    event NewCar(uint carID, string vin_number, string model);

    struct Car{
        string vin_number;  //Serial number of the car : contains all the informations regarding the model/options/...
        string model;
    }

    Car[] public cars;

    mapping (uint => address) public carToOwner;
    mapping (address => uint) public ownerCarCount;

    //address dealer = 

    function _defineDealer (address _dealer)public onlyOwner returns(address){
        return _dealer;
    }

    function _createCar(string memory _vin_number, string memory _model) public{
        //require(msg.sender == )
        cars.push(Car(_vin_number, _model));
        uint id = cars.length -1;
        emit NewCar(id, _vin_number, _model);
        //carToOwner[id] = msg.sender;
        //ownerCarCount[msg.sender]++;
    }
}