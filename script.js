// Function to start the countdown timer
function startTimer() {
  // Get the selected event time
  var meetingTime = document.getElementById("meeting-time").value;
  if (!meetingTime) {
    alert("Please choose a time for your event.");
    return; // Exit if no time is selected
  }

  // Convert selected time into a JavaScript Date object
  var countDownDate = new Date(meetingTime).getTime();

  // Set interval to update countdown every second
  var x = setInterval(function() {
    // Get the current time
    var now = new Date().getTime();
    
    // Calculate time remaining
    var distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display countdown in HTML element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // When the countdown ends, display "EXPIRED", change background color, and trigger confetti
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
      document.body.style.backgroundColor = "red"; // Change background color to red when timer ends
      triggerConfettiEffect(); // Trigger the confetti effect
    }
  }, 1000);
}

// Function to trigger the confetti effect when the timer reaches zero
function triggerConfettiEffect() {
  var effectContainer = document.getElementById("effect-container");

  // Array of different colors for the confetti pieces
  var colors = ['#ff5733', '#33ff57', '#3357ff', '#f2ff33', '#ff33b5'];

  // Create confetti pieces
  for (var i = 0; i < 30; i++) {
    var confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");

    // Randomize the color of each confetti piece
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.backgroundColor = randomColor;

    // Randomly position the confetti pieces on the screen
    var randomX = Math.random() * 100 + "vw"; // Random horizontal position
    var randomY = Math.random() * 100 + "vh"; // Random vertical position

    confettiPiece.style.left = randomX;
    confettiPiece.style.top = randomY;

    // Append the confetti piece to the container
    effectContainer.appendChild(confettiPiece);

    // Remove the confetti piece after animation ends (8 seconds)
    setTimeout(function(piece) {
      piece.remove();
    }, 8000, confettiPiece);
  }
}
