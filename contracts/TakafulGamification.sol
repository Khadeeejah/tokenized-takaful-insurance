// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TakafulGamification {
    struct Reward {
        uint256 rewardId;
        address user;
        uint256 points;
        bool redeemed;
    }

    address public admin;
    uint256 public rewardCounter;
    mapping(uint256 => Reward) public rewards;
    mapping(address => uint256) public userPoints;

    event RewardEarned(uint256 rewardId, address indexed user, uint256 points);
    event RewardRedeemed(uint256 rewardId, address indexed user, uint256 points);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function assignPoints(address user, uint256 points) public onlyAdmin {
        rewardCounter++;
        userPoints[user] += points;
        rewards[rewardCounter] = Reward(rewardCounter, user, points, false);
        emit RewardEarned(rewardCounter, user, points);
    }

    function redeemPoints(uint256 rewardId) public {
        require(rewards[rewardId].user == msg.sender, "Not your reward");
        require(rewards[rewardId].redeemed == false, "Reward already redeemed");

        rewards[rewardId].redeemed = true;
        userPoints[msg.sender] -= rewards[rewardId].points;
        emit RewardRedeemed(rewardId, msg.sender, rewards[rewardId].points);

        // Additional logic for redeeming the reward (e.g., transferring tokens, offering discounts, etc.)
    }

    function getUserPoints(address user) public view returns (uint256) {
        return userPoints[user];
    }
}
