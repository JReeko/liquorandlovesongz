document.addEventListener("DOMContentLoaded", function () {
  // Fix 2: Set the countdown date to July 19, 2024, at 3:00 PM
  const countdownDate = new Date("2024-07-19T15:00:00").getTime();

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Fix 3: Display the countdown in the new div
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Check if the countdown is over
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
});