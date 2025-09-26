


function calculate(event) {
   event.preventDefault();  // stops form from refreshing

   let weight = Number(document.getElementById("weight").value);
   let destination = document.getElementById("destination").value;
   let expressDelivery = document.getElementById("express").checked;

   let baseCost = 40;  // starting price
   console.log("Start base cost:", baseCost);

   // Add cost based on destination
   if (destination === "aba") {
      baseCost += 10;
   } else if (destination === "bende") {
      baseCost += 25;
   } else if (destination === "ohafia") {
      baseCost += 35;
   } else if (destination === "ukwa-east") {
      baseCost += 15;
   } else if (destination === "ukwa-west") {
      baseCost += 20;
   } else if (destination === "umuahia") {
      baseCost += 30;
   }

   // Add overweight fee if weight > 5kg
   if (weight > 5) {
      baseCost += 15;
   }

   // Apply express surcharge
   if (expressDelivery) {
      baseCost *= 1.5;
   }

   // Display result
   document.getElementById("total-amount").innerText = "₦" + baseCost.toFixed(2);
   console.log(`The total shipping cost for your ${weight}kg package to ${destination} is ₦${baseCost}`);
}