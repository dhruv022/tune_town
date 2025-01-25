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
  const cardWidth = document.querySelector('.outer_card').offsetWidth + 29; // Include gap
  
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
// template_8fwn5z8


// Include the latest EmailJS SDK
emailjs.init('XnotRJFmojCxVe0Lo'); // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("contact").value; // Fetch the phone number
  const message = document.getElementById("message").value;

  //  https://drive.google.com/file/d/1m7cfD4hNl2SJY-AT7HdMWSLdrj4vme10/view?usp=sharing


  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  // Email to the user (person who filled the form)
  const userEmailParams = {
    to_name: name,
    to_email: email,
    image_url: 'https://drive.google.com/uc?id=1m7cfD4hNl2SJY-AT7HdMWSLdrj4vme10',
    message: `Hi ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.`,
  };
  console.log(userEmailParams);

  // Email to the admin
  const adminEmailParams = {
    to_name: name, // Admin's name
    to_email: "dhruv0225@gmail.com", // Admin's email address
    image_url: 'https://drive.google.com/uc?id=1m7cfD4hNl2SJY-AT7HdMWSLdrj4vme10',
    message: `You have received a new inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };
  console.log(adminEmailParams);

  // Send email to the user
  emailjs.send('service_dz4a8zm', 'template_g1yuu9s', userEmailParams)
    .then(() => {
      console.log('Thank you email sent to user.');

      // Send email to the admin
      return emailjs.send('service_dz4a8zm', 'template_8fwn5z8', adminEmailParams);
    })
    .then(() => {
      alert('Emails sent successfully!');
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contact").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      alert('Failed to send emails. Please try again later.');
      console.error('Error:', error);
    });
});





// window.onload = function () {
//   setTimeout(function () {
//     window.scrollTo(0, 1);  // Scroll just a bit to hide the address bar
//   }, 500); // Give time for the page to load
// };

// window.addEventListener('scroll', function () {
//   if (window.scrollY > 50) {
//     document.body.style.paddingTop = '0'; // Remove padding-top if you used it for layout
//   }
// });

// function goFullscreen() {
//   if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//   } else if (document.documentElement.webkitRequestFullscreen) { // Safari
//       document.documentElement.webkitRequestFullscreen();
//   } else if (document.documentElement.msRequestFullscreen) { // IE11
//       document.documentElement.msRequestFullscreen();
//   }
// }

// goFullscreen();


function isMobileByScreenWidth() {
  return window.innerWidth <= 768; // Adjust the breakpoint as needed
}

if (isMobileByScreenWidth()){
  // goFullscreen();
}

// if (isMobileByScreenWidth() && false) {
//   // Your mobile-specific function

// let startY = 0;

// document.addEventListener("touchstart", (event) => {
//   startY = event.touches[0].clientY;
// });

// document.addEventListener("touchmove", (event) => {
//   const currentY = event.touches[0].clientY;
//   const header = document.querySelector("header");

//   if (currentY < startY) {
//     header.style.top = "-100px"; // Hide header on swipe up
//   } else {
//     header.style.top = "0"; // Show header on swipe down
//   }

//   startY = currentY; // Update start position
//   console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii")
// });


// document.addEventListener("wheel", (event) => {
//   const delta = event.deltaY; // Positive for scrolling down, negative for scrolling up
//   const header = document.querySelector("header");

//   if (delta > 0) {
//     header.style.top = "-100px"; // Hide header when "scrolling" down
//   } else {
//     header.style.top = "0"; // Show header when "scrolling" up
//   }
// });
// console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii")

// }

document.querySelectorAll('header a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector('header').offsetHeight;

      // Scroll to the target element with an offset for the navbar
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth', // Smooth scroll effect
      });
      console.log(`Scrolling to position: ${targetElement.offsetTop - navbarHeight}`);

      console.log(`Scrolled to ${targetId}`);
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  });
});

const navbarHeight = document.querySelector('header').offsetHeight;
console.log(`Navbar height: ${navbarHeight}`);





