let balance = 4000;
let total = 0;
let cart = [];

const balanceEl = document.getElementById("balance");
const totalEl = document.getElementById("total");
const cartList = document.getElementById("cart-items");

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${entry.item} — AED ${entry.price} </span>
      <button class="secondary" onclick="removeItem(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });
  totalEl.textContent = total;
  balanceEl.textContent = balance;
}

function addToCart(item, price) {
  if (total + price > balance) {
    alert("Oops! That goes over your Wallet Balance. Try removing something or pick a cheaper item.");
    return;
  }
  cart.push({ item, price });
  total += price;
  renderCart();
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function clearCart() {
  cart = [];
  total = 0;
  renderCart();
}

function mathQuiz() {
  // Simple randomized addition quiz
  const a = Math.floor(Math.random() * 5) + 3;  // 3–7
  const b = Math.floor(Math.random() * 5) + 2;  // 2–6
  const answer = prompt(`Quick quiz: What is ${a} + ${b}?`);
  if (answer === null) return false;
  const num = Number(answer);
  return num === a + b;
}

function checkout() {
  if (total === 0) {
    alert("Your cart is empty. Add something fun!");
    return;
  }
  const ok = mathQuiz();
  if (!ok) {
    alert("Nice try! Let's review and try the quiz again.");
    return;
  }
  alert(`🎉 Great job! You spent ${total} AED and stayed on budget!`);
  clearCart();
}

// Initial render
renderCart();

