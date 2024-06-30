document.addEventListener("DOMContentLoaded", () => {
    const orgForm = document.getElementById("organization-form");
    const orgStatsContainer = document.getElementById("org-stats");
    const orgTransactionList = document.getElementById("org-transaction-list");

    orgForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const wallet = document.getElementById("org-wallet").value;

        // Simulate fetching organization stats and transactions (replace with actual data retrieval)
        const stats = {
            carbonCredits: 500,
            transactions: [
                { id: 1, type: 'Buy', amount: 100, price: 50 },
                { id: 2, type: 'Sell', amount: 200, price: 45 },
                { id: 3, type: 'Buy', amount: 150, price: 48 },
            ]
        };

        displayOrganizationStats(stats);
    });

    function displayOrganizationStats(stats) {
        // Display carbon credit stats
        orgStatsContainer.innerHTML = `
            <p>Carbon Credits: ${stats.carbonCredits}</p>
        `;

        // Display past transactions
        orgTransactionList.innerHTML = "";
        stats.transactions.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = `Transaction ID ${transaction.id}: ${transaction.type} ${transaction.amount} credits at $${transaction.price} per credit`;
            orgTransactionList.appendChild(li);
        });
    }
});
