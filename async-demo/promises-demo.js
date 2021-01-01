// Async patterns
// Promises Demo

console.log("Before");

getUser(1)
  .then((user) => getProducts(user.username))
  .then((product) => getDetail(product[0]))
  .then((detail) => console.log(detail))
  .catch((err) => console.log("Error:", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading User...");
      resolve({ id: id, username: "Josue" });
    }, 2000);
  });
}

function getProducts(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading User Products...");
      resolve(["product1", "product2", "product3"]);
    }, 2000);
  });
}

function getDetail(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Product Detail...");
      resolve(["Detai"]);
    }, 2000);
  });
}
