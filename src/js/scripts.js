lucide.createIcons();
const optionRadios = document.querySelectorAll(".option > [type=radio]");
const options = document.querySelector("#options");
const optionsViewButton = document.querySelector("#options-view-button");
const selectedValue = document.querySelector("#selected-value");
optionRadios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    optionsViewButton.checked = false;
    const label = radio.parentElement.querySelector('span')
    selectedValue.innerHTML = label.textContent;
  });
});
