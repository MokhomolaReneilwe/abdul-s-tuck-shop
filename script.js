// Home page contact message
function showWelcomeMessage() {
  alert("Welcome to our site! Browse and enjoy.");
}

// Order form validation
function validateOrderForm() {
  let name = document.getElementById("name").value;
  let item = document.getElementById("item").value;
  let quantity = document.getElementById("quantity").value;

  if (name === "" || item === "" || quantity === "") {
    alert("Please fill in all the fields.");
    return false;
  }

  if (quantity <= 0) {
    alert("Quantity must be more than 0.");
    return false;
  }

  return true;
}

// Calculate total price
function calculateTotal(item, quantity) {
  let prices = {
    Bread: 12.99,
    Eggs: 30.00,
    Milk: 19.99,
    Flour: 67.00,
    Sugar: 37.99
  };

  let price = prices[item];

  if (!price) {
    document.getElementById("totalMessage").innerText = "❌ Please select a valid item.";
    return;
  }

  if (!quantity || quantity <= 0) {
    document.getElementById("totalMessage").innerText = "❌ Please enter a valid quantity.";
    return;
  }

  let subtotal = price * quantity;
  let vatRate = 0.15;
  let vatAmount = subtotal * vatRate;
  let totalWithVAT = subtotal + vatAmount;

  let message = `
    🛒 <strong>Order Summary</strong><br>
    Item: ${item}<br>
    Quantity: ${quantity}<br>
    Unit Price: R${price.toFixed(2)}<br>
    Subtotal: R${subtotal.toFixed(2)}<br>
    VAT (15%): R${vatAmount.toFixed(2)}<br>
    <hr>
    <strong>Total (incl. VAT): R${totalWithVAT.toFixed(2)}</strong><br>
    ✅ Thank you for shopping with Abdul's Tuck Shop!
  `;

  document.getElementById("totalMessage").innerHTML = message;
}
 

// Contact form message
function submitContactForm() {
  let name = document.getElementById("contactName").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Thank you " + name + "! Your message has been sent.");
  return true;
}