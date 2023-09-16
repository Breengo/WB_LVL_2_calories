import { products, day, limit, sort, productName } from "./data";
import renderDayList from "./renderDayList";

const renderProductList = () => {
  let modifiedProducts = [...products];
  if (sort) {
    modifiedProducts = modifiedProducts.sort((a, b) => a.calories - b.calories);
  }
  if (productName) {
    modifiedProducts = modifiedProducts.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
  }
  const productList = document.querySelector(".product_list_items");
  productList.innerHTML = "";
  modifiedProducts.forEach((product) => {
    const productListItem = document.createElement("div");
    productListItem.classList.add("product_list_item");
    productListItem.innerHTML = `
        <p>${product.name}</p>
        <p>${product.calories} к/г</p>
        <input class="small_input" placeholder="Грамм" type="text" />
        <button class="plus_button">+</button>
        <button class="plus_button">-</button>
        `;
    productList.appendChild(productListItem);
  });

  const productListItems = document.querySelectorAll(".product_list_item");
  productListItems.forEach((item, index) => {
    const buttons = item.querySelectorAll("button");
    buttons[0].addEventListener("click", () => {
      const product = { name: "", calories: "", weight: "" };
      const pList = item.querySelectorAll("p");
      product.weight = Number(item.querySelector("input").value);
      product.name = pList[0].innerText;
      product.calories = Number(pList[1].innerText.replace("к/г", ""));
      item.querySelector("input").value = "";
      day.push(product);
      if (
        day.reduce((acc, val) => acc + val.weight * val.calories, 0) > limit
      ) {
        alert("Вы превысили лимит калорий");
      }
      localStorage.setItem("day", JSON.stringify(day));
      renderDayList();
    });
    buttons[1].addEventListener("click", () => {
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      renderProductList();
    });
  });
};

export default renderProductList;
