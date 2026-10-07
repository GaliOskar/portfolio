const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

});

cards.forEach((card) => {
    observer.observe(card);
});

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = form.querySelector("button");

form.addEventListener("submit", async function(event) {

    // Stop browser from leaving the website
    event.preventDefault();

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            formStatus.textContent = "Message sent ✓";
            form.reset();

        } else {

            formStatus.textContent = "Something went wrong. Try again.";

        }

    } catch (error) {

        formStatus.textContent = "Something went wrong. Try again.";

    }

    submitButton.textContent = "Send Message →";
    submitButton.disabled = false;

});