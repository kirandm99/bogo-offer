const boxes = document.querySelectorAll(".offer-box");
const totalDisplay = document.getElementById("total");

boxes.forEach((box) => {
  const radio = box.querySelector("input[type='radio']");

  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      b.classList.remove("active");
      b.querySelector("input[type='radio']").checked = false;
    });

    box.classList.add("active");
    radio.checked = true;

    const price = box.dataset.price;
    totalDisplay.textContent = `$${price}.00 USD`;
  });
});
