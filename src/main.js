import "./style.css";
import renderProductList from "./js/renderProductList";
import renderDayList from "./js/renderDayList";
import renderAllDays from "./js/renderAllDays";
import renderGraph from "./js/renderGraph";
import {
  showUpdateCalLimit,
  renderCaloriesLimit,
} from "./js/showCaloriesLimit";
import {
  products,
  day,
  currentDay,
  allDays,
  limit,
  changeDay,
  changeCurrentDay,
  changeSort,
  changeProductName,
} from "./js/data";
import { checkStorage } from "./js/data";

checkStorage();

renderProductList();

renderDayList();

const addProductBtn = document.querySelector("#add_product_button");
addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let product = { name: "", calories: "" };
  document
    .querySelector(".product_add")
    .querySelectorAll("input")
    .forEach((input, index) => {
      if (index === 0) {
        product.name = input.value;
      }
      if (index === 1) {
        product.calories = Number(input.value);
      }
    });
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  renderProductList();
});

const caloriesLimitBlock = document.querySelector(".calories_limit");

caloriesLimitBlock
  .querySelector("button")
  .addEventListener("click", showUpdateCalLimit);

renderCaloriesLimit();

renderAllDays();

document
  .querySelector(".day_list_footer")
  .querySelector("button")
  .addEventListener("click", () => {
    const newDay = {
      index: allDays.length + 1,
      calories: day.reduce((acc, val) => acc + val.weight * val.calories, 0),
      products: [...day],
    };
    allDays.push(newDay);
    changeDay([]);
    changeCurrentDay(allDays.length + 1);
    renderDayList();
    renderAllDays();
    localStorage.setItem("allDays", JSON.stringify(allDays));
    localStorage.removeItem("day");
    renderGraph();
  });

const caloriesColHeader = document
  .querySelector(".product_list_header")
  .querySelector("div")
  .querySelectorAll("p")[1];

caloriesColHeader.style.cursor = "pointer";
caloriesColHeader.addEventListener("click", () => {
  changeSort();
  renderProductList();
});

const productNameInput = document
  .querySelector(".product_list_footer")
  .querySelector("input");
productNameInput.addEventListener("input", () => {
  changeProductName(productNameInput.value);
  renderProductList();
});

renderGraph();
