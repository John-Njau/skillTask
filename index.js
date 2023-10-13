// const skilledNavOptions = 0; // hidden
const skilledNav = document.querySelector(".menu-btn");
const skilledNavOptions = document.querySelector(".skilled-nav-options");
skilledNavOptions.style.display = "none";

skilledNav.addEventListener("click", () => {
  skilledNavOptions.style.display = "block";
});

skilledNav.addEventListener("blur", () => {
  skilledNavOptions.style.display = "none";
});

// radio button checking
const radioBtns = document.querySelectorAll(".form-input-sect");
const formImage = document.querySelector(".form-img");

radioBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const allRadioInputs = document.querySelectorAll(".form-input");
    const allFormImages = document.querySelectorAll(".form-img");
    allRadioInputs.forEach((input) => (input.style.opacity = 1));
    allFormImages.forEach((input) => (input.style.opacity = 0));

    button.children[0].style.opacity = 0;
    button.children[1].style.opacity = 1;
  });
});
