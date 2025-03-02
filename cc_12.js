// Task 1: Creating a Revenue Metric Card
const dashboard = document.getElementById("dashboard"); // Select dashboard using getElementById
const dashboardAlt = document.querySelector("#dashboard"); // Select dashboard using querySelector

const revenueCard = document.createElement("div"); // Create new div for metric card
revenueCard.setAttribute("class", "metric-card"); // Assign class
revenueCard.setAttribute("id", "revenueCard"); // Assign ID
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"; // Populate with title and placeholder value
dashboard.appendChild(revenueCard); // Append to dashboard

// Task 2: Updating Metric Cards
const metricCards = document.querySelectorAll(".metric-card"); // Select all metric cards
const metricCardsArray = Array.from(metricCards); // Convert NodeList to Array

metricCardsArray.forEach(card => {
    card.innerHTML += " - Updated"; // Append text to each card
    card.style.backgroundColor = "#f0f0f0"; // Change background color
});

// Task 3: Dynamic Inventory Management
const inventoryList = document.getElementById("inventoryList"); // Select inventory list

function addProduct(productName) {
    const productItem = document.createElement("li"); // Create new list item
    productItem.setAttribute("class", "product-item"); // Assign class
    productItem.textContent = productName; // Set product name
    productItem.addEventListener("click", function() { // Add click event to remove
        inventoryList.removeChild(productItem);
    });
    inventoryList.appendChild(productItem); // Append to inventory list
}

// Example usage: addProduct("Laptop");