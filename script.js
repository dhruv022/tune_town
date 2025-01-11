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
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounting(counter);
          observer.unobserve(counter); // Stop observing once counted
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    counters.forEach((counter) => observer.observe(counter));
  });
  