const contractAddress = '0xd270ad6eE43BaE57e2E8936a665d570ED691fb53'; // Replace with your contract address
const contractABI = [
    [
        {
          "type": "constructor",
          "name": "",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "event",
          "name": "CarbonCreditsAssigned",
          "inputs": [
            {
              "type": "address",
              "name": "orgAddress",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "amount",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "CarbonCreditsBought",
          "inputs": [
            {
              "type": "address",
              "name": "buyer",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "seller",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "amount",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "CarbonCreditsOffered",
          "inputs": [
            {
              "type": "address",
              "name": "seller",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "amount",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "offerId",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "OrganizationRegistered",
          "inputs": [
            {
              "type": "address",
              "name": "orgAddress",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "name",
              "indexed": false,
              "internalType": "string"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "function",
          "name": "admin",
          "inputs": [],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "assignCarbonCredits",
          "inputs": [
            {
              "type": "address",
              "name": "_orgAddress",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "_amount",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "buyCarbonCredits",
          "inputs": [
            {
              "type": "uint256",
              "name": "_offerId",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "creditOffers",
          "inputs": [
            {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "type": "address",
              "name": "seller",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "amount",
              "internalType": "uint256"
            },
            {
              "type": "bool",
              "name": "isAvailable",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getAvailableOffers",
          "inputs": [],
          "outputs": [
            {
              "type": "tuple[]",
              "name": "",
              "components": [
                {
                  "type": "address",
                  "name": "seller",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "amount",
                  "internalType": "uint256"
                },
                {
                  "type": "bool",
                  "name": "isAvailable",
                  "internalType": "bool"
                }
              ],
              "internalType": "struct CarbonCreditMarketplace.CreditOffer[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getOrganizationDetails",
          "inputs": [
            {
              "type": "address",
              "name": "_orgAddress",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "string",
              "name": "name",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "carbonCredits",
              "internalType": "uint256"
            },
            {
              "type": "bool",
              "name": "isRegistered",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "offerCarbonCredits",
          "inputs": [
            {
              "type": "uint256",
              "name": "_amount",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "organizations",
          "inputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "address",
              "name": "orgAddress",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "name",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "carbonCredits",
              "internalType": "uint256"
            },
            {
              "type": "bool",
              "name": "isRegistered",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "registerOrganization",
          "inputs": [
            {
              "type": "address",
              "name": "_orgAddress",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "_name",
              "internalType": "string"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        }
      ]
];

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const web3 = new Web3(window.ethereum);
        
        document.getElementById('connectWallet').addEventListener('click', async () => {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Wallet connected');
                document.getElementById('walletStatus').textContent = 'Wallet connected';
            } catch (error) {
                console.error('User denied account access', error);
            }
        });

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        document.getElementById('registerOrg').addEventListener('click', async () => {
            const orgAddress = document.getElementById('orgAddress').value;
            const orgName = document.getElementById('orgName').value;

            try {
                await contract.methods.registerOrganization(orgAddress, orgName).send({ from: web3.eth.defaultAccount });
                alert('Organization registered successfully!');
            } catch (error) {
                console.error('Error registering organization', error);
                alert('Error registering organization');
            }
        });

        document.getElementById('assignCredits').addEventListener('click', async () => {
            const assignOrgAddress = document.getElementById('assignOrgAddress').value;
            const assignAmount = document.getElementById('assignAmount').value;

            try {
                await contract.methods.assignCarbonCredits(assignOrgAddress, assignAmount).send({ from: web3.eth.defaultAccount });
                alert('Carbon credits assigned successfully!');
            } catch (error) {
                console.error('Error assigning carbon credits', error);
                alert('Error assigning carbon credits');
            }
        });

        // Fetch and display available offers
        const offerListElement = document.getElementById('offerList');

        async function fetchOffers() {
            const offers = await contract.methods.getAvailableOffers().call();
            offers.forEach((offer, index) => {
                const li = document.createElement('li');
                li.textContent = `Offer ID: ${index}, Seller: ${offer.seller}, Amount: ${offer.amount}`;
                offerListElement.appendChild(li);
            });
        }

        fetchOffers(); // Fetch offers initially

    } else {
        console.log('MetaMask is not installed. Please install it to use this app.');
    }
});
