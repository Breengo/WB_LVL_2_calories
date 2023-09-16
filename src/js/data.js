let products = [];
let day = [];
let allDays = [];
let limit = 1000;
let currentDay = 1;
let sort = false;
let productName = "";

const checkStorage = () => {
  const storageProducts = localStorage.getItem("products");
  if (storageProducts) {
    products = JSON.parse(storageProducts);
  }

  const storageLimit = localStorage.getItem("limit");
  if (limit) {
    limit = storageLimit;
  }

  const storageDay = localStorage.getItem("day");
  if (storageDay) {
    day = JSON.parse(storageDay);
  }

  const storageAllDays = localStorage.getItem("allDays");
  if (storageAllDays) {
    allDays = JSON.parse(storageAllDays);
    currentDay = allDays.length + 1;
  }
};

const changeCurrentDay = (value) => {
  currentDay = value;
};

const changeDay = (value) => {
  day = value;
};

const changeLimit = (value) => {
  limit = value;
};

const changeSort = () => {
  sort = !sort;
};

const changeProductName = (value) => {
  productName = value;
};

export {
  products,
  day,
  allDays,
  limit,
  currentDay,
  sort,
  productName,
  checkStorage,
  changeCurrentDay,
  changeDay,
  changeLimit,
  changeSort,
  changeProductName,
};
