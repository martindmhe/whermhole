// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CharityTracker {
    struct Donation {
        address donor;
        uint amount;
        uint timestamp;
    }

    address public owner;
    mapping(address => Donation[]) public donations;

    event DonationReceived(address indexed donor, uint amount, uint timestamp);

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        
        Donation memory newDonation = Donation({
            donor: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp
        });

        donations[msg.sender].push(newDonation);

        emit DonationReceived(msg.sender, msg.value, block.timestamp);
    }

    function getDonations(address donor) public view returns (Donation[] memory) {
        return donations[donor];
    }

    function withdraw(uint amount) public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(amount);
    }

    receive() external payable {
        donate();
    }
}
