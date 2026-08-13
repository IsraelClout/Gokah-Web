/* ===============================
   GOKAH WEBSITE
   Main JavaScript
================================ */


/* ===============================
   MOBILE MENU
================================ */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

  const isOpen =
    mobileMenu.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


/* Close mobile menu after clicking */

const mobileLinks =
  mobileMenu.querySelectorAll("a");


mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* ===============================
   CURRENT YEAR
================================ */

const year =
  document.getElementById("year");

year.textContent =
  new Date().getFullYear();


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.08
    }

  );


revealElements.forEach((element) => {

  observer.observe(element);

});


/* ===============================
   SMOOTH PROJECT LINKS
================================ */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      function () {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* ===============================
   WHATSAPP
================================ */

const whatsappNumber =
  "233537254505";


function openWhatsApp(message) {

  const encodedMessage =
    encodeURIComponent(message);

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank"
  );

}


/* ===============================
   PAGE READY
================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "Gokah Website loaded successfully."
    );

  }
);
