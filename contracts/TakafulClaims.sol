// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TakafulClaims {
    struct Claim {
        uint256 claimId;
        address claimant;
        uint256 amount;
        bool approved;
        bool processed;
    }

    address public admin;
    uint256 public claimCounter;
    mapping(uint256 => Claim) public claims;

    event ClaimSubmitted(uint256 claimId, address indexed claimant, uint256 amount);
    event ClaimApproved(uint256 claimId, address indexed claimant, uint256 amount);
    event ClaimDenied(uint256 claimId, address indexed claimant, uint256 amount);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function submitClaim(uint256 amount) public returns (uint256) {
        claimCounter++;
        claims[claimCounter] = Claim(claimCounter, msg.sender, amount, false, false);
        emit ClaimSubmitted(claimCounter, msg.sender, amount);
        return claimCounter;
    }

    function processClaim(uint256 claimId, bool approve) public onlyAdmin {
        require(claims[claimId].processed == false, "Claim already processed");
        
        claims[claimId].processed = true;
        claims[claimId].approved = approve;

        if (approve) {
            emit ClaimApproved(claimId, claims[claimId].claimant, claims[claimId].amount);
            // Transfer the approved amount to the claimant (This would be integrated with a payment system)
        } else {
            emit ClaimDenied(claimId, claims[claimId].claimant, claims[claimId].amount);
        }
    }
}
