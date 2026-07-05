const cards = document.querySelectorAll(".gallery-card");

cards.forEach((card) => {
  card.addEventListener("pointerenter", () => {
    cards.forEach((item) => item.classList.toggle("is-active", item === card));
  });

  card.addEventListener("focus", () => {
    cards.forEach((item) => item.classList.toggle("is-active", item === card));
  });
});

document.addEventListener("pointerleave", () => {
  cards.forEach((item) => item.classList.remove("is-active"));
});
