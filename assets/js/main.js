const phoneNumber = "919591904010";
const defaultMessage = "Hello Lee Comfort Kushalnagar, I would like to enquire about hotel room availability.";

function openWhatsApp(message) {
  if (typeof gtag === "function") {
    gtag("event", "booking_intent", {
      event_category: "lead",
      event_label: "whatsapp_click"
    });
  }
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "booking_intent", {
        event_category: "lead",
        event_label: "phone_click"
      });
    }
  });
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const customMessage = link.getAttribute("data-message");
    openWhatsApp(customMessage || defaultMessage);
  });
});

function parseDateInput(value) {
  if (!value) return null;
  // If YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const parts = value.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  // If DD-MM-YYYY
  if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
    const parts = value.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

document.querySelectorAll(".booking-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove any previous error message
    const existingError = form.querySelector(".form-error-msg");
    if (existingError) {
      existingError.remove();
    }

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const checkin = (data.get("checkin") || "").toString().trim();
    const checkout = (data.get("checkout") || "").toString().trim();
    const guests = (data.get("guests") || "").toString().trim();
    const room = (data.get("room") || "").toString().trim();
    const note = (data.get("note") || "").toString().trim();

    // Validation
    const errors = [];
    if (!name) {
      errors.push("Please enter your name.");
    }
    if (!checkin) {
      errors.push("Please select a check-in date.");
    }
    if (!checkout) {
      errors.push("Please select a check-out date.");
    }

    const dIn = parseDateInput(checkin);
    const dOut = parseDateInput(checkout);

    if (dIn && dOut) {
      if (dOut <= dIn) {
        errors.push("Check-out date must be after check-in date.");
      }
    } else if (checkin && checkout && (!dIn || !dOut)) {
      errors.push("Please enter valid dates.");
    }

    if (!guests) {
      errors.push("Please select the number of guests.");
    }

    if (errors.length > 0) {
      const errEl = document.createElement("div");
      errEl.className = "form-error-msg";
      errEl.setAttribute("role", "alert");
      errEl.style.color = "#b5162b";
      errEl.style.background = "#fff0f0";
      errEl.style.border = "1px solid #ffc8c8";
      errEl.style.borderRadius = "6px";
      errEl.style.padding = "10px 12px";
      errEl.style.marginBottom = "12px";
      errEl.style.fontSize = "0.85rem";
      errEl.style.lineHeight = "1.4";
      errEl.innerHTML = errors.map((e) => `<div>• ${e}</div>`).join("");
      form.insertBefore(errEl, form.firstChild);
      errEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }

    const messageLines = [
      "Hello Lee Comfort Kushalnagar,",
      "I would like to enquire about hotel room availability.",
      "",
      `Name: ${name}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Guests: ${guests}`,
      `Room Preference: ${room || "No Preference"}`,
      note ? `Special Request: ${note}` : "",
      "",
      "Please confirm room availability, the total price including applicable taxes and fees, and booking conditions.",
      "Thank you."
    ].filter((line, idx) => {
      // Keep empty line spacing where intended, filter empty conditional entries
      return line !== "" || idx === 2 || idx === 9;
    });

    openWhatsApp(messageLines.join("\n"));
  });
});

// Auto-format DD-MM-YYYY inputs if text inputs are used
document.querySelectorAll(".date-format").forEach((input) => {
  input.addEventListener("input", () => {
    const digits = input.value.replace(/\D/g, "").slice(0, 8);
    const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)].filter(Boolean);
    input.value = parts.join("-");
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
