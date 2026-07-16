/* =========================================================
   Serena Purslow — Portfolio Site behaviors
   ========================================================= */

// ---- EDIT ME: where the contact form should send messages ----
const CONTACT_EMAIL = "serena.purslow@theinformationlab.co.uk";

document.addEventListener("DOMContentLoaded", () => {
  initRevealOnScroll();
  initContactForm();
});

/* ---------- Fade-in on scroll ---------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- Contact form (mailto fallback — no backend on a static site) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || "Message from your portfolio site";
    const message = form.message.value.trim();

    const body = `${message}\n\n— ${firstName} ${lastName} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}
