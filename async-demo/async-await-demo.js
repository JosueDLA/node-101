// Async patterns
// Promises Demo

console.log("Before");
displayDetail();
console.log("After");

async function displayDetail() {
  const user = await getUser(1);
  const products = await getProducts(user.username);
  const product = await getDetail(products[0]);
  console.log(product);
}

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
