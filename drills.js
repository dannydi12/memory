/**
 * Linear Complexity
 * It has to iterate through the string n times
 */
function url(string) {
  // return string.split(' ').join('%20') // less efficient because we have to iterate twice
  return string.replace(/ /g, '20%')
}

console.log(url('tauhida parveen'))
console.log(url('www.thinkful.com /tauh ida parv e en'))

/**
 * Linear Complexity
 * It has to iterate through the array element amount of times
 */
function filterArray(array) {
  const newArray = []
  array.forEach((element) => element >= 5 && newArray.push(element))

  return newArray
}

console.log(filterArray([2, 3, 4, 5, 6, 7]))

/**
 * Linear Complexity
 * It has to iterate through the array element amount of times
 */
function maxSum(array) {
  let currentMax, globalMax
  currentMax = globalMax = array[0]

  for (let i = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i])
    globalMax = Math.max(currentMax, globalMax)
  }

  return globalMax;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))

/**
 * Linear Complexity
 * It has to sort through the array element amount of times
 */
function merge(array1, array2) {
  return array1.concat(array2).sort((a, b) => a - b)
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

/**
 * Linear Complexity
 * It has to parse through the string n amount of times
 */
function remove(string, regex) {
  let vowelRegex = new RegExp(`[${regex}]`, 'gi');
  return string.replace(vowelRegex, '');
}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

/**
 * Polynomial Complexity
 * We have two nested loops for this calculation.
 */
function products(arr) {
  const results = new Array(arr.length);

  arr.forEach((_, i) => {
    let temp = 1;
    arr.forEach((_, j) => {
      if (i !== j) {
        temp *= arr[j]
      }
    })
    results[i] = temp
  })

  return results
}

console.log('result:', products([1, 3, 9, 4]));
console.log('output needs to be:', [108, 36, 12, 27]);

/**
 * Polynomial Complexity n^2
 * We have nested for loops.
 */
function find0(array) {
  let xToChange = []
  let yToChange = []

  for (let y = 0; y < array.length; y++) {
    if (array[y].includes(0)) {
      yToChange.push(y)
    }
    for (let x = 0; x < array[y].length; x++) {
      if (array[y][x] === 0) {
        xToChange.push(x)
      }
    }
  }

  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if(xToChange.includes(x)) {
        array[y][x] = 0
      }
      if(yToChange.includes(y)) {
        array[y][x] = 0
      }
    }
  }

  return array
}

let array =
  [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];

console.log(find0(array))

/**
 * Linear Complexity
 * It has to rotate the string n number of times until it matches str2
 */
function rotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let rotation = str1;
  for (let i = 0; i < str1.length; i++) {
    const firstChar = rotation[0];
    rotation = rotation.slice(1).concat(firstChar);
    if (rotation === str2) {
      return true
    }
  }

  return false;
}

console.log(rotation('amazon', 'zonama'))
console.log(rotation('amazon', 'azonma'))
console.log(rotation('amazon', 'azonam'))