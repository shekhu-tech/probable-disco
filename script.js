document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    // Form Submission
    document.querySelector("#contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("input[name='name']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const message = document.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "ONE.JPG",
        "TWO.jpg",
        "THREE.jpg"
    ];
    
    let index = 0;
    function changeBackground() {
        document.getElementById("home").style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }
    
 // ASSOCIATE PARTNERS

    changeBackground();
    setInterval(changeBackground, 3000); // Har 5 sec me change hoga
});
document.addEventListener("DOMContentLoaded", () => {
    const scrollingWrapper = document.querySelector(".scrolling-wrapper");

    function autoScroll() {
        scrollingWrapper.scrollBy({
            left: 1,
            behavior: 'smooth'
        });

        if (scrollingWrapper.scrollLeft + scrollingWrapper.clientWidth >= scrollingWrapper.scrollWidth) {
            scrollingWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }

    setInterval(autoScroll, 20); // Speed of scrolling (Lower value = Faster)
});

// AWARDS)

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Slide changes every 3 seconds
});
