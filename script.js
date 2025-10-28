const boxes = document.querySelectorAll(".offer-box");
const totalDisplay = document.getElementById("total");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");

    const price = box.dataset.price;
    totalDisplay.textContent = `$${price}.00 USD`;
  });
});
