// Async patterns
// Callback Hell Demo

console.log("Before");
getUser(1, function (user) {
  getProducts(user.username, (products) => {
    getDetail(products[0], (detail) => {
      console.log(detail);
    });
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading User...");
    callback({ id: id, username: "Josue" });
  }, 2000);
}

function getProducts(username, callback) {
  setTimeout(() => {
    console.log("Reading User Products...");
    callback(["product1", "product2", "product3"]);
  }, 2000);
}

function getDetail(product, callback) {
  setTimeout(() => {
    console.log("Reading Product Detail...");
    callback(["Detai"]);
  }, 2000);
}
