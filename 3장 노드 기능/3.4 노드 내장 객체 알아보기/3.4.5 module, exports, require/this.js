console.log("1", this);
console.log("2", this === module.exports);
console.log("3", this === exports);
function whatIsThis() {
  console.log("4", "function", this === exports, this === global);
}
whatIsThis();
