document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 300; // Adjust speed for animation

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-count");
    const increment = target / speed;

    const updateCount = () => {
      const currentCount = +counter.innerText;
      if (currentCount < target) {
        counter.innerText = Math.ceil(currentCount + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        counter.innerText = "0"; // Reset the counter value
        startCounting(counter);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  counters.forEach((counter) => observer.observe(counter));
});


  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const cards = document.querySelector('.cards');
  
  let scrollAmount = 0;
  const cardWidth = document.querySelector('.outer_card').offsetWidth + 32; // Include gap
  
  // Left arrow click functionality
  leftArrow.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    cards.style.transform = `translateX(-${scrollAmount}px)`;
  });
  
  // Right arrow click functionality
  rightArrow.addEventListener('click', () => {
    const maxScroll = cards.scrollWidth - cards.parentElement.offsetWidth;
    scrollAmount += cardWidth;
    if (scrollAmount > maxScroll) {
      scrollAmount = maxScroll;
    }
    cards.style.transform = `translateX(-${scrollAmount}px)`;
  });
  
  let autoScrollInterval;
  
  // Auto-scroll function
  function autoScroll() {
    const maxScroll = cards.scrollWidth - cards.parentElement.offsetWidth;
  
    autoScrollInterval = setInterval(() => {
      scrollAmount += cardWidth;
      if (scrollAmount > maxScroll) {
        scrollAmount = 0; // Reset to start when reaching the end
      }
      cards.style.transform = `translateX(-${scrollAmount}px)`;
    }, 2000); // Change cards every 2 seconds
  }
  
  // Stop auto-scroll
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  
  // Detect when the section is visible
  const section = document.querySelector('.carousel');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          autoScroll(); // Start auto-scroll when section comes into view
        } else {
          stopAutoScroll(); // Stop auto-scroll when the section is out of view
        }
      });
    },
    { threshold: 0.2 } // Trigger when 50% of the section is visible
  );
  
  observer.observe(section);
  
  // Pause auto-scroll on hover
  cards.addEventListener('mouseover', stopAutoScroll);
  
  // Resume auto-scroll when not hovering
  cards.addEventListener('mouseout', autoScroll);

  function isMobile() {
    return window.innerWidth <= 768; // Define mobile breakpoint
    stopAutoScroll
  }
  
  cards.addEventListener('touchstart', stopAutoScroll); // Stop auto-scroll on touch
cards.addEventListener('touchend', autoScroll); // Resume auto-scroll on touch end


  function showForm() {
    // Hide main content and show form
    document.getElementById("main-content").style.display = "none";
    document.getElementById("form-container").style.display = "block";
}

function goBack() {
    // Hide form and show main content
    document.getElementById("form-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}


// Include the latest EmailJS SDK
emailjs.init('XnotRJFmojCxVe0Lo'); // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Send email using the updated EmailJS SDK
  emailjs.send('service_dz4a8zm', 'template_8fwn5z8', {
    to_name: name,
    from_email: email,
    message: message,
  })
    .then(() => {
      alert('Email sent successfully!');
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      alert('Failed to send email. Please try again later.');
      console.error('Error:', error);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });

  alert("Form submitted successfully!");
});

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 1);  // Scroll just a bit to hide the address bar
  }, 500); // Give time for the page to load
};

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.body.style.paddingTop = '0'; // Remove padding-top if you used it for layout
  }
});


