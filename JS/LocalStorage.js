const user = {
  id: 1,
  name: "Kouadio",
  job: "Solfware developper",
};

const storeUser = localStorage.setItem("user", JSON.stringify(user));
