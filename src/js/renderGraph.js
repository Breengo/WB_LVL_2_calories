import { allDays } from "./data";

const renderGraph = () => {
  const graph = document.querySelector(".graph_picture");
  graph.innerHTML = "";
  const max = Math.max(...allDays.map((item) => item.calories));
  allDays.forEach((day) => {
    const div = document.createElement("div");
    div.classList.add("graph_entity");
    div.innerHTML = `
      <p>День ${day.index}</p>
      <p class="graph_entity_calories">${day.calories} к</p>`;
    div.style.height = `${day.calories / ((max * 1.1) / 100)}%`;
    graph.appendChild(div);
  });
};

export default renderGraph;
