const Array = require('./Array');

function main() {
  let arr = new Array();
  arr.push(3);

  //   console.log(arr);
  // Length: 1, capacity: 3, address: 0

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
  // Length: 6, capacity: 12, address: 3

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  // Length: 3, capacity: 12, address: 3

  console.log(arr.get(0))

  for (let i = 0; i <= arr.length; i++) {
    arr.remove(i)
  }

  arr.push("tauhida");

  console.log(arr)
  console.log(arr.get(0))
}

main();