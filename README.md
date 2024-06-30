
# Carbon Baazar

This project is a decentralized platform where companies can buy and sell carbon credits. The smart contract for this project is written in Solidity and deployed on the Avalanche Fuji Testnet. The front-end is built using React.js, Node.js, and Thirdweb.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Register an Organization](#register-an-organization)
  - [Offer Carbon Credits](#offer-carbon-credits)
  - [Buy Carbon Credits](#buy-carbon-credits)
- [Smart Contract](#smart-contract)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MetaMask (or any other Web3 wallet)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/carbon-credit-marketplace.git
   cd carbon-credit-marketplace
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

```
carbon-credit-marketplace/
  ├── public/
  ├── src/
      ├── components/
          ├── BuyCredits.js
          ├── OfferCredits.js
          ├── RegisterOrganization.js
          ├── ThirdwebProvider.js
      ├── App.js
  ├── .env
  ├── package.json
  ├── README.md
  ├── webpack.config.js
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
REACT_APP_CONTRACT_ADDRESS=your_contract_address
```

## Running the Application

To start the development server, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Register an Organization

1. Open the application in the browser.
2. Navigate to the "Register Organization" section.
3. Enter the organization's address and name.
4. Click "Register".

### Offer Carbon Credits

1. Ensure the organization is registered.
2. Navigate to the "Offer Credits" section.
3. Enter the amount of carbon credits to offer.
4. Click "Offer".

### Buy Carbon Credits

1. Ensure the organization is registered.
2. Navigate to the "Buy Credits" section.
3. Enter the offer ID and the amount to buy.
4. Click "Buy".

## Smart Contract

The smart contract for this project is written in Solidity and deployed on the Avalanche Fuji Testnet.
#Contract Address = 0xd270ad6eE43BaE57e2E8936a665d570ED691fb53
It includes the following functionality:

- Register an organization
- Assign carbon credits to an organization
- Offer carbon credits for sale
- Buy carbon credits

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
