// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CarbonCreditMarketplace {
    address public admin;

    struct Organization {
        address orgAddress;
        string name;
        uint256 carbonCredits;
        bool isRegistered;
    }

    struct CreditOffer {
        address seller;
        uint256 amount;
        bool isAvailable;
    }

    mapping(address => Organization) public organizations;
    CreditOffer[] public creditOffers;

    event OrganizationRegistered(address indexed orgAddress, string name);
    event CarbonCreditsAssigned(address indexed orgAddress, uint256 amount);
    event CarbonCreditsOffered(address indexed seller, uint256 amount, uint256 offerId);
    event CarbonCreditsBought(address indexed buyer, address indexed seller, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyRegisteredOrganization() {
        require(organizations[msg.sender].isRegistered, "Only registered organizations can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerOrganization(address _orgAddress, string memory _name) public onlyAdmin {
        require(!organizations[_orgAddress].isRegistered, "Organization is already registered");

        organizations[_orgAddress] = Organization({
            orgAddress: _orgAddress,
            name: _name,
            carbonCredits: 0,
            isRegistered: true
        });

        emit OrganizationRegistered(_orgAddress, _name);
    }

    function assignCarbonCredits(address _orgAddress, uint256 _amount) public onlyAdmin {
        require(organizations[_orgAddress].isRegistered, "Organization is not registered");

        organizations[_orgAddress].carbonCredits += _amount;

        emit CarbonCreditsAssigned(_orgAddress, _amount);
    }

    function offerCarbonCredits(uint256 _amount) public onlyRegisteredOrganization {
        require(organizations[msg.sender].carbonCredits >= _amount, "Not enough carbon credits to offer");

        organizations[msg.sender].carbonCredits -= _amount;
        creditOffers.push(CreditOffer({
            seller: msg.sender,
            amount: _amount,
            isAvailable: true
        }));

        emit CarbonCreditsOffered(msg.sender, _amount, creditOffers.length - 1);
    }

    function buyCarbonCredits(uint256 _offerId) public onlyRegisteredOrganization {
        require(_offerId < creditOffers.length, "Invalid offer ID");
        require(creditOffers[_offerId].isAvailable, "Offer is not available");

        CreditOffer storage offer = creditOffers[_offerId];

        organizations[msg.sender].carbonCredits += offer.amount;
        offer.isAvailable = false;

        emit CarbonCreditsBought(msg.sender, offer.seller, offer.amount);
    }

    function getOrganizationDetails(address _orgAddress) public view returns (string memory name, uint256 carbonCredits, bool isRegistered) {
        Organization memory org = organizations[_orgAddress];
        return (org.name, org.carbonCredits, org.isRegistered);
    }

    function getAvailableOffers() public view returns (CreditOffer[] memory) {
        uint256 availableCount = 0;
        for (uint256 i = 0; i < creditOffers.length; i++) {
            if (creditOffers[i].isAvailable) {
                availableCount++;
            }
        }

        CreditOffer[] memory availableOffers = new CreditOffer[](availableCount);
        uint256 index = 0;
        for (uint256 i = 0; i < creditOffers.length; i++) {
            if (creditOffers[i].isAvailable) {
                availableOffers[index] = creditOffers[i];
                index++;
            }
        }

        return availableOffers;
    }
}
