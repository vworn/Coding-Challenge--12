// Task 1: Creating a Revenue Metric Card
const dashboard = document.getElementById("dashboard"); // Select dashboard using getElementById
const dashboardAlt = document.querySelector("#dashboard"); // Select dashboard using querySelector

const revenueCard = document.createElement("div"); // Create new div for metric card
revenueCard.setAttribute("class", "metric-card"); // Assign class
revenueCard.setAttribute("id", "revenueCard"); // Assign ID
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"; // Populate with title and placeholder value
dashboard.appendChild(revenueCard); // Append to dashboard