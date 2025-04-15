// Image Slider Functionality
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Set the donation amount based on user selection or input
function setDonationAmount(amount) {
    // Ensure the amount is a valid number
    let donationAmount = parseFloat(amount);
    
    // Update the displayed donation amount
    if (!isNaN(donationAmount) && donationAmount > 0) {
      document.getElementById('total-amount').innerText = donationAmount;
      document.getElementById('custom-amount').value = donationAmount; // Set the input field to the selected amount
    } else {
      alert("Please enter a valid donation amount.");
    }
  }
  
  function processDonation() {
    const totalAmount = document.getElementById('total-amount').innerText;

    if (parseFloat(totalAmount) > 0) {
        // Redirect to the donation processing page with the amount as a query parameter
        window.location.href = `donate.php?amount=${totalAmount}`;
    } else {
        alert("Please select or enter a valid donation amount.");
    }
}