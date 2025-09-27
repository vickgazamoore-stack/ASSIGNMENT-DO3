function calculate(event) {
  event.preventDefault(); // stops form from refreshing

  let weight = Number(document.getElementById("weight").value);
  let destination = document.getElementById("destination").value;
  let expressDelivery = document.getElementById("express").checked;

  // checking the inputs to avoid nagetive number
  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight greater than 0.");
    return;
  }

  // making sure the destination is inputed
  if (destination === "") {
    alert("Please select a destination.");
    return;
  }

  // starting price
  let baseCost = 4000; 

  // Add cost based on destination
  if (destination === "aba") {
   // if the destination is in and around aba no extracharges
  } else if (destination === "bende") {
    baseCost += 2000;
  } else if (destination === "ohafia") {
    baseCost += 3000;
  } else if (destination === "ukwa-east") {
    baseCost += 1000;
  } else if (destination === "ukwa-west") {
    baseCost += 1500;
  } else if (destination === "umuahia") {
    baseCost += 2500;
  }

  // Overweight fee: every 1kg above 5kg
  if (weight > 5) {
    let extraKg = weight - 5;
    baseCost += extraKg * 50; 
  }

  // Apply extra charges for express delivery
  if (expressDelivery) {
    baseCost *= 1.5;
  }

  // Display result
  document.getElementById("total-amount").innerText = "₦" + baseCost.toFixed(2);
}
