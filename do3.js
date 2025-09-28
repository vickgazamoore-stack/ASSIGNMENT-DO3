// event.prevents stops refresh
function calculate(event) {
  event.preventDefault(); 

  let weight = Number(document.getElementById("weight").value);
  let destination = document.getElementById("destination").value;
  let expressDelivery = document.getElementById("express").checked;

  // making sure there is no negetive numeber
  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight greater than 0.");
    return;
  }

  //making sure that destination is inputted
  if (destination === "") {
    alert("Please select a destination.");
    return;
  }

  // Base cost includes first 5kg weight
  let baseCost = 4000; 
  let destinationFee = 0;
  let overweightFee = 0;
  let expressFee = 0;

  // Destination charges // no extra fee for aba
  if (destination === "aba") {
    destinationFee = 0; 
  } else if (destination === "bende") {
    destinationFee = 2000;
  } else if (destination === "ohafia") {
    destinationFee = 3000;
  } else if (destination === "ukwa-east") {
    destinationFee = 1000;
  } else if (destination === "ukwa-west") {
    destinationFee = 1500;
  } else if (destination === "umuahia") {
    destinationFee = 2500;
  }


  // Overweight: every 1kg above 5
  if (weight > 5) {
    let extraKg = weight - 5;
    overweightFee = extraKg * 50; 
  }

  // Subtotal before express
  let subtotal = baseCost + destinationFee + overweightFee;
  let totalCost = subtotal;

  // Apply express surcharge// mutiply by 1.5 // 
  if (expressDelivery) {
    totalCost = subtotal * 1.5;       
    expressFee = totalCost - subtotal; 
  }

  // Breakdown output
  let breakdownList = `
    <li>Base Cost (includes 5kg): ₦${baseCost}</li>
    <li>Destination Fee (${destination}): ₦${destinationFee}</li>
    <li>Overweight Fee (${weight > 5 ? weight - 5 : 0}kg) x ₦50 per kg: ₦${overweightFee}</li>
    <li>Express Fee: ₦${expressFee.toFixed(2)}</li>
  `;
  document.getElementById("breakdown").innerHTML = breakdownList;

  // Final total shown
  document.getElementById("total-amount").innerText = "₦" + totalCost.toFixed(2);
}
