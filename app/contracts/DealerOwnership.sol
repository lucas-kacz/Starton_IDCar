pragma solidity ^0.8.9;

import "./Dealer.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract DealerOwnership is Dealer, ERC721{

    constructor() ERC721("Dealer", "IDC") public { }

    mapping(uint => address) carApprovals;

    function add_concess(address _address)public onlyOwner{
        addresses.push(_address);
    }

    function liste_concess() public returns(address [] memory){
        return addresses;
    }

    function balanceOf(address _owner) public override view returns (uint256 _balance) {
        return ownerCarCount[_owner];
    }

    function ownerOf(uint256 _tokenId) public override view returns (address _owner) {
        return carToOwner[_tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal virtual override{
        ownerCarCount[_to]++;
        ownerCarCount[_from]--;
        carToOwner[_tokenId] = _to;  
        emit Transfer(_from, _to, _tokenId);
    }
    
    function transfer(address _to, uint256 _tokenId) public  {
        address temp = 0x0000000000000000000000000000000000000000;
        require(carToOwner[_tokenId] != temp);
        _transfer(msg.sender, _to, _tokenId);
    }

    
    function approve(address _to, uint256 _tokenId) public override {
        carApprovals[_tokenId] = _to;
        emit Approval(msg.sender, _to, _tokenId);
    }

    function takeOwnership(uint256 _tokenId) public {
        require(carApprovals[_tokenId] == msg.sender);
        address owner = ownerOf(_tokenId);
        _transfer(owner, msg.sender, _tokenId);
    }
    
    function transferOwnership(address newOwner) public override virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }
}