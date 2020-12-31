// Async patterns
// Callback

console.log("Before");
getUser(1, function (user) {
  console.log("User Name: ", user);
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Async task");
    console.log("Reading User...");
    callback({ id: id, username: "Josue" });
  }, 2000);
}
