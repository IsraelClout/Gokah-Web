"use strict";

/*
 * GOKAH WEBSITE
 * Frontend-only JavaScript
 *
 * Security:
 * - No API keys
 * - No passwords
 * - No secret credentials
 * - No private tokens
 * - No database credentials
 */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const backTop = document.getElementById("backTop");
  const year = document.getElementById("year");

  /* ================= YEAR ================= */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ================= MOBILE MENU ================= */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";

      });

    });

  }


  /* ================= BACK TO TOP ================= */

  const handleScroll = () => {

    if (!backTop) return;

    if (window.scrollY > 500) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }

  };

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  if (backTop) {

    backTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* ================= CURRENT YEAR ================= */

  handleScroll();

});
