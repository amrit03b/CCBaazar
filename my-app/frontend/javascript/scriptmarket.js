document.addEventListener("DOMContentLoaded", () => {
    const buyForm = document.getElementById("buy-form");
    const sellForm = document.getElementById("sell-form");
    const listingList = document.getElementById("listing-list");
    const transactionList = document.getElementById("transaction-list");

    let listings = [
        { id: 1, amount: 100, price: 50, sellerWallet: '0x12345...' },
        { id: 2, amount: 200, price: 45, sellerWallet: '0x67890...' },
        { id: 3, amount: 150, price: 48, sellerWallet: '0xABCDE...' },
    ];

    const transactions = [];

    function displayListings() {
        listingList.innerHTML = "";
        listings.forEach(listing => {
            const li = document.createElement("li");
            li.textContent = `Listing ID: ${listing.id}, Amount: ${listing.amount} credits, Price: $${listing.price} per credit, Seller Wallet: ${listing.sellerWallet}`;
            listingList.appendChild(li);
        });
    }

    function updateTransactionList() {
        transactionList.innerHTML = "";
        transactions.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = transaction;
            transactionList.appendChild(li);
        });
    }

    buyForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const listingId = parseInt(document.getElementById("listing-id").value);
        const wallet = document.getElementById("buyer-wallet").value;
        const listing = listings.find(listing => listing.id === listingId);
        
        if (listing && wallet) {
            const transaction = `Bought ${listing.amount} carbon credits from Listing ID ${listing.id} at $${listing.price} per credit with wallet address ${wallet}`;
            transactions.push(transaction);
            updateTransactionList();
            buyForm.reset();
        }
    });

    sellForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = parseInt(document.getElementById("sell-amount").value);
        const price = parseFloat(document.getElementById("sell-price").value);
        const wallet = document.getElementById("seller-wallet").value;
        
        if (amount && price && wallet) {
            const newId = listings.length ? listings[listings.length - 1].id + 1 : 1;
            const newListing = { id: newId, amount, price, sellerWallet: wallet };
            listings.push(newListing);
            displayListings();
            sellForm.reset();
        }
    });

    displayListings();
});
