document.addEventListener("DOMContentLoaded", () => {
  // Certificate modals
  const certItems = document.querySelectorAll(".cert-item");
  const modals = document.querySelectorAll(".modal");

  certItems.forEach((item) => {
    const certId = item.getAttribute("data-cert");
    const modal = document.getElementById(`modal-${certId}`);

    if (!modal) return;

    item.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".modal-close");

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");
    });
  }
});
