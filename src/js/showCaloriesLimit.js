import { changeLimit, limit } from "./data";

const renderCaloriesLimit = () => {
  caloriesLimitBlock.querySelector("p").innerText = `${limit} калорий`;
};

const caloriesLimitBlock = document.querySelector(".calories_limit");

const showCaloriesLimit = (e) => {
  const button = caloriesLimitBlock.querySelector("button");
  const input = caloriesLimitBlock.querySelector("input");
  e.preventDefault();
  input.style.display = "none";
  caloriesLimitBlock.querySelector("p").style.display = "inline";
  button.removeEventListener("click", showCaloriesLimit);
  changeLimit(Number(input.value));
  localStorage.setItem("limit", limit);
  renderCaloriesLimit();
  button.addEventListener("click", showUpdateCalLimit);
};

const showUpdateCalLimit = (e) => {
  const button = caloriesLimitBlock.querySelector("button");
  e.preventDefault();
  caloriesLimitBlock.querySelector("input").style.display = "block";
  caloriesLimitBlock.querySelector("p").style.display = "none";
  button.removeEventListener("click", showUpdateCalLimit);
  button.addEventListener("click", showCaloriesLimit);
};

export { showCaloriesLimit, showUpdateCalLimit, renderCaloriesLimit };
