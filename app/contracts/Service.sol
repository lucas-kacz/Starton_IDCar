pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./DealerOwnership.sol";



contract Service is DealerOwnership {

    event NewService(uint serviceID, uint carID, string description, bool result);

    struct Service{
        uint carID;
        string description;
        bool result;
    }

    Service[] public services;

    mapping (uint => uint) public serviceToCar;
    mapping (uint => address) public serviceToOwner;
    mapping (address => uint) public ownerServiceCount;

    function _createService (uint _carID, string memory _description, bool _result) public onlyOwner{
        services.push(Service(_carID, _description, _result));
        uint id = services.length -1;
        serviceToCar[id] = _carID;
        ownerServiceCount[msg.sender]++;
        emit NewService(id, _carID, _description, _result);
    }
}