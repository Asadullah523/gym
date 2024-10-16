
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById("calculate-cm"),
    calculateKg = document.getElementById("calculate-kg"),
    calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
    e.preventDefault();

    if (calculateCm.value === "" || calculateKg.value === "") {
        calculateMessage.classList.remove("color-green");
        calculateMessage.classList.add("color-red");

        calculateMessage.textContent = "Fill in the Height and Weight";
        setTimeout(() => {
            calculateMessage.textContent = "";
        }, 3000);
    } else {
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm));

        if (bmi < 18.5) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
        } else if (bmi < 25) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
        } else {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are obese`;
        }
        calculateCm.value = "";
        calculateCm.value = "";

        setTimeout(() => {
            calculateMessage.textContent = "";
        }, 4000);
    }
};
calculateForm.addEventListener("submit", calculateBmi);

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById("contact-form"),
//     contactMessage = document.getElementById("contact-message"),
//     contactUser = document.getElementById("contact-user");

// const sendEmail = (e) => {
//     e.preventDefault();
//     if (contactUser.value === "") {
//         contactMessage.classList.remove("color-green");
//         contactMessage.classList.add("color-red");
//         contactMessage.textContent = "You must enter your email";
//         setTimeout(() => {
//             contactMessage.textContent = "";
//         }, 3000);
//     } else {
//         //serviceID - templateID - #form -publicKey

//         emailjs.sendForm('service_grdzt7d','contact-form','template_zr449ac','#contact-form', 'sFsVX1clfNsVaz86c').then(
//             () => {
//                 contactMessage.classList.add("color-green");
//                 contactMessage.textContent = "You registered successfully ";

//                 setTimeout(() => {
//                     contactMessage.textContent = "";
//                 }, 3000);
//             },
//             (error) => {
//                 // Mail sending error
//                 alert("OOPS! SOMETHING HAS FAILED...", error);
//             }
//         );
//         // To clear input field
//         contactUser.value = "";
//     }
// };
// contactForm.addEventListener("submit", sendEmail);


        document.addEventListener('DOMContentLoaded', function () {
            // Get form elements
            const contactForm = document.getElementById("contact-form"),
                contactMessage = document.getElementById("contact-message"),
                contactUser = document.getElementById("contact-user");

            // Function to send the email
            const sendEmail = (e) => {
                e.preventDefault(); // Prevent default form submission

                // Check if the email input is empty
                if (contactUser.value === "") {
                    contactMessage.classList.remove("color-green");
                    contactMessage.classList.add("color-red");
                    contactMessage.textContent = "You must enter your email";

                    setTimeout(() => {
                        contactMessage.textContent = "";
                    }, 3000);
                } else {
                    // Send the form data using EmailJS
                    emailjs.sendForm('service_grdzt7d', 'template_0dom7iz', '#contact-form')
                        .then(() => {
                            contactMessage.classList.remove("color-red");
                            contactMessage.classList.add("color-green");
                            contactMessage.textContent = "You registered successfully!";

                            // Clear the message after 3 seconds
                            setTimeout(() => {
                                contactMessage.textContent = "";
                            }, 3000);

                            // Clear the input field
                            contactUser.value = "";
                        }, (error) => {
                            console.error("Failed to send email:", error);
                            contactMessage.classList.remove("color-green");
                            contactMessage.classList.add("color-red");
                            contactMessage.textContent = "OOPS! SOMETHING HAS FAILED...";

                            // Clear the message after 3 seconds
                            setTimeout(() => {
                                contactMessage.textContent = "";
                            }, 3000);
                        });
                }
            };

            // Add event listener to the form
            contactForm.addEventListener("submit", sendEmail);
        });
