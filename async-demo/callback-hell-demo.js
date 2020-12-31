// Async patterns
// Callback Hell

console.log("Before");
getUser(1, function (user) {
  console.log("User Name: ", user);

  // Get products
  getProducts(user.username, (products) => {
    console.log("Products:", products);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Async task");
    console.log("Reading User...");
    callback({ id: id, username: "Josue" });
  }, 2000);
}

function getProducts(username, callback) {
  setTimeout(() => {
    console.log("Async task #2");
    console.log("Reading User Products...");
    callback(["product1", "product2", "product3"]);
  }, 2000);
}
