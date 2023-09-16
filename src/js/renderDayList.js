import { day, currentDay } from "./data";

const renderDayList = () => {
  const dayList = document.querySelector(".day_list_items");
  document
    .querySelector(".day_list_header")
    .querySelector("h2").innerText = `День ${currentDay}`;
  dayList.innerHTML = "";
  day.forEach((product) => {
    const dayListItem = document.createElement("div");
    dayListItem.classList.add("day_list_item");
    dayListItem.innerHTML = `
          <p>${product.name}</p>
          <p>${product.calories} к/г</p>
          <p>${product.weight} г</p>
          <p>${product.calories * product.weight} к</p>
          <button class="plus_button">-</button>
          `;
    dayList.appendChild(dayListItem);
  });
  let sum = 0;
  const items = document.querySelectorAll(".day_list_item");
  items.forEach((item, index) => {
    sum += Number(item.querySelectorAll("p")[3].innerText.replace("к", ""));
    item.querySelector("button").addEventListener("click", () => {
      day.splice(index, 1);
      localStorage.setItem("day", JSON.stringify(day));
      renderDayList();
    });
  });

  document
    .querySelector(".day_list_footer")
    .querySelector("p").innerText = `Итого: ${sum} Калорий`;
};

export default renderDayList;
