pragma solidity ^0.8.9;

import "./Dealer.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DealerOwnership is Dealer, ERC721{

    constructor() ERC721("Dealer", "IDC") public { }

    function balanceOf(address _owner) public override view returns (uint256 _balance) {
        return ownerCarCount[_owner];
    }

    function ownerOf(uint256 _tokenId) public override view returns (address _owner) {
        return carToOwner[_tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal virtual override{  
        emit Transfer(_from, _to, _tokenId);
    }
    
    function transfer(address _to, uint256 _tokenId) public  {
        _transfer(msg.sender, _to, _tokenId);
    }

    /*
    function approve(address _to, uint256 _tokenId) public {

    }

    function takeOwnership(uint256 _tokenId) public {

    }
    */
    
    
}
