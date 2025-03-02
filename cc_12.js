// task 1
const dashboardId = document.getElementById("dashboard"); // id
const dashboardQuery = document.querySelector("#dashboard"); // querySelector

// creating div element
const revenueCard = document.createElement("div"); // div element

// setting attributes
revenueCard.setAttribute("class", "metric-card"); // class atr
revenueCard.setAttribute("id", "revenue-card"); // id atr

// popluating the card
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
  `;

// appending new card
dashboardId.appendChild(revenueCard);

// task 2
const metricCards = document.querySelectorAll(".metric-card");

// converting it into an array
const metricCardsArray = [...metricCards];

// updating each cards inner text
metricCardsArray.forEach(card => {
  card.innerText += ' - Updated';
  card.style.backgroundColor = 'orange'; // Adding a background color
});

// task 3
function addProductItem(productName) {
  const inventoryList = document.getElementById("inventoryList");
  const newProductItem = document.createElement("li");

  newProductItem.setAttribute("class", "product-item");
  newProductItem.setAttribute("data-product", productName);
  newProductItem.innerText = productName;

  // adding a click event to removes items when selected
  newProductItem.addEventListener("click", () => {
    removeProductItem(newProductItem);
  });

  inventoryList.appendChild(newProductItem);
};

// function for removing roduct items
function removeProductItem(item) {
  const inventoryList = document.getElementById("inventoryList");
  inventoryList.removeChild(item);
};

// added event listener to "add product" button
document.getElementById("addProductButton").addEventListener("click", () => {
  addProductItem("New Product");
})
//adding products as examples
addProductItem("Nintendo Switch");
addProductItem("Gamecube");

// task 4
const customerSection = document.getElementById("customerSection");
// adding a click event listener
customerSection.addEventListener("click", () => {
  console.log("Has been selected");
});

const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
  card.style.backgroundColor = "purple";
  card.addEventListener("click", (event) => {
    console.log("Has been selected");
    event.stopPropagation();
  });
});