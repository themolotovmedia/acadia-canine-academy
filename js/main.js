(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const interest = (data.get("interest") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();
      const lines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Interest: ${interest}`,
        "",
        message,
      ];
      const body = encodeURIComponent(lines.join("\n"));
      const subject = encodeURIComponent(`Acadia inquiry — ${interest || "General"}`);
      const to = form.getAttribute("data-mailto") || "";
      if (!to) return;
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
