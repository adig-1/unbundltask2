const chocolates = [
  { name: "Chocolate 1", price: 22 },
  { name: "Chocolate 2", price: 31 },
  { name: "Chocolate 3", price: 50 },
  { name: "Chocolate 4", price: 73 },
  { name: "Chocolate 5", price: 5 },
  { name: "Chocolate 6", price: 98 },
  { name: "Chocolate 7", price: 35 },
  { name: "Chocolate 8", price: 27 },
  { name: "Chocolate 9", price: 25 },
  { name: "Chocolate 10", price: 73 },
  { name: "Chocolate 11", price: 35 },
  { name: "Chocolate 12", price: 27 },

];

const checkboxes = document.querySelectorAll('input[name="chocolate"]');
const selectedChocolates = document.querySelector(".selected-chocolates");
const totalPrice = document.getElementById("total-price");

let selectedItems = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      if (selectedItems.length < 8) {
        const selectedChocolate = chocolates.find(
          (chocolate) => chocolate.name === this.value
        );
        selectedItems.push(selectedChocolate);
        updateSelection();
      } else {
        this.checked = false; 
        alert("You can select a maximum of 8 chocolates.");
      }
    } else {
      const indexToRemove = selectedItems.findIndex(
        (item) => item.name === this.value
      );
      selectedItems.splice(indexToRemove, 1);
      updateSelection();
    }
  });
});

function updateSelection() {
  selectedChocolates.innerHTML = "";
  let total = 0;
  selectedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    selectedChocolates.appendChild(listItem);
    total += item.price;
  });
  totalPrice.textContent = total.toFixed(2);
}
