
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}


/* CONTACT FORM FUNCTIONALITY */

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.display = "block";

        formMessage.style.color = "#267052";

        contactForm.reset();

    });

}
