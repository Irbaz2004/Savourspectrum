document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addtocart");
  const cartTableBody = document.getElementById("carttable");
  const totalSpan = document.getElementById("total");
  let totalAmount = 0;
  let itemsQuantity = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      const productName = card.querySelector(".productname").innerText;
      const price = parseFloat(
        card.querySelector(".price").innerText.replace("₹", "")
      );
      totalAmount += price;
      itemsQuantity++;
      totalSpan.innerText = totalAmount.toFixed(2);
      document.getElementById("itemsquantity").innerText = itemsQuantity;
      console.log(totalAmount);
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${productName}</td>
          <td>₹${price.toFixed(2)}</td>
        `;
      cartTableBody.appendChild(newRow);
    });
  });

  document.getElementById("emptycart").addEventListener("click", function () {
    cartTableBody.innerHTML = "";
    totalAmount = 0;
    itemsQuantity = 0;
    totalSpan.innerText = "0.00";
    document.getElementById("itemsquantity").innerText = "0";
  });

  document.getElementById("checkout").addEventListener("click", function () {
    alert(`Your order is confirmed and amount is : ₹${totalAmount}`);
  });
  // alert()
  // console.log(totalAmount)
});

gsap.to("#veggievibe", {
  opacity: 1,
  duration: 1,
});

// Define ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 80%",
    onEnter: () => card.classList.add("is-visible"),
    onLeaveBack: () => card.classList.remove("is-visible"),
  });
});

// // Function to handle the search functionality
// function handleSearch() {
//   // Get the value entered in the search input
//   var searchQuery = document.getElementById('search').value.toLowerCase();

//   // Get all the menu items
//   var menuItems = document.querySelectorAll('.card');

//   // Loop through each menu item to check if it matches the search query
//   menuItems.forEach(function(item) {
//     var itemName = item.querySelector('.productname').textContent.toLowerCase();
//     if (itemName.includes(searchQuery)) {
//       // If the menu item matches the search query, display it
//       item.style.display = 'block';
//     } else {
//       // If the menu item doesn't match the search query, hide it
//       item.style.display = 'none';
//     }
//   });
// }
