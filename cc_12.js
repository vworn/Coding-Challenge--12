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
