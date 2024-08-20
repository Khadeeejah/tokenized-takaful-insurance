
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TakafulToken is ERC20 {
    address public admin;

    constructor(uint256 initialSupply) ERC20("TakafulToken", "TKT") {
        _mint(msg.sender, initialSupply);
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function mint(address to, uint256 amount) public onlyAdmin {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyAdmin {
        _burn(from, amount);
    }
}
