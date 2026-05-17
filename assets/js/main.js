const phoneNumber = "919591904010";
const defaultMessage = "Hi Lee Comfort Kushalnagar, I want to check room availability.";

function openWhatsApp(message) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp(link.getAttribute("data-message"));
  });
});

document.querySelectorAll(".booking-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const guests = data.get("guests") || "";
    const checkin = data.get("checkin") || "";
    const checkout = data.get("checkout") || "";
    const room = data.get("room") || "";
    const note = data.get("note") || "";
    const message = [
      "Hi Lee Comfort Kushalnagar, I want to check room availability.",
      name ? `Name: ${name}` : "",
      guests ? `Guests: ${guests}` : "",
      checkin ? `Check-in: ${checkin}` : "",
      checkout ? `Check-out: ${checkout}` : "",
      room ? `Room type: ${room}` : "",
      note ? `Message: ${note}` : ""
    ].filter(Boolean).join("\n");
    openWhatsApp(message);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
