import { allDays, changeCurrentDay, changeDay, currentDay } from "./data";

const renderAllDays = () => {
  const allDayList = document.querySelector(".all_day_list_items");
  allDayList.innerHTML = "";
  allDays.forEach((day) => {
    const dayItem = document.createElement("div");
    dayItem.classList.add("all_day_list_item");
    dayItem.innerHTML = `
          <p>День ${day.index}</p>
          <p>${day.calories} Калорий</p>
          <button>Подробнее</button>
          <button>Удалить</button>
          `;
    allDayList.appendChild(dayItem);
  });
  document.querySelectorAll(".all_day_list_item").forEach((item, index) => {
    const buttons = item.querySelectorAll("button");
    buttons[0].addEventListener("click", () => {
      changeCurrentDay(allDays[index].index);
      changeDay(allDays[index].products);
      renderDayList();
    });
    buttons[1].addEventListener("click", () => {
      allDays.splice(index, 1);
      for (let i = index; i < allDays.length; i++) {
        allDays[i].index -= 1;
      }
      renderAllDays();
      renderGraph();
      localStorage.setItem("allDays", JSON.stringify(allDays));
    });
  });
};

export default renderAllDays;
