import houseToRent from "./houseToRent";
import createCard from "./createCard";

const cards = document.querySelector(".cards");
const searchInput = document.querySelector(".search-input");
const selector = document.querySelector(".select");
const availableCheckbox = document.querySelector(".available-checkbox");

// if (!houseToRent.every((rent) => rent.available)) {
//   alert("Hurry up! It's seems like some of our places are already taken!");
// }

const render = (array) => {
  cards.innerHTML = "";
  array.forEach((house) => {
    createCard(cards, house.name, house.img, house.desc);
  });
};

selector.addEventListener("change", (event) => {
  if (event.target.value === "All") {
    render(houseToRent);
  } else {
    render(houseToRent.filter((house) => house.type === event.target.value));
  }
});

searchInput.addEventListener("input", (event) => {
  render(
    houseToRent.filter((house) => house.name.includes(event.target.value))
  );
});

availableCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    render(houseToRent.filter((house) => house.available === true));
  } else {
    render(houseToRent);
  }
});

render(houseToRent);
