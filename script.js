//your JS code here. If required.
function incrementCounter() {
      // Get the current counter value
      const counterElement = document.getElementById('counter');
      const currentCounterValue = parseInt(counterElement.textContent, 10);

      // Display the un-incremented value in an alert
      alert( currentCounterValue);

      // Increment the counter value and update the display
      counterElement.textContent = currentCounterValue + 1;
    }